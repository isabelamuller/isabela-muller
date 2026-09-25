import "./globals.css";

import { Quicksand, Smooch_Sans } from "next/font/google";
import { PageLoader } from "./PageLoader";

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
        <PageLoader />
        {children}
        <footer className="fixed bottom-3 left-3 md:flex flex-col font-arial text-xs hidden">
          <a
            href="mailto:isabelamuller1@hotmail.com"
            className="opacity-30 hover:opacity-100"
          >
            isabelamuller1@hotmail.com
          </a>
        </footer>
      </body>
    </html>
  );
}
