"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Mail, 
  Clock, 
  ChevronDown, 
  Menu, 
  X 
} from "lucide-react";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  weight: ["600", "800"],
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Déclenche l'animation de rotation + brillance toutes les 6 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIsAnimating(false);
      }, 1000); // L'animation dure 1 seconde
    }, 6000); // Répéter toutes les 6 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full bg-white shadow-sm font-sans">
      {/* 1. TOP BAR */}
      <div className="relative flex items-center justify-between border-b border-gray-100 min-h-[42px] overflow-hidden">
        
        {/* Partie Vert Sombre avec effet biseauté */}
        <div className="relative z-10 bg-[#0F2C23] text-white px-4 md:px-8 py-2.5 text-xs flex items-center gap-6 pr-12 [clip-path:polygon(0_0,_100%_0,_88%_100%,_0%_100%)]">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>example@gmail.com</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Sun - Fri: 8.00am - 10.00pm</span>
          </div>
        </div>

        {/* Réseaux Sociaux en Doré */}
        <div className="flex items-center gap-2 px-4 md:px-8">
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#0F2C23] transition-colors"
            aria-label="Facebook"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#0F2C23] transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href="#"
            className="w-7 h-7 rounded-full bg-[#C5A059] text-white flex items-center justify-center hover:bg-[#0F2C23] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 stroke-round" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVBAR */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-32 flex items-center justify-between">
        
        {/* LOGO AGRANDI AVEC TEXTE AUX COULEURS DU LOGO */}
        <Link href="/" className="flex items-center gap-4 py-2 overflow-visible group">
          <div className="relative flex-shrink-0">
            <Image 
              src="/logoss.jpg" 
              alt="CYDILLY Logo" 
              width={320}
              height={100}
              className={`h-20 sm:h-24 w-auto object-contain transition-all duration-1000 ease-in-out ${
                isAnimating 
                  ? "rotate-[360deg] brightness-110 drop-shadow-[0_0_15px_rgba(197,160,89,0.7)]" 
                  : "rotate-0 brightness-100"
              }`} 
              priority
            />
          </div>

          {/* TEXTE ASSORTI AU LOGO */}
          <div className={`flex flex-col justify-center w-fit ${jakarta.className}`}>
            {/* Ligne 1 : Vert Sombre */}
            <span className="text-base sm:text-lg font-black text-[#0F2C23] leading-none uppercase tracking-tight block">
              Faire de l'invisible
            </span>

            {/* Ligne 2 : Doré Cydilly */}
            <span className="text-[11px] sm:text-[12px] font-bold text-[#C5A059] uppercase leading-none tracking-[0.21em] mt-1.5 block">
              Une forme visible
            </span>
          </div>
        </Link>

        {/* DESKTOP MENU LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">
          <div className="relative py-2">
            <Link href="/" className="text-[#0F2C23] flex items-center gap-1 font-bold">
              Home <ChevronDown className="w-4 h-4 stroke-[2.5]" />
            </Link>
            <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#C5A059] rounded-full"></span>
          </div>

          <Link href="/about" className="hover:text-[#C5A059] transition-colors">
            About
          </Link>

          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-[#C5A059] transition-colors">
            <span>Services</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#C5A059]" />
          </div>

          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-[#C5A059] transition-colors">
            <span>Pages</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#C5A059]" />
          </div>

          <div className="group relative flex items-center gap-1 cursor-pointer hover:text-[#C5A059] transition-colors">
            <span>Blog</span>
            <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-[#C5A059]" />
          </div>

          <Link href="/contact" className="hover:text-[#C5A059] transition-colors">
            Contact
          </Link>
        </nav>

        {/* CTA BUTTON - Vert Sombre & Hover Doré */}
        <div className="hidden lg:block">
          <Link
            href="/book"
            className="bg-[#0F2C23] hover:bg-[#C5A059] text-white px-7 py-3 text-xs font-black tracking-wider uppercase transition-all shadow-md rounded-sm"
          >
            BOOK NOW
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#0F2C23]"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3 font-semibold text-gray-700">
          <Link href="/" className="block text-[#0F2C23]">Home</Link>
          <Link href="/about" className="block hover:text-[#C5A059]">About</Link>
          <Link href="/services" className="block hover:text-[#C5A059]">Services</Link>
          <Link href="/pages" className="block hover:text-[#C5A059]">Pages</Link>
          <Link href="/blog" className="block hover:text-[#C5A059]">Blog</Link>
          <Link href="/contact" className="block hover:text-[#C5A059]">Contact</Link>
          <Link
            href="/book"
            className="block text-center bg-[#0F2C23] hover:bg-[#C5A059] text-white py-3 text-xs font-bold tracking-wider uppercase mt-4 transition-colors"
          >
            BOOK NOW
          </Link>
        </div>
      )}
    </header>
  );
}