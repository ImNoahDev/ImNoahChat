import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { clerkMiddleware } from "@clerk/nextjs/server";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { cn } from "@/lib/utils";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ImNoahChat",
  description: "Chat app by ImNoah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(openSans.className, "bg-white dark:bg-[#313338]")}
        >
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="im-noah-chat-theme">
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}