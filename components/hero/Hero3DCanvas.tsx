'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

const LABELS = [
  'ND-01', '0x4F8B', 'NET-84', 'SYS.404',
  'DATA-9', 'REL-3D', '01101', 'SYN-8'
];

interface Edge {
  start: [number, number, number];
  end: [number, number, number];
}

interface NodeLabel {
  pos: [number, number, number];
  text: string;
}

function AtmosphericFog() {
  const { scene } = useThree();
  const isDarkRef = useRef(true);

  useEffect(() => {
    const checkTheme = () => {
      isDarkRef.current = document.documentElement.classList.contains('dark');
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useFrame(() => {
    const targetFogColor = isDarkRef.current ? new THREE.Color('#030712') : new THREE.Color('#f8fafc');
    if (!scene.fog) {
      scene.fog = new THREE.Fog(targetFogColor.getHex(), 4.2, 9.2);
    } else {
      (scene.fog as THREE.Fog).color.lerp(targetFogColor, 0.05);
    }
  });

  return null;
}

function Constellation() {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const pulsesRef = useRef<THREE.Points>(null);

  // Genera nodi casuali in uno spazio 3D
  const count = 45;
  const maxDistance = 3.0;
  const pulseCount = 18;

  const { positions, linePositions, edges, nodeLabels } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const nodeCoords: Array<[number, number, number]> = [];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2.2 + Math.random() * 1.8;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      nodeCoords.push([x, y, z]);
    }

    // Calcola connessioni di linee
    const lineCoords: number[] = [];
    const edgeList: Edge[] = [];

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          const p1: [number, number, number] = [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]];
          const p2: [number, number, number] = [pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]];

          lineCoords.push(...p1, ...p2);
          edgeList.push({ start: p1, end: p2 });
        }
      }
    }

    // Seleziona un sottoinsieme di nodi per le etichette alfanumeriche
    const labels: NodeLabel[] = [];
    const step = Math.floor(count / LABELS.length);
    for (let i = 0; i < LABELS.length; i++) {
      const idx = (i * step) % count;
      labels.push({
        pos: nodeCoords[idx],
        text: LABELS[i]
      });
    }

    return {
      positions: pos,
      linePositions: new Float32Array(lineCoords),
      edges: edgeList,
      nodeLabels: labels
    };
  }, []);

  // Genera stato per i pallini/impulsi di dati in movimento
  const pulsesState = useMemo(() => {
    const pulseArray = [];
    const pulsePositions = new Float32Array(pulseCount * 3);

    for (let i = 0; i < pulseCount; i++) {
      const edgeIdx = Math.floor(Math.random() * (edges.length || 1));
      pulseArray.push({
        edgeIdx,
        progress: Math.random(),
        speed: 0.2 + Math.random() * 0.4,
        direction: Math.random() > 0.5 ? 1 : -1
      });
    }

    return { pulseArray, pulsePositions };
  }, [edges, pulseCount]);

  // Target e rotazione smooth
  const targetRotation = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseLeave = () => {
      mousePos.current.x = 0;
      mousePos.current.y = 0;
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Theme detection
  const isDarkRef = useRef(true);

  useEffect(() => {
    const checkTheme = () => {
      isDarkRef.current = document.documentElement.classList.contains('dark');
    };
    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  useFrame((state, delta) => {
    // Sospendi i calcoli se il container non è visibile nello schermo
    if (!groupRef.current?.visible) return;

    const time = state.clock.getElapsedTime() * 0.3;
    
    targetRotation.current.x = time * 0.1 - mousePos.current.y * 0.35;
    targetRotation.current.y = time * 0.15 + mousePos.current.x * 0.35;

    const lerpFactor = Math.min(delta * 4, 0.1);

    if (groupRef.current) {
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotation.current.x, lerpFactor);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotation.current.y, lerpFactor);
    }

    if (pointsRef.current) {
      const mat = pointsRef.current.material as THREE.PointsMaterial;
      const targetPointColor = isDarkRef.current ? new THREE.Color('#e2e8f0') : new THREE.Color('#64748b');
      mat.color.lerp(targetPointColor, 0.1);
      mat.opacity = isDarkRef.current ? 0.85 : 0.8;
    }

    if (linesRef.current) {
      const mat = linesRef.current.material as THREE.LineBasicMaterial;
      const targetLineColor = isDarkRef.current ? new THREE.Color('#64748b') : new THREE.Color('#cbd5e1');
      mat.color.lerp(targetLineColor, 0.1);
      mat.opacity = isDarkRef.current ? 0.35 : 0.4;
    }

    // Aggiorna posizione degli impulsi di dati lungo le linee
    if (pulsesRef.current && edges.length > 0) {
      const posAttr = pulsesRef.current.geometry.attributes.position as THREE.BufferAttribute;
      const mat = pulsesRef.current.material as THREE.PointsMaterial;
      const targetPulseColor = isDarkRef.current ? new THREE.Color('#ffffff') : new THREE.Color('#334155');
      mat.color.lerp(targetPulseColor, 0.1);

      pulsesState.pulseArray.forEach((p, i) => {
        p.progress += p.speed * delta;
        if (p.progress >= 1) {
          p.progress = 0;
          p.edgeIdx = Math.floor(Math.random() * edges.length);
          p.direction = Math.random() > 0.5 ? 1 : -1;
        }

        const edge = edges[p.edgeIdx];
        if (edge) {
          const t = p.direction === 1 ? p.progress : 1 - p.progress;
          const x = THREE.MathUtils.lerp(edge.start[0], edge.end[0], t);
          const y = THREE.MathUtils.lerp(edge.start[1], edge.end[1], t);
          const z = THREE.MathUtils.lerp(edge.start[2], edge.end[2], t);

          posAttr.setXYZ(i, x, y, z);
        }
      });
      posAttr.needsUpdate = true;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodi particle */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.08}
          color="#e2e8f0"
          transparent
          opacity={0.85}
          sizeAttenuation
        />
      </points>

      {/* Connessioni tra nodi */}
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#64748b"
          transparent
          opacity={0.35}
          linewidth={1}
        />
      </lineSegments>

      {/* Impulsi / pallini dati che scorrono lungo le linee */}
      <points ref={pulsesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pulsesState.pulsePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          color="#ffffff"
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Etichette alfanumeriche sui nodi (visibilità ed evita ricalcolo pesante) */}
      {nodeLabels.map((lbl, idx) => (
        <Html
          key={idx}
          position={lbl.pos}
          center
          distanceFactor={6}
          style={{
            pointerEvents: 'none',
            userSelect: 'none',
            willChange: 'transform'
          }}
        >
          <div style={{ transform: 'scale(0.55)', transformOrigin: 'center center' }}>
            <span className="font-mono text-[9px] tracking-wider font-semibold px-1 py-0.5 rounded border whitespace-nowrap bg-white/80 text-slate-700 border-slate-300/70 shadow-xs dark:bg-slate-900/90 dark:text-slate-200 dark:border-slate-700/60">
              {lbl.text}
            </span>
          </div>
        </Html>
      ))}
    </group>
  );
}

export function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full absolute inset-0 pointer-events-none">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 60 }}
          dpr={[1, 1.25]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
            precision: 'mediump'
          }}
          className="w-full h-full"
        >
          <AtmosphericFog />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Constellation />
        </Canvas>
      )}
    </div>
  );
}


