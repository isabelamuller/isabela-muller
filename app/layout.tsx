import "./globals.css";

import { Quicksand, Smooch_Sans } from "next/font/google";

const smoochSans = Smooch_Sans({
  subsets: ["latin"],
  variable: "--font-smooch-sans-loaded",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand-loaded",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`
        h-full
        antialiased
        ${quicksand.variable}
        ${smoochSans.variable}
      `}
    >
      <body className="flex min-h-full flex-col">
        <main>{children}</main>
        <footer className="absolute bottom-3 left-3 flex flex-col font-arial text-xs">
          <span className="opacity-30">Copyright© 2026 Isabela Müller</span>
          <a
            href="mailto:isabelamuller1@hotmail.com"
            className="opacity-30 hover:opacity-100"
          >
            isabelamuller1@hotmail.com
          </a>
          <span className="opacity-30">Date Last Modified: 16/07/2026</span>
        </footer>
      </body>
    </html>
  );
}
