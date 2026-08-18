import HeroCYDILY from "@/components/HeroCYDILY";
import Navbar from "@/components/Navbar";
import Chiffres from "@/components/Chiffres";
import QuoteSimulator from "@/components/QuoteSimulator";
import About from "@/components/About";
import Why from "@/components/Why";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import Link from "next/link";
import { Shield, Award, Users, ArrowRight } from "lucide-react";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Raison from "@/components/Raison";

export default function HomePage() {
  return (
    <main className="bg-slate-950 text-slate-100 min-h-screen">
      <Navbar />
      <HeroCYDILY />
      <Chiffres />
      <About />
      <Raison />
      <Why />
      <Services />
      <Testimonials />
      <Faq />
      <Footer />
    </main>
  );
}
