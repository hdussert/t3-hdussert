import "~/styles/globals.css";

import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { ThemeSwitch } from "~/components/theme/theme-switch";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${inter.variable} relative transition-colors`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitch />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
