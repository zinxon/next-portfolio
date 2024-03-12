"use client";
import Footer from "@/components/main/Footer";
import { Hero } from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import { useEffect } from "react";
import { initializeGoogleTagManager } from "../googleTagManager";
export default function Home() {
  useEffect(() => {
    // Initialize Google Tag Manager with your GTM ID
    initializeGoogleTagManager("GTM-P7FJFWQD");
  }, []);
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
