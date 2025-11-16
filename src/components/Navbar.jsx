import { Menu, Search, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="w-full fixed top-0 left-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/40 border border-white/60 rounded-2xl shadow-sm">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-red-500 to-rose-600" />
              <span className="font-semibold tracking-tight text-gray-900">TenderScope</span>
            </a>

            <div className="hidden md:flex items-center gap-8">
              {[
                "Product",
                "Buyers",
                "Events",
                "Pricing"
              ].map((item, idx) => (
                <a key={idx} href="#" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                  {item}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="group inline-flex items-center gap-2 text-sm font-medium text-gray-900 px-3 py-2 rounded-xl hover:bg-gray-900/5 transition">
                <Search className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
                Quick Search
              </button>
              <a href="#get-started" className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-gray-900 hover:bg-black px-4 py-2 rounded-xl transition">
                Get started
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl bg-white/80 border border-white/70 shadow-sm">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
