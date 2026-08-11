import Link from "next/link";

export default function Footer() {
  const SOCIAL_LINKS = [
    { 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>, 
      href: "https://www.linkedin.com/company/improxtechinc/", 
      label: "LinkedIn" 
    },
    { 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>, 
      href: "https://www.instagram.com/improxtech", 
      label: "Instagram" 
    },
    { 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.182 0 7.436 2.981 7.436 6.966 0 4.156-2.619 7.502-6.261 7.502-1.222 0-2.371-.635-2.766-1.385l-.754 2.875c-.272 1.038-1.01 2.339-1.503 3.136 1.144.348 2.355.533 3.606.533 6.627 0 11.987-5.366 11.987-11.985C24 5.367 18.644 0 12.017 0z"/></svg>, 
      href: "https://in.pinterest.com/improxtechinc/", 
      label: "Pinterest" 
    },
    { 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>, 
      href: "https://x.com/improxtechinc", 
      label: "X" 
    },
    { 
      icon: <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>, 
      href: "https://www.facebook.com/improxtechinc/", 
      label: "Facebook" 
    }
  ];

  return (
    <footer className="bg-slate-50 py-16 border-t border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Logo & Info Column */}
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="inline-block">
              <img 
                src="/images/logo.png" 
                alt="Admin Assist" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              Building secure, scalable digital platforms and intelligent technology systems for enterprise organisations worldwide.
            </p>
            <div className="space-y-2 pt-2">
              <p className="text-slate-900 font-medium text-sm">
                Coastal Highway, Lewes, DE 19958
              </p>
              <p className="text-slate-900 font-medium text-sm">
                Phone: (407) 900-0208
              </p>
            </div>
            {/* Social Icons */}
            <div className="flex space-x-3 pt-4">
              {SOCIAL_LINKS.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label={social.label}
                  className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-600 hover:border-brand-600 transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Services */}
            <div>
              <h3 className="text-slate-900 font-bold mb-6 text-sm">Services</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/services/administrative-support" className="text-slate-500 hover:text-brand-600 transition-colors">Administrative Support</Link></li>
                <li><Link href="/services/executive-assistance" className="text-slate-500 hover:text-brand-600 transition-colors">Executive Assistance</Link></li>
                <li><Link href="/services/customer-support" className="text-slate-500 hover:text-brand-600 transition-colors">Customer Support</Link></li>
                <li><Link href="/services" className="text-slate-500 hover:text-brand-600 transition-colors">All Services</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-slate-900 font-bold mb-6 text-sm">Company</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/about" className="text-slate-500 hover:text-brand-600 transition-colors">About Us</Link></li>
                <li><Link href="/#pricing" className="text-slate-500 hover:text-brand-600 transition-colors">Pricing</Link></li>
                <li><Link href="/blog" className="text-slate-500 hover:text-brand-600 transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-slate-900 font-bold mb-6 text-sm">Contact</h3>
              <ul className="space-y-4 text-sm">
                <li><Link href="/#contact" className="text-slate-500 hover:text-brand-600 transition-colors">Get in Touch</Link></li>
                <li><Link href="/privacy" className="text-slate-500 hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-200 mt-16 pt-8 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Admin Assist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
