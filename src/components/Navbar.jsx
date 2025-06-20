import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Pengenalan", href: "/pengenalan" },
  { name: "Panduan", href: "/panduan" },
  { name: "Teks", href: "/teks" },
  { name: "Sejarah", href: "/sejarah" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-transparent py-3 shadow-md" : "bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 select-none">
          <svg
            className="w-10 h-10 fill-primary drop-shadow-md"
            viewBox="0 0 64 64"
            aria-hidden="true"
          >
            <circle cx="32" cy="32" r="30" />
            <path d="M20 44L32 20L44 44H20Z" fill="#fff" fillOpacity="0.15" />
          </svg>
          <span className="text-primary font-bold text-2xl text-glow">
            Aksara Batak
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(({ name, href }, idx) => (
            <a
              key={idx}
              href={href}
              className="text-foreground/80 hover:text-primary font-semibold relative transition duration-300"
            >
              {name}
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-primary scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="md:hidden p-2 text-foreground hover:text-primary transition focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile nav */}
      <div
        className={cn(
          "md:hidden fixed inset-0 bg-background/90 backdrop-blur-lg flex flex-col items-center justify-center gap-10 text-xl transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map(({ name, href }, idx) => (
          <a
            key={idx}
            href={href}
            onClick={() => setIsMenuOpen(false)}
            className="text-foreground/90 hover:text-primary font-semibold px-8 py-4 rounded-lg ring-transparent focus:outline-none focus:ring-4 focus:ring-primary focus:ring-opacity-40 transition"
          >
            {name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
