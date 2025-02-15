import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rejoice Engineering&Electromechanical",
  description: "Rejoice Engineering and Electromechanical Work PLC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
