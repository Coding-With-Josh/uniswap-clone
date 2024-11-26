"use client"

// import { ConnectButton } from "@rainbow-me/rainbowkit"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

const navigation = [
  { name: "Swap", href: "/" },
  { name: "Tokens", href: "/tokens" },
  { name: "Pools", href: "/pools" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold">
            UniswapClone
          </Link>
          <div className="flex gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "bg-secondary text-secondary-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button>Connect Wallet</Button>
        </div>
      </nav>
    </header>
  )
}
