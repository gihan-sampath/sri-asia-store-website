import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sri Asia | Asiatischer Lebensmittelladen in Erlangen",
  description: "Authentische asiatische Lebensmittel, frisches Obst und Gemüse, Gewürze, Bio-Produkte und Lieferservice in Erlangen.",
  metadataBase: new URL("https://www.sri-asia.de"),
  openGraph: {
    title: "Sri Asia Erlangen",
    description: "Frisch. Authentisch. Ein Stück Asien.",
    url: "https://www.sri-asia.de",
    siteName: "Sri Asia",
    locale: "de_DE",
    type: "website",
  },
  other: { "codex-preview": "development" },
  icons: { icon: "/sri-asia-logo.webp", shortcut: "/sri-asia-logo.webp" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="de"><body>{children}</body></html>;
}
