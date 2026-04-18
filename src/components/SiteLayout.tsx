import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Toaster } from "@/components/ui/sonner";
import { useLenis } from "@/hooks/use-lenis";

export function SiteLayout({ children }: { children: ReactNode }) {
  useLenis();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </div>
  );
}
