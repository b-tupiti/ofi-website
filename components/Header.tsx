export default function Header() {
  return (
    /* Changed background to a bright emerald and text to a dark slate for maximum legibility */
    <nav className="sticky top-0 z-50 w-full bg-emerald-500 px-6 py-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* Logo - Darker text to stand out against the bright background */}
        <h1 className="text-xl md:text-2xl font-playfair font-bold text-[#0d1119] tracking-tight">
          Our Family <span className="text-white">Investment</span>
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">
          <a 
            href="#about" 
            className="hidden md:block text-sm font-bold text-[#0d1119]/80 hover:text-[#0d1119] transition-colors"
          >
            How it Works
          </a>
          
          {/* Button is now dark to contrast the bright header */}
          <button className="bg-[#0d1119] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all shadow-md">
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}