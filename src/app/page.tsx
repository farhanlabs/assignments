'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface IProduct {
  _id: string;
  slug: string;
  name: string;
  tag?: string;
  price: number;
  mrp: number;
  images: string[];
}

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProducts(data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  // Smooth Scroll Function
  const scrollToProducts = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    const element = document.getElementById('featured-products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-slate-800">
        <div className="flex flex-col items-center space-y-4">
          <img src="https://1fi.in/1fi.svg" alt="1Fi" className="h-12 animate-pulse" />
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-[#7c3aed] border-t-transparent rounded-full animate-spin" />
            <span className="font-medium text-sm text-slate-500">Loading Catalog...</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-purple-200">
      
      {/* ================= OFFICIAL FLOATING NAVBAR ================= */}
      <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-4 sm:px-6 py-3 flex items-center justify-between border border-purple-50/50">
          
          <div className="flex items-center shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="https://1fi.in/1fi.svg" alt="1Fi Logo" className="h-8 sm:h-10 object-contain" />
          </div>

          <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-slate-600">
            <Link href="/" className="text-[#7c3aed]">Home</Link>
            <button onClick={scrollToProducts} className="hover:text-[#7c3aed] transition-colors cursor-pointer">Shop</button>
            <Link href="#" className="hover:text-[#7c3aed] transition-colors">How it Works</Link>
            <Link href="#" className="hover:text-[#7c3aed] transition-colors">Calculator</Link>
            <Link href="#" className="hover:text-[#7c3aed] transition-colors">FAQs</Link>
          </div>

          {/* Nav Shop Now Button scrolls to products */}
          <button onClick={scrollToProducts} className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 sm:px-6 py-2.5 rounded-full text-[13px] font-bold shadow-md shadow-purple-200 transition-all active:scale-95 shrink-0 cursor-pointer">
            Shop Now ↗
          </button>
        </div>
      </nav>

      {/* ================= OFFICIAL HERO SECTION ================= */}
      <section className="pt-36 sm:pt-44 pb-16 px-4 text-center max-w-4xl mx-auto flex flex-col items-center">
        
        <div className="bg-purple-50 text-slate-700 text-[11px] sm:text-xs font-bold px-4 py-2 rounded-full mb-8 border border-purple-100 flex items-center gap-2 shadow-sm">
          <span className="text-[#7c3aed] text-sm leading-none">✦</span> 
          <span><span className="text-[#7c3aed]">New</span> No-cost EMIs backed by mutual funds</span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
          Shop today <br />
          <span className="text-slate-400 font-light italic">Pay later</span> using <br />
          <span className="text-[#7c3aed]">mutual funds.</span>
        </h1>

        {/* Hero Buttons scroll to products */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 w-full sm:w-auto px-4">
          <button onClick={scrollToProducts} className="border-2 border-[#7c3aed] text-[#7c3aed] px-8 py-3.5 rounded-xl font-bold hover:bg-purple-50 transition-colors w-full sm:w-auto cursor-pointer">
            Check Eligibility ↗
          </button>
          <button onClick={scrollToProducts} className="bg-[#7c3aed] text-white px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-purple-200 hover:bg-[#6d28d9] transition-all active:scale-[0.98] w-full sm:w-auto flex items-center justify-center gap-2 cursor-pointer">
            Start Shopping 
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </button>
        </div>

        <p className="mt-8 text-sm text-slate-400 font-medium leading-relaxed">
          No credit score required. No interest.<br />
          Fully backed by your <strong className="text-slate-500 font-bold">investments.</strong>
        </p>
      </section>

      {/* ================= FEATURED PRODUCTS SECTION (Target for Scroll) ================= */}
      {/* Added ID here for smooth scroll target */}
      <section id="featured-products" className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-24 scroll-mt-24">
        
        <div className="flex items-center justify-between mb-8 px-2">
           <h3 className="text-sm font-bold text-slate-500 uppercase tracking-widest">Featured Products</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Link key={p._id} href={`/products/${p.slug}`}>
              <div className="bg-[#f8f5ff] rounded-3xl p-6 h-40 flex flex-row items-center justify-between border border-purple-100/50 hover:shadow-xl hover:shadow-purple-100/60 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                
                <div className="flex flex-col justify-center h-full max-w-[55%]">
                  <h3 className="font-bold text-slate-800 text-lg group-hover:text-[#7c3aed] transition-colors line-clamp-2 leading-tight">
                    {p.name}
                  </h3>
                  <div className="mt-2 flex flex-col">
                     <p className="text-[10px] font-bold text-[#7c3aed] uppercase tracking-wider">0% Interest</p>
                     <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">Instant Approval</p>
                  </div>
                </div>

                <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 relative">
                  <div className="absolute inset-0 bg-white/40 rounded-full blur-xl group-hover:bg-purple-200/50 transition-colors"></div>
                  <img 
                    src={p.images[0]} 
                    alt={p.name} 
                    className="relative w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500" 
                  />
                </div>
                
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}