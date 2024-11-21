export default function SwapPage() {
  return (
    <div className="min-h-screen bg-[#191B1F] pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[480px] mx-auto bg-[#212429] rounded-3xl p-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold text-white">Swap</h1>
            <button className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Token Input */}
          <div className="bg-[#191B1F] rounded-2xl p-4 mb-1">
            <div className="flex justify-between mb-2">
              <input 
                type="number" 
                placeholder="0.0"
                className="bg-transparent text-2xl text-white outline-none w-full"
              />
              <button className="flex items-center bg-[#212429] hover:bg-[#2C2F36] rounded-2xl px-3 py-1">
                <span className="text-white mr-2">SOL</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-400">≈ $0.00</div>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center my-2">
            <button className="bg-[#243056] p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>

          {/* Token Output */}
          <div className="bg-[#191B1F] rounded-2xl p-4 mb-4">
            <div className="flex justify-between mb-2">
              <input 
                type="number" 
                placeholder="0.0"
                className="bg-transparent text-2xl text-white outline-none w-full"
              />
              <button className="flex items-center bg-[#212429] hover:bg-[#2C2F36] rounded-2xl px-3 py-1">
                <span className="text-white mr-2">Select token</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="text-sm text-gray-400">≈ $0.00</div>
          </div>

          {/* Swap Button */}
          <button className="w-full bg-[#243056] hover:bg-[#2C3B67] text-white font-medium py-4 px-4 rounded-2xl">
            Connect Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
