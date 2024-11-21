import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#191B1F] border-b border-[#2C2F36] z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image src="/logo.svg" alt="Logo" width={24} height={24} className="mr-2" />
              <span className="text-white text-xl font-semibold">Solana Swap</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/swap" className="text-white hover:text-gray-300">
                Swap
              </Link>
              <Link href="/pools" className="text-white hover:text-gray-300">
                Pools
              </Link>
              <Link href="/tokens" className="text-white hover:text-gray-300">
                Tokens
              </Link>
              <Link href="/nfts" className="text-white hover:text-gray-300">
                NFTs
              </Link>
            </div>
          </div>

          {/* Connect Wallet Button */}
          <button className="bg-[#243056] hover:bg-[#2C3B67] text-white font-medium py-2 px-4 rounded-full">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
}
