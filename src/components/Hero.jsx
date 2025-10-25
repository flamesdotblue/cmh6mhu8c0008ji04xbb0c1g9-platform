import React from 'react';
import Spline from '@splinetool/react-spline';
import { Search, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-white"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center text-white sm:px-6">
        <h1 className="font-manrope text-4xl font-semibold leading-tight drop-shadow sm:text-5xl md:text-6xl">
          Find your next home in the city skyline
        </h1>
        <p className="mt-4 max-w-2xl text-white/90">
          Curated modern apartments, penthouses, and rentals in the most desirable neighborhoods.
        </p>

        <div className="mt-8 w-full max-w-3xl">
          <div className="rounded-2xl bg-white/90 p-2 shadow-xl backdrop-blur">
            <form className="grid grid-cols-1 gap-2 sm:grid-cols-12">
              <div className="sm:col-span-6 flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-3">
                <Search size={18} className="text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search by building, street, or keyword"
                  className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                />
              </div>
              <div className="sm:col-span-4 flex items-center gap-2 rounded-xl border border-neutral-200 bg-white px-3 py-3">
                <MapPin size={18} className="text-neutral-500" />
                <input
                  type="text"
                  placeholder="Neighborhood or city"
                  className="w-full bg-transparent outline-none placeholder:text-neutral-400"
                />
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="w-full rounded-xl bg-neutral-900 px-4 py-3 font-medium text-white hover:bg-neutral-800 transition">
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
