import { motion } from "framer-motion";
import { Shield, Mail, MapPin, ExternalLink } from "lucide-react";

const footerLinks = {
  Resources: [
    { label: "Video Course", href: "#course" },
    { label: "Research Library", href: "#" },
    { label: "Clinical Guidelines", href: "#" },
    { label: "CME Credits", href: "#" },
  ],
  Organization: [
    { label: "About Us", href: "#about" },
    { label: "Faculty", href: "#" },
    { label: "Partners", href: "#" },
    { label: "Careers", href: "#" },
  ],
  Support: [
    { label: "FAQ", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer id="footer" className="relative bg-slate-950 pt-20 pb-10">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-6 group">
              <Shield className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              <span className="text-2xl font-black tracking-tight">
                <span className="text-white">Immuno</span>
                <span className="text-cyan-400">Global</span>
              </span>
            </a>
            <p className="text-slate-400 leading-relaxed max-w-sm mb-8 font-medium">
              Empowering healthcare professionals worldwide with comprehensive
              education on immunodeficiency disorders. Building bridges between
              research and clinical practice.
            </p>
            <div className="flex items-center gap-3 text-slate-300 font-medium mb-3">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-cyan-400" />
              </div>
              <span>Geneva, Switzerland</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 font-medium">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <Mail className="w-4 h-4 text-cyan-400" />
              </div>
              <a
                href="mailto:info@immunoglobal.org"
                className="hover:text-white transition-colors"
              >
                info@immunoglobal.org
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-base font-bold text-white mb-6 tracking-wide">
                {title}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-cyan-400 transition-colors group"
                    >
                      {link.label}
                      {link.href === "#" && (
                        <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="pt-8 border-t border-slate-800">
          {/* Medical disclaimer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 p-6 bg-slate-900 border border-slate-800 rounded-2xl"
          >
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-medium">
              <span className="font-bold text-white">
                Medical Disclaimer:
              </span>{" "}
              The content on this website is intended for educational purposes
              only and does not constitute medical advice, diagnosis, or
              treatment. Always consult a qualified healthcare provider for
              clinical decision-making. ImmunoGlobal is not responsible for any
              actions taken based on the information provided on this platform.
            </p>
          </motion.div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium text-slate-500">
            <p>
              © {new Date().getFullYear()} ImmunoGlobal. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
