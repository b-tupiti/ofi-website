export default function Hero() {
  return (
    <header className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-[#0d1119]">
      {/* 1. The Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="videos/coin-spinning.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>

      {/* 2. The Dark Overlay - Adjust the opacity (/60) to make it darker or lighter */}
      <div className="absolute inset-0 bg-[#0d1119]/70 z-10" />

      {/* 3. The Content - Increased z-index to stay above the overlay */}
      <div className="relative z-20 px-6 py-20 md:py-32 max-w-6xl mx-auto text-center">
        
        <h2 className="font-playfair text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
          Grow Your Savings, <br />
          <span className="bg-linear-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Protect Your Family's Future.
          </span>
        </h2>

        <p className="mt-8 text-lg md:text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
          A safe and simple way for farmers and rural entrepreneurs to save money, 
          earn interest, and build a legacy for their children.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="w-full sm:w-auto bg-green-600 text-white px-8 py-4 rounded-full text-lg font-bold transition-all hover:bg-green-500 hover:scale-105 active:scale-95 shadow-lg shadow-green-900/40">
            Start Saving Today
          </button>
          
          <button className="w-full sm:w-auto group flex items-center justify-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-white/20">
            Learn More
            <span className="transition-transform group-hover:translate-x-1 text-green-400">→</span>
          </button>
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 flex items-center justify-center gap-4 text-xs md:text-sm text-slate-300 uppercase tracking-[0.2em] font-medium">
          <div className="h-px w-8 bg-white/20"></div>
          Trusted by 5,000+ Families
          <div className="h-px w-8 bg-white/20"></div>
        </div>
      </div>
    </header>
  );
}