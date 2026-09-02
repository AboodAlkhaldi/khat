import type { Metadata, Viewport } from "next";
// الخط مستضاف محليًا داخل المشروع (بلا طلبات خارجية إلى Google Fonts)
import "@fontsource/ibm-plex-sans-arabic/300.css";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "أين أنت من البرمجة؟ | نفع — من سطر",
  description:
    "أولى لقاءات قدرات من خَط: لقاء للشباب المهتمين بالبرمجة من مختلف التخصصات والمستويات. نبدأ من مكانك أنت، ثم نرى من أين نكمل.",
  openGraph: {
    title: "أين أنت من البرمجة؟ | نفع — من سطر",
    description:
      "لقاء للشباب المهتمين بالبرمجة من مختلف التخصصات والمستويات. سجّل حضورك.",
    type: "website",
    locale: "ar_AR",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
