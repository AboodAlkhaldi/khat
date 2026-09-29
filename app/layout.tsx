import type { Metadata, Viewport } from "next";
// الخط مستضاف محليًا داخل المشروع (بلا طلبات خارجية إلى Google Fonts)
import "@fontsource/ibm-plex-sans-arabic/300.css";
import "@fontsource/ibm-plex-sans-arabic/400.css";
import "@fontsource/ibm-plex-sans-arabic/500.css";
import "@fontsource/ibm-plex-sans-arabic/600.css";
import "@fontsource/ibm-plex-sans-arabic/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "ورشة مدخل إلى البرمجة | نفع — من سطر",
  description:
    "ورشة مدخل إلى البرمجة على ثلاثة أيام: نفهم الأساس، نرى الفكرة تتحول إلى كود، ونبني خريطة واضحة لما بعد الورشة.",
  openGraph: {
    title: "ورشة مدخل إلى البرمجة | نفع — من سطر",
    description:
      "ثلاثة أيام نبدأ فيها من الصفر ونبني خريطة واضحة للطريق. سجّل في الورشة.",
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
