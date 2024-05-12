import type { Metadata } from "next";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Robinson Market Hub",
  description: "Welcome to robinson market hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main>
        {children}
        <Toaster richColors position="bottom-center" />
      </main>
    </>
  );
}
