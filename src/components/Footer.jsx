import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Instagram,
  Twitter,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-card/80 text-foreground py-16 mt-20 border-t border-primary">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Branding */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Aksara Batak
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Melestarikan dan mengenalkan aksara Batak sebagai warisan budaya
              yang berharga bagi generasi sekarang dan mendatang.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold text-primary mb-4">
              Navigasi
            </h4>
            <nav className="grid grid-cols-2 gap-2 font-semibold">
              <a href="/" className="hover:text-primary transition-colors py-1">
                Home
              </a>
              <a
                href="/pengenalan"
                className="hover:text-primary transition-colors py-1"
              >
                Pengenalan
              </a>
              <a
                href="/panduan"
                className="hover:text-primary transition-colors py-1"
              >
                Panduan
              </a>
              <a
                href="/teks"
                className="hover:text-primary transition-colors py-1"
              >
                Teks
              </a>
              <a
                href="/sejarah"
                className="hover:text-primary transition-colors py-1"
              >
                Sejarah
              </a>
              <a
                href="/tentang"
                className="hover:text-primary transition-colors py-1"
              >
                Tentang
              </a>
            </nav>
          </div>

          {/* Contact Info and Social Media */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold text-primary mb-4">Kontak</h4>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:aksarabatak@example.com"
                className="flex items-center justify-center md:justify-end space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Mail size={18} />
                <span>aksarabatak@example.com</span>
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center justify-center md:justify-end space-x-2 text-foreground hover:text-primary transition-colors"
              >
                <Phone size={18} />
                <span>+62 812 3456 7890</span>
              </a>
            </div>

            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="https://twitter.com/aksarabatak"
                aria-label="Follow us on Twitter"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/aksarabatak"
                aria-label="Connect with us on LinkedIn"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/aksarabatak"
                aria-label="Follow us on Instagram"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/aksarabatak"
                aria-label="View our projects on GitHub"
                className="p-2 rounded-full bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <br />

        {/* Copyright */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NazarMaulana. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group relative p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-300 transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp
              size={20}
              className="transform group-hover:-translate-y-1 transition-transform duration-300"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
