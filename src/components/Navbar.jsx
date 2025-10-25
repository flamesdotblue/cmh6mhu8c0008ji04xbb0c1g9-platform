import React from 'react';
import { Home, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-full border border-white/20 bg-white/60 px-4 py-3 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <nav className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white">
                <Home size={18} />
              </span>
              <span className="font-semibold tracking-tight">Elevate Living</span>
            </a>
            <div className="hidden items-center gap-6 md:flex text-sm">
              <a href="#listings" className="text-neutral-700 hover:text-neutral-900 transition">Browse</a>
              <a href="#about" className="text-neutral-700 hover:text-neutral-900 transition">About</a>
              <a href="#contact" className="text-neutral-700 hover:text-neutral-900 transition">Contact</a>
              <button className="rounded-full bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800 transition">List a Property</button>
            </div>
            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700">
              <Menu size={18} />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
