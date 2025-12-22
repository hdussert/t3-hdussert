import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { Toaster } from "sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "DUSSERT Hugo",
  description: "Hugo Dussert's personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans ${inter.variable} relative transition-colors`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
