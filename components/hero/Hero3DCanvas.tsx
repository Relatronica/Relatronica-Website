'use client';

import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Constellation() {
  const pointsRef = useRef<any>(null);
  const linesRef = useRef<any>(null);

  // Genera nodi casuali in uno spazio 3D (ottimizzato per 60fps istantanei)
  const count = 45;
  const maxDistance = 3.0;

  const { positions, linePositions, originalPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);

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

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;
    }

    // Calcola connessioni di linee iniziali
    const lineCoords: number[] = [];
    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < maxDistance) {
          lineCoords.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]
          );
        }
      }
    }

    return {
      positions: pos,
      originalPositions: orig,
      linePositions: new Float32Array(lineCoords)
    };
  }, []);

  // Target and current rotation values for smooth lerp interpolation
  const targetRotation = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  // Listen to window mousemove so motion never abruptly freezes at container boundaries
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalizza coordinate da -1 a 1 su scala finestra globale
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const handleMouseLeave = () => {
      // Quando il mouse esce dal browser, ritorna dolcemente al centro
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

  // Dynamic theme detection for adaptive contrast (Dark vs Light mode)
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
    const time = state.clock.getElapsedTime() * 0.3;
    
    // Smoothly calculate target pointer rotation using global mouse position
    targetRotation.current.x = time * 0.1 - mousePos.current.y * 0.35;
    targetRotation.current.y = time * 0.15 + mousePos.current.x * 0.35;

    // Dampen/smooth the movement using THREE.MathUtils.lerp
    const lerpFactor = Math.min(delta * 4, 0.1);

    if (pointsRef.current) {
      pointsRef.current.rotation.x = THREE.MathUtils.lerp(pointsRef.current.rotation.x, targetRotation.current.x, lerpFactor);
      pointsRef.current.rotation.y = THREE.MathUtils.lerp(pointsRef.current.rotation.y, targetRotation.current.y, lerpFactor);

      // Adapt point color and size for Light vs Dark theme (Grey in Light mode, Cyan in Dark mode)
      const targetPointColor = isDarkRef.current ? new THREE.Color('#38bdf8') : new THREE.Color('#64748b');
      pointsRef.current.material.color.lerp(targetPointColor, 0.1);
      pointsRef.current.material.opacity = isDarkRef.current ? 0.85 : 0.8;
    }

    if (linesRef.current) {
      linesRef.current.rotation.x = THREE.MathUtils.lerp(linesRef.current.rotation.x, targetRotation.current.x, lerpFactor);
      linesRef.current.rotation.y = THREE.MathUtils.lerp(linesRef.current.rotation.y, targetRotation.current.y, lerpFactor);

      // Adapt line color and opacity for Light vs Dark theme (Grey in Light mode, Emerald in Dark mode)
      const targetLineColor = isDarkRef.current ? new THREE.Color('#34d399') : new THREE.Color('#94a3b8');
      linesRef.current.material.color.lerp(targetLineColor, 0.1);
      linesRef.current.material.opacity = isDarkRef.current ? 0.3 : 0.35;
    }
  });

  return (
    <group>
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
          color="#38bdf8"
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
          color="#34d399"
          transparent
          opacity={0.3}
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export function Hero3DCanvas() {
  return (
    <div className="w-full h-full absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
          precision: 'mediump'
        }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Constellation />
      </Canvas>
    </div>
  );
}
