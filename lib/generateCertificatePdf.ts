import { jsPDF } from 'jspdf';
import { CertificatePayload, formatCertificateDate } from './certificate';

interface PdfLabels {
  badge: string;
  title: string;
  subtitle: string;
  awardedTo: string;
  forCompleting: string;
  date: string;
  id: string;
  footer: string;
  org: string;
}

const LABELS: Record<'it' | 'en', PdfLabels> = {
  it: {
    badge: 'Relatronica Academy',
    title: 'Attestato di completamento',
    subtitle: 'Percorso formativo aperto e gratuito',
    awardedTo: 'Conferito a',
    forCompleting: 'Per il completamento del corso',
    date: 'Data',
    id: 'ID attestato',
    footer: 'relatronica.com/learn · Design speculativo · Civic tech · Tecnologie responsabili',
    org: 'Relatronica',
  },
  en: {
    badge: 'Relatronica Academy',
    title: 'Certificate of completion',
    subtitle: 'Free and open learning path',
    awardedTo: 'Awarded to',
    forCompleting: 'For completing the course',
    date: 'Date',
    id: 'Certificate ID',
    footer: 'relatronica.com/learn · Speculative design · Civic tech · Responsible technologies',
    org: 'Relatronica',
  },
};

const LOGO_ASPECT = 152 / 164;

let logoDataUrlCache: string | null = null;

async function getLogoDataUrl(): Promise<string> {
  if (logoDataUrlCache) return logoDataUrlCache;

  const response = await fetch('/logo.png');
  const blob = await response.blob();

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      logoDataUrlCache = reader.result as string;
      resolve(logoDataUrlCache);
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export async function generateCertificatePdf(
  payload: CertificatePayload,
  locale: 'it' | 'en'
): Promise<void> {
  const labels = LABELS[locale];
  const courseTitle = locale === 'it' ? payload.courseTitleIt : payload.courseTitleEn;
  const dateStr = formatCertificateDate(payload.completedAt, locale);

  const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
  const w = doc.internal.pageSize.getWidth();
  const h = doc.internal.pageSize.getHeight();

  // Background
  doc.setFillColor(248, 250, 252);
  doc.rect(0, 0, w, h, 'F');

  // Outer border
  doc.setDrawColor(74, 124, 89);
  doc.setLineWidth(1.2);
  doc.rect(12, 12, w - 24, h - 24);

  // Inner border
  doc.setLineWidth(0.3);
  doc.rect(16, 16, w - 32, h - 32);

  const logoH = 14;
  const logoW = logoH * LOGO_ASPECT;
  const logoData = await getLogoDataUrl();
  doc.addImage(logoData, 'PNG', w / 2 - logoW / 2, 18, logoW, logoH);

  // Header badge
  doc.setFillColor(74, 124, 89);
  doc.roundedRect(w / 2 - 42, 34, 84, 10, 2, 2, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'bold');
  doc.text(labels.badge, w / 2, 40.5, { align: 'center' });

  // Title
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(26);
  doc.setFont('helvetica', 'bold');
  doc.text(labels.title, w / 2, 62, { align: 'center' });

  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(labels.subtitle, w / 2, 70, { align: 'center' });

  // Divider
  doc.setDrawColor(132, 169, 140);
  doc.setLineWidth(0.5);
  doc.line(w / 2 - 60, 78, w / 2 + 60, 78);

  // Recipient
  doc.setFontSize(11);
  doc.setTextColor(100, 116, 139);
  doc.text(labels.awardedTo, w / 2, 92, { align: 'center' });

  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(15, 23, 42);
  doc.text(payload.recipientName, w / 2, 104, { align: 'center' });

  // Course
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(labels.forCompleting, w / 2, 118, { align: 'center' });

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(74, 124, 89);
  const titleLines = doc.splitTextToSize(courseTitle, w - 80);
  doc.text(titleLines, w / 2, 128, { align: 'center' });

  const metaY = 128 + titleLines.length * 7 + 8;

  // Meta row
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(100, 116, 139);
  doc.text(`${labels.date}: ${dateStr}`, w / 2 - 50, metaY, { align: 'center' });
  doc.text(`${labels.id}: ${payload.id}`, w / 2 + 50, metaY, { align: 'center' });

  // Footer
  doc.setFontSize(8);
  doc.setTextColor(148, 163, 184);
  doc.text(labels.footer, w / 2, h - 22, { align: 'center' });

  doc.save(`relatronica-${payload.courseSlug}-${payload.id}.pdf`);
}
