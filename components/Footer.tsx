export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Floating CTA Card - Using Emerald for a high-end feel */}
        <div className="relative overflow-hidden bg-emerald-600 rounded-[2.5rem] p-8 md:p-14 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-emerald-200">
          {/* Decorative subtle background pattern for texture */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
          
          <div className="text-center md:text-left relative z-10">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-3">
              Ready to grow your legacy?
            </h3>
            <p className="text-emerald-50 text-lg opacity-90">
              Join over 5,000 families securing their future today.
            </p>
          </div>
          
          <button className="relative z-10 bg-[#0d1119] text-white px-10 py-5 rounded-full font-bold hover:bg-slate-800 transition-all shadow-xl hover:scale-105 active:scale-95 whitespace-nowrap">
            Get Started Today
          </button>
        </div>
        
        {/* Bottom Navigation & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-slate-100">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="font-playfair font-bold text-[#0d1119] text-xl">
              Our Family <span className="text-emerald-600">Investment</span>
            </p>
            <p className="text-slate-400 text-xs uppercase tracking-[0.2em]">
              Rooted in Community.
            </p>
          </div>

          <div className="flex gap-8 text-sm font-semibold text-slate-500">
            <a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-emerald-600 transition-colors">Contact</a>
          </div>

          <p className="text-[11px] text-slate-400 font-medium uppercase tracking-widest">
            © {new Date().getFullYear()} OFI CO.
          </p>
        </div>
      </div>
    </footer>
  );
}