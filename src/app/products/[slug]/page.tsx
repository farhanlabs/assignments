'use client';

import React, { useEffect, useState, use } from 'react';
import Link from 'next/link';

interface IColorVariant { _id?: string; color: string; image: string; }
interface IStorageVariant { _id?: string; ram: string; storage: string; price: number; mrp: number; }
interface IProduct { _id: string; slug: string; name: string; description?: string; tag?: string; mrp: number; price: number; images: string[]; colors: IColorVariant[]; storageOptions: IStorageVariant[]; }
interface IEmiPlan { id: string; tenure: number; interestRate: number; monthlyAmount: number; cashback: number; }

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);

  const [product, setProduct] = useState<IProduct | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<IColorVariant | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<IStorageVariant | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<IEmiPlan | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // Application modal states
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ fullName: '', mobile: '', email: '', pincode: '' });

  useEffect(() => {
    fetch(`/api/products/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setProduct(data.data);
          setActiveImage(data.data.images[0]);
          setSelectedColor(data.data.colors?.[0] || null);
          setSelectedStorage(data.data.storageOptions?.[0] || null);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [slug]);

  const currentPrice = selectedStorage?.price || product?.price || 0;
  const currentMrp = selectedStorage?.mrp || product?.mrp || 0;

  const emiPlans: IEmiPlan[] = [
    { id: '3m', tenure: 3, interestRate: 0, monthlyAmount: Math.round(currentPrice / 3), cashback: 7500 },
    { id: '6m', tenure: 6, interestRate: 0, monthlyAmount: Math.round(currentPrice / 6), cashback: 7500 },
    { id: '12m', tenure: 12, interestRate: 0, monthlyAmount: Math.round(currentPrice / 12), cashback: 7500 },
    { id: '24m', tenure: 24, interestRate: 0, monthlyAmount: Math.round(currentPrice / 24), cashback: 7500 },
    { id: '36m', tenure: 36, interestRate: 10.5, monthlyAmount: Math.round((currentPrice * 1.105) / 36), cashback: 7500 },
    { id: '48m', tenure: 48, interestRate: 10.5, monthlyAmount: Math.round((currentPrice * 1.21) / 48), cashback: 7500 },
    { id: '60m', tenure: 60, interestRate: 10.5, monthlyAmount: Math.round((currentPrice * 1.32) / 60), cashback: 7500 },
  ];

  useEffect(() => {
    if (emiPlans.length > 0) setSelectedPlan(emiPlans[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPrice]);

  const openApplicationForm = () => { setSubmitted(false); setShowForm(true); };
  const closeApplicationForm = () => { if (submitting) return; setShowForm(false); setTimeout(() => { setSubmitted(false); }, 300); };
  
  // Submit logic -> Loading -> Success Tick
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
    e.preventDefault(); 
    setSubmitting(true); 
    setTimeout(() => { 
      setSubmitting(false); 
      setSubmitted(true); 
    }, 1500); // 1.5 second loading animation before success tick
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-slate-800">
        <div className="flex flex-col items-center space-y-4">
          <img src="https://1fi.in/1fi.svg" alt="1Fi" className="h-12 animate-pulse" />
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 border-2 border-[#7c3aed] border-t-transparent rounded-full animate-spin" />
            <span className="font-medium text-sm text-slate-500">Loading Product...</span>
          </div>
        </div>
      </div>
    );
  }

  if (!product) return <div className="flex min-h-screen items-center justify-center bg-white font-bold">Product not found</div>;

  return (
    <>
      <main className="min-h-screen bg-[#fafafa] text-slate-900 font-sans pb-20">
        
        {/* ================= OFFICIAL FLOATING NAVBAR (Matches Home Page) ================= */}
        <nav className="fixed top-4 left-0 right-0 z-50 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="bg-white/90 backdrop-blur-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-full px-4 sm:px-6 py-3 flex items-center justify-between border border-purple-50/50">
            <Link href="/" className="flex items-center shrink-0">
              <img src="https://1fi.in/1fi.svg" alt="1Fi Logo" className="h-8 sm:h-10 object-contain" />
            </Link>
            <div className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-slate-600">
              <Link href="/" className="hover:text-[#7c3aed] transition-colors">Home</Link>
              <Link href="/" className="text-[#7c3aed]">Shop</Link>
              <Link href="#" className="hover:text-[#7c3aed] transition-colors">Calculator</Link>
              <Link href="#" className="hover:text-[#7c3aed] transition-colors">FAQs</Link>
            </div>
            <Link href="/">
              <button className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-5 sm:px-6 py-2.5 rounded-full text-[13px] font-bold shadow-md shadow-purple-200 transition-all active:scale-95 shrink-0 cursor-pointer">
                Back to Catalog
              </button>
            </Link>
          </div>
        </nav>

        {/* ================= MAIN GRID ================= */}
        <div className="max-w-6xl mx-auto px-4 pt-32 grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT PRODUCT ================= */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/60 flex flex-col items-center justify-between">
            <div className="w-full">
              <div className="relative w-full h-72 sm:h-80 mb-6 bg-[#f8f5ff] rounded-2xl overflow-hidden flex items-center justify-center border border-purple-50 shadow-inner">
                {product.tag && (
                  <span className="absolute top-4 left-4 z-10 bg-white text-[#7c3aed] text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm border border-purple-100">
                    {product.tag}
                  </span>
                )}
                <img src={activeImage} alt={product.name} className="object-contain h-56 sm:h-64 w-56 sm:w-64 hover:scale-105 transition-transform duration-500 drop-shadow-xl" />
              </div>

              {/* Gallery Thumbnails */}
              {product.images && product.images.length > 0 && (
                <div className="mb-6 flex justify-center gap-3 overflow-x-auto py-1">
                  {product.images.map((imgUrl, idx) => {
                    const isImgActive = activeImage === imgUrl;
                    return (
                      <button
                        key={idx} type="button" onClick={() => setActiveImage(imgUrl)}
                        className={`w-14 h-14 rounded-2xl border-2 overflow-hidden bg-slate-50 p-1.5 transition-all cursor-pointer shrink-0 ${isImgActive ? 'border-[#7c3aed] shadow-sm scale-110' : 'border-slate-200 opacity-60 hover:opacity-100'}`}
                      >
                        <img src={imgUrl} alt="Gallery" className="w-full h-full object-contain rounded-xl" />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-8 text-center">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    Color: <span className="text-slate-800">{selectedColor?.color}</span>
                  </label>
                  <div className="flex justify-center gap-3">
                    {product.colors.map((c, idx) => (
                      <button
                        key={idx} type="button" onClick={() => { setSelectedColor(c); setActiveImage(c.image); }} title={c.color}
                        className={`w-9 h-9 rounded-full border-2 transition-all cursor-pointer bg-white overflow-hidden p-0.5 ${selectedColor?.color === c.color ? 'border-[#7c3aed] scale-110 shadow-md' : 'border-slate-200 hover:scale-105'}`}
                      >
                        <img src={c.image} alt={c.color} className="w-full h-full object-cover rounded-full" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <h1 className="text-3xl font-extrabold text-slate-900 mb-2 text-center tracking-tight">{product.name}</h1>
              <p className="text-sm text-slate-500 text-center mb-8 leading-relaxed max-w-sm mx-auto">{product.description}</p>

              {/* Pricing Box */}
              <div className="w-full bg-[#f8f5ff] border border-purple-100 p-5 rounded-2xl flex justify-between items-center">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[#7c3aed] font-bold block mb-1">Mutual Fund Offer</span>
                  <span className="text-2xl font-black text-slate-900">₹{currentPrice.toLocaleString('en-IN')}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Standard MRP</span>
                  <span className="text-sm text-slate-400 line-through font-semibold">₹{currentMrp.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT EMI ================= */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl shadow-sm border border-slate-200/60 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 mb-8">
                <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Configure Configuration</h2>
                <span className="w-fit text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">⚡ Instant Approval</span>
              </div>

              {/* Professional RAM/Storage Selection */}
              {product.storageOptions && product.storageOptions.length > 0 && (
                <div className="mb-8">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Storage Variant</label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {product.storageOptions.map((opt, idx) => {
                      const isSelected = selectedStorage?.storage === opt.storage && selectedStorage?.ram === opt.ram;
                      return (
                        <button
                          key={idx} type="button" onClick={() => setSelectedStorage(opt)}
                          className={`px-4 py-3 rounded-2xl border-2 transition-all text-center cursor-pointer flex flex-col items-center justify-center ${isSelected ? 'border-[#7c3aed] bg-[#f8f5ff] shadow-sm' : 'border-slate-100 bg-white hover:border-purple-200'}`}
                        >
                          <span className={`text-[11px] font-extrabold uppercase mb-1 ${isSelected ? 'text-[#7c3aed]' : 'text-slate-500'}`}>{opt.ram}</span>
                          <span className={`text-lg font-black block mb-1 ${isSelected ? 'text-slate-900' : 'text-slate-700'}`}>{opt.storage}</span>
                          <span className="text-[10px] font-semibold text-slate-500 block">₹{opt.price.toLocaleString('en-IN')}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* EMI Plans (Vertical List) */}
              <div className="mb-8">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">Mutual Fund Backed EMI Plans</label>
                <div className="flex flex-col gap-3 h-[380px] overflow-y-auto pr-2 scrollbar-hide">
                  {emiPlans.map((plan) => {
                    const isSelected = selectedPlan?.id === plan.id;
                    return (
                      <div
                        key={plan.id} onClick={() => setSelectedPlan(plan)}
                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all flex justify-between items-center ${isSelected ? 'border-[#7c3aed] bg-[#f8f5ff] shadow-sm' : 'border-slate-100 bg-white hover:border-purple-200'}`}
                      >
                        <div>
                          <div className="font-bold text-slate-900 text-base">
                            ₹{plan.monthlyAmount.toLocaleString('en-IN')} <span className="text-slate-400 font-medium text-sm">x {plan.tenure} months</span>
                          </div>
                          {plan.cashback > 0 && (
                            <div className="text-emerald-500 text-xs mt-1.5 font-semibold">
                              Additional cashback of ₹{plan.cashback.toLocaleString('en-IN')}
                            </div>
                          )}
                        </div>
                        <div className="text-right">
                          <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${plan.interestRate === 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-slate-100 text-slate-600'}`}>
                            {plan.interestRate}% Interest
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Summary & CTA */}
            <div className="border-t border-slate-100 pt-6 mt-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <div>
                  <span className="text-[11px] text-slate-400 uppercase tracking-wider font-bold block mb-1">Selected Plan</span>
                  <span className="text-lg font-black text-slate-900">
                    {selectedPlan ? `${selectedPlan.tenure} Months @ ₹${selectedPlan.monthlyAmount.toLocaleString('en-IN')}/mo` : 'Select a plan'}
                  </span>
                </div>
                <div className="sm:text-right">
                   <span className="text-sm font-bold text-[#7c3aed] bg-[#f8f5ff] px-3 py-1.5 rounded-lg border border-purple-100 inline-block">
                    {selectedStorage?.storage} / {selectedColor?.color}
                  </span>
                </div>
              </div>

              {/* FINAL BUTTON ("Proceed with Plan" triggers Modal) */}
              <button
                type="button" onClick={openApplicationForm}
                className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] active:scale-[0.99] text-white font-bold py-4 px-6 rounded-2xl shadow-xl shadow-purple-200 transition-all duration-200 text-center tracking-wide flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Proceed with Plan</span>
                <span className="text-xl leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* ================= APPLICATION MODAL (Form & Success Tick) ================= */}
      {showForm && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/40 backdrop-blur-sm" onMouseDown={(e) => { if (e.target === e.currentTarget) closeApplicationForm(); }}>
          <div className="w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-purple-100 overflow-hidden animate-[modalIn_0.25s_ease-out]">
            
            {/* If Form is NOT yet submitted */}
            {!submitted ? (
              <>
                <div className="px-6 sm:px-8 pt-7 pb-5 border-b border-slate-100">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <img src="https://1fi.in/1fi.svg" alt="1Fi" className="h-10 object-contain" />
                      <div>
                        <h2 className="text-xl font-extrabold text-slate-900">Application KYC</h2>
                        <p className="text-xs font-medium text-slate-500 mt-0.5">Instant mutual fund verification</p>
                      </div>
                    </div>
                    <button type="button" onClick={closeApplicationForm} className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 flex items-center justify-center transition cursor-pointer">
                      <span className="text-xl leading-none">×</span>
                    </button>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="p-6 sm:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="sm:col-span-2">
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                      <input type="text" required value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} placeholder="As per PAN Card" className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-[#7c3aed] focus:bg-white focus:ring-4 focus:ring-purple-50" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Mobile Number</label>
                      <input type="tel" required pattern="[0-9]{10}" maxLength={10} value={formData.mobile} onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0, 10) })} placeholder="Linked to Mutual Funds" className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-[#7c3aed] focus:bg-white focus:ring-4 focus:ring-purple-50" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@example.com" className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm font-medium outline-none transition focus:border-[#7c3aed] focus:bg-white focus:ring-4 focus:ring-purple-50" />
                    </div>
                  </div>
                  
                  <button type="submit" disabled={submitting} className="mt-8 w-full h-13 bg-[#7c3aed] hover:bg-[#6d28d9] disabled:opacity-70 text-white rounded-xl font-bold py-3 text-sm flex items-center justify-center gap-2 transition-all shadow-lg shadow-purple-200 cursor-pointer disabled:cursor-not-allowed">
                    {submitting ? (<><span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />Processing...</>) : (<>Submit Application <span className="text-lg leading-none">→</span></>)}
                  </button>
                  <p className="text-center text-[10px] font-semibold text-slate-400 mt-4 uppercase tracking-wide">
                    🔒 256-bit Secure Encryption
                  </p>
                </form>
              </>
            ) : (
              
              /* ================= SUCCESS TICK SCREEN ================= */
              <div className="px-6 py-12 sm:px-10 sm:py-14 text-center">
                <div className="relative mx-auto w-24 h-24 mb-6">
                  {/* Outer pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-50" />
                  {/* Inner green circle with tick */}
                  <div className="relative w-24 h-24 rounded-full bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-200">
                    <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                      <path d="M5 12.5L9.5 17L19 7.5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="animate-[drawCheck_0.5s_ease-out_0.2s_both]" />
                    </svg>
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Success!</h2>
                <p className="text-sm text-slate-500 mt-3 leading-relaxed max-w-sm mx-auto font-medium">Congratulations <strong className="text-slate-800">{formData.fullName || 'User'}</strong>. Your application for <strong className="text-slate-800">{product.name}</strong> has been approved.</p>
                <button type="button" onClick={closeApplicationForm} className="mt-8 w-full h-13 bg-[#7c3aed] hover:bg-[#6d28d9] text-white rounded-xl font-bold text-sm transition-all shadow-lg shadow-purple-200 cursor-pointer">View Order Details</button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= ANIMATIONS ================= */}
      <style jsx global>{`
        @keyframes modalIn { from { opacity: 0; transform: translateY(20px) scale(0.95); } to { opacity: 1; transform: translateY(0) scale(1); } }
        @keyframes drawCheck { from { stroke-dasharray: 30; stroke-dashoffset: 30; } to { stroke-dasharray: 30; stroke-dashoffset: 0; } }
      `}</style>
    </>
  );
}