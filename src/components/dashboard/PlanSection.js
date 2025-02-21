export function PlanSection() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-rose-200 via-purple-200 to-blue-300 p-8 mb-12">
      <div className="flex justify-between items-start mb-12">
        <div>
          <div className="text-sm font-medium text-gray-700/80 mb-2">CURRENT PLAN</div>
          <h2 className="text-4xl font-bold text-gray-800">Researcher</h2>
        </div>
        <button className="flex items-center gap-2 bg-white/20 text-gray-700 px-4 py-2 rounded-lg hover:bg-white/30 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5" />
          </svg>
          Manage Plan
        </button>
      </div>

      <div>
        <div className="flex items-center gap-2 text-gray-700 mb-2">
          <span>API Usage</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </div>
        <div className="text-gray-700/90 text-sm mb-2">0 / 1,000 Credits</div>
        <div className="w-full h-2 bg-white/30 rounded-full">
          <div className="h-full w-0 bg-white rounded-full"></div>
        </div>

        <div className="flex items-center gap-2 mt-6">
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer"/>
            <div className="w-11 h-6 bg-white/30 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
          <span className="text-gray-700">Pay as you go</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-gray-700">
            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
          </svg>
        </div>
      </div>
    </div>
  );
} 