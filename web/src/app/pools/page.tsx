<<<<<<< HEAD
import { Header } from "@/components/layout/header"
import { PoolList } from "@/components/pools/pool-list"

export default function PoolsPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto p-4 pt-24">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-3xl font-bold">Pools</h1>
        </div>
        <PoolList />
      </div>
    </main>
  )
=======
export default function PoolsPage() {
  return (
    <div className="min-h-screen bg-[#191B1F] pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-semibold text-white">Pools</h1>
            <button className="bg-[#243056] hover:bg-[#2C3B67] text-white font-medium py-2 px-4 rounded-full">
              + New Position
            </button>
          </div>

          {/* Pool Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Example Pool Card */}
            <div className="bg-[#212429] rounded-2xl p-4">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500"></div>
                  <div className="w-8 h-8 rounded-full bg-purple-500"></div>
                </div>
                <span className="ml-3 text-white font-medium">SOL / USDC</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fee Tier</span>
                  <span className="text-white">0.3%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">APR</span>
                  <span className="text-white">12.45%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">TVL</span>
                  <span className="text-white">$1.2M</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Volume 24H</span>
                  <span className="text-white">$234.5K</span>
                </div>
              </div>
            </div>

            {/* More Pool Cards (duplicated for example) */}
            <div className="bg-[#212429] rounded-2xl p-4">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-green-500"></div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500"></div>
                </div>
                <span className="ml-3 text-white font-medium">RAY / USDT</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fee Tier</span>
                  <span className="text-white">0.3%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">APR</span>
                  <span className="text-white">8.32%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">TVL</span>
                  <span className="text-white">$890K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Volume 24H</span>
                  <span className="text-white">$156.2K</span>
                </div>
              </div>
            </div>

            <div className="bg-[#212429] rounded-2xl p-4">
              <div className="flex items-center mb-4">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-500"></div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500"></div>
                </div>
                <span className="ml-3 text-white font-medium">SRM / SOL</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Fee Tier</span>
                  <span className="text-white">0.3%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">APR</span>
                  <span className="text-white">15.67%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">TVL</span>
                  <span className="text-white">$567K</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Volume 24H</span>
                  <span className="text-white">$98.4K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> fdb9e3c4745a8b0af1d7f52e1dde9bf5ce12b1e1
}
