import { Link } from "@tanstack/react-router";
import whiteLogo from "../../assets/peditrack_logo/peditrack-white-nobg.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/domain", label: "Domain" },
  { to: "/milestones", label: "Milestones" },
  { to: "/documents", label: "Documents" },
  { to: "/slides", label: "Presentations" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Footer() {
  return (
    <footer className="bg-dark py-14">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={whiteLogo} alt="PediTrack Logo" className="h-9 w-auto object-contain" />
            <p className="mt-3 text-sm text-white/60 max-w-xs leading-relaxed">
              Integrated Predictive Intelligence Platform for Pediatric Healthcare
            </p>
            <p className="mt-2 text-xs text-white/40">
              Group 25-26J-442 | IT4010 Research Project | SLIIT 2025/2026
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white uppercase">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold tracking-widest text-white uppercase">Contact</p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/50">
              <li>
                <a
                  href="mailto:IT22107114@my.sliit.lk"
                  className="hover:text-white transition-colors"
                >
                  IT22107114@my.sliit.lk
                </a>
              </li>
              <li>SLIIT, New Kandy Road</li>
              <li>Malabe, Sri Lanka</li>
              <li className="pt-1 text-white/30 text-xs">IT4010 Research Project 2025/2026</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © 2025/2026 PediTrack — IPITPH | Group 25-26J-442 | SLIIT
          </p>
          <p className="text-xs text-white/30">
            Supervisor: Prof. Samantha Thelijjagoda &nbsp;|&nbsp; Co-Supervisor: Ms. Hansi De Silva
          </p>
        </div>
      </div>
    </footer>
  );
}
