import React from 'react';
import { BedDouble, Bath, MapPin, Heart } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Skyline Loft with Panoramic Views',
    location: 'Hudson Yards, New York',
    price: 6200,
    beds: 2,
    baths: 2,
    area: '1,250 sq ft',
    image:
      'https://images.unsplash.com/photo-1502005229762-cf1b2da7c9fb?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Minimalist Corner Apartment',
    location: 'Downtown, Los Angeles',
    price: 4800,
    beds: 1,
    baths: 1,
    area: '890 sq ft',
    image:
      'https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Luxury Penthouse Retreat',
    location: 'South Beach, Miami',
    price: 9800,
    beds: 3,
    baths: 3,
    area: '1,850 sq ft',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Contemporary Urban Studio',
    location: 'Mission Bay, San Francisco',
    price: 3500,
    beds: 1,
    baths: 1,
    area: '610 sq ft',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop',
  },
];

function ListingCard({ property }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[16/11] w-full overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <button className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/80 text-neutral-700 backdrop-blur hover:bg-white">
          <Heart size={16} />
        </button>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium text-neutral-900 backdrop-blur">
          ${property.price.toLocaleString()}/mo
        </div>
      </div>
      <div className="p-4">
        <h3 className="line-clamp-1 font-semibold tracking-tight text-neutral-900">{property.title}</h3>
        <div className="mt-1 flex items-center gap-1 text-sm text-neutral-600">
          <MapPin size={14} />
          <span className="line-clamp-1">{property.location}</span>
        </div>
        <div className="mt-3 flex items-center gap-4 text-sm text-neutral-700">
          <span className="inline-flex items-center gap-1"><BedDouble size={16} /> {property.beds} Beds</span>
          <span className="inline-flex items-center gap-1"><Bath size={16} /> {property.baths} Baths</span>
          <span className="ml-auto text-neutral-500">{property.area}</span>
        </div>
      </div>
    </div>
  );
}

export default function Listings() {
  return (
    <section id="listings" className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">Featured Listings</h2>
          <p className="mt-1 text-neutral-600">Handpicked homes for modern city living.</p>
        </div>
        <a href="#" className="hidden text-sm font-medium text-neutral-700 underline-offset-4 hover:underline sm:block">
          View all
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((p) => (
          <ListingCard key={p.id} property={p} />
        ))}
      </div>
    </section>
  );
}
