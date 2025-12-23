export default function Values() {
  return (
    <section className="bg-white py-24 px-6 relative overflow-hidden">
      {/* Subtle light emerald wash for background depth */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#0d1119] mb-4">
              Rooted in <span className="text-emerald-600">Trust</span>
            </h2>
            <p className="text-slate-600 text-lg">
              We’ve built a financial ecosystem specifically for the rhythms of rural life.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-200 mx-10 mb-4"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Modern Card 1 */}
          <div className="group relative p-px rounded-4xl bg-slate-200 hover:bg-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="bg-white rounded-[1.95rem] p-8 h-full flex flex-col items-start transition-colors">
              <div className="mb-6 p-3 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18 18.246 18.477 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1119] mb-3 tracking-tight">Built for Farmers</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Income isn't flat—it follows the rain. Our flexible deposits align with your harvest cycles and seasonal cash flow.
              </p>
            </div>
          </div>

          {/* Modern Card 2 */}
          <div className="group relative p-px rounded-4xl bg-slate-200 hover:bg-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="bg-white rounded-[1.95rem] p-8 h-full flex flex-col items-start transition-colors">
              <div className="mb-6 p-3 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1119] mb-3 tracking-tight">Community First</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Focusing on women and small-scale owners. We believe that when you empower a family, you lift an entire village.
              </p>
            </div>
          </div>

          {/* Modern Card 3 */}
          <div className="group relative p-px rounded-4xl bg-slate-200 hover:bg-emerald-500/50 transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10">
            <div className="bg-white rounded-[1.95rem] p-8 h-full flex flex-col items-start transition-colors">
              <div className="mb-6 p-3 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#0d1119] mb-3 tracking-tight">Safe & Secure</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                Your money is protected by bank-grade encryption and transparent auditing. Peace of mind for your legacy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}