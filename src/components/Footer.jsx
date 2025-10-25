import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-semibold tracking-tight">Elevate Living</h3>
            <p className="mt-1 text-sm text-neutral-600">Modern properties. Effortless renting.</p>
          </div>
          <nav className="flex gap-6 text-sm text-neutral-700">
            <a href="#about" className="hover:text-neutral-900 transition">About</a>
            <a href="#listings" className="hover:text-neutral-900 transition">Browse</a>
            <a href="#contact" className="hover:text-neutral-900 transition">Contact</a>
          </nav>
        </div>
        <div className="mt-6 text-xs text-neutral-500">© {new Date().getFullYear()} Elevate Living. All rights reserved.</div>
      </div>
    </footer>
  );
}
