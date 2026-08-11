import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/logo.png" 
            alt="Admin Assist" 
            width={240} 
            height={60} 
            className="h-10 md:h-12 w-auto object-contain"
            priority
          />
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <nav className="flex gap-6">
            <Link href="/" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Home</Link>
            <Link href="/services" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Services</Link>
            <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">About Us</Link>
            <Link href="/#pricing" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Pricing</Link>
            <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Blog</Link>
          </nav>
          <div className="flex items-center space-x-4 border-l border-slate-200 pl-6">
            <Link href="/#contact"><Button>Book Consultation</Button></Link>
          </div>
        </div>
        <button className="md:hidden p-2 text-slate-600">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  );
}
