import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Rejoice Engineering | Electromechanical & Automation Experts",
  description: "Rejoice Engineering provides precision electromechanical solutions, industrial automation, and sustainable energy systems. Your trusted engineering partner!",
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
