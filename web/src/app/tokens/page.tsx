<<<<<<< HEAD
import { Header } from "@/components/layout/header"
import { TokenList } from "@/components/tokens/token-list"

export default function TokensPage() {
  return (
    <main>
      <Header />
      <div className="container mx-auto p-4 pt-24">
        <h1 className="mb-6 text-3xl font-bold">Tokens</h1>
        <TokenList />
      </div>
    </main>
  )
=======
export default function TokensPage() {
  return (
    <div className="min-h-screen bg-[#191B1F] pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-white mb-4">Top Tokens on Solana</h1>
            <div className="flex gap-4 mb-6">
              <input
                type="text"
                placeholder="Search tokens"
                className="flex-grow bg-[#212429] text-white rounded-2xl px-4 py-3 outline-none"
              />
            </div>
          </div>

          {/* Tokens Table */}
          <div className="bg-[#212429] rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2C2F36]">
                  <th className="text-left text-sm text-gray-400 p-4">#</th>
                  <th className="text-left text-sm text-gray-400 p-4">Token</th>
                  <th className="text-right text-sm text-gray-400 p-4">Price</th>
                  <th className="text-right text-sm text-gray-400 p-4">Change</th>
                  <th className="text-right text-sm text-gray-400 p-4">TVL</th>
                  <th className="text-right text-sm text-gray-400 p-4">Volume 24H</th>
                </tr>
              </thead>
              <tbody>
                {/* Example Token Rows */}
                <tr className="border-b border-[#2C2F36] hover:bg-[#2C2F36]">
                  <td className="text-left text-sm text-white p-4">1</td>
                  <td className="text-left text-sm text-white p-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-blue-500 mr-2"></div>
                    <div>
                      <div className="font-medium">Solana</div>
                      <div className="text-gray-400">SOL</div>
                    </div>
                  </td>
                  <td className="text-right text-sm text-white p-4">$101.23</td>
                  <td className="text-right text-sm text-green-500 p-4">+5.67%</td>
                  <td className="text-right text-sm text-white p-4">$2.1B</td>
                  <td className="text-right text-sm text-white p-4">$156.7M</td>
                </tr>

                <tr className="border-b border-[#2C2F36] hover:bg-[#2C2F36]">
                  <td className="text-left text-sm text-white p-4">2</td>
                  <td className="text-left text-sm text-white p-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-green-500 mr-2"></div>
                    <div>
                      <div className="font-medium">USDC</div>
                      <div className="text-gray-400">USDC</div>
                    </div>
                  </td>
                  <td className="text-right text-sm text-white p-4">$1.00</td>
                  <td className="text-right text-sm text-green-500 p-4">+0.01%</td>
                  <td className="text-right text-sm text-white p-4">$1.8B</td>
                  <td className="text-right text-sm text-white p-4">$234.5M</td>
                </tr>

                <tr className="hover:bg-[#2C2F36]">
                  <td className="text-left text-sm text-white p-4">3</td>
                  <td className="text-left text-sm text-white p-4 flex items-center">
                    <div className="w-8 h-8 rounded-full bg-purple-500 mr-2"></div>
                    <div>
                      <div className="font-medium">Raydium</div>
                      <div className="text-gray-400">RAY</div>
                    </div>
                  </td>
                  <td className="text-right text-sm text-white p-4">$0.89</td>
                  <td className="text-right text-sm text-red-500 p-4">-2.34%</td>
                  <td className="text-right text-sm text-white p-4">$567.8M</td>
                  <td className="text-right text-sm text-white p-4">$89.2M</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
>>>>>>> fdb9e3c4745a8b0af1d7f52e1dde9bf5ce12b1e1
}
