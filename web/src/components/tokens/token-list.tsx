"use client"

import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const tokens = [
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,235.24",
    change: "+2.34%",
    tvl: "$45.2B",
    volume: "$1.2B",
  },
  {
    name: "USD Coin",
    symbol: "USDC",
    price: "$1.00",
    change: "+0.01%",
    tvl: "$23.4B",
    volume: "$945.3M",
  },
  {
    name: "Uniswap",
    symbol: "UNI",
    price: "$7.24",
    change: "-1.24%",
    tvl: "$3.2B",
    volume: "$124.5M",
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    price: "$14.56",
    change: "+5.67%",
    tvl: "$2.8B",
    volume: "$234.1M",
  },
  {
    name: "Wrapped Bitcoin",
    symbol: "WBTC",
    price: "$43,245.67",
    change: "+1.23%",
    tvl: "$12.4B",
    volume: "$456.7M",
  },
]

export function TokenList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search tokens"
          className="max-w-sm"
        />
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Token</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>24h Change</TableHead>
              <TableHead>TVL</TableHead>
              <TableHead>Volume (24h)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tokens.map((token) => (
              <TableRow key={token.symbol}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-accent" />
                    <div>
                      <div>{token.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {token.symbol}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{token.price}</TableCell>
                <TableCell
                  className={
                    token.change.startsWith("+")
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {token.change}
                </TableCell>
                <TableCell>{token.tvl}</TableCell>
                <TableCell>{token.volume}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
