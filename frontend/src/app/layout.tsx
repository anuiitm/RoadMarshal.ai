import "./globals.css";
import { ThemeProvider } from "next-themes";
import React from "react";

export const metadata = {
  title: "RoadMarshal AI",
  description: "Road safety intervention assistant",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider 
          attribute="class" 
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
