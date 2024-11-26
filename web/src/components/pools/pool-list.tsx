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

const pools = [
  {
    token0: "ETH",
    token1: "USDC",
    fee: "0.05%",
    tvl: "$245.2M",
    volume24h: "$12.4M",
    volume7d: "$89.3M",
  },
  {
    token0: "WBTC",
    token1: "USDC",
    fee: "0.3%",
    tvl: "$123.4M",
    volume24h: "$8.2M",
    volume7d: "$45.6M",
  },
  {
    token0: "ETH",
    token1: "USDT",
    fee: "0.05%",
    tvl: "$98.7M",
    volume24h: "$6.5M",
    volume7d: "$34.2M",
  },
  {
    token0: "UNI",
    token1: "ETH",
    fee: "0.3%",
    tvl: "$45.6M",
    volume24h: "$2.3M",
    volume7d: "$15.8M",
  },
  {
    token0: "LINK",
    token1: "ETH",
    fee: "1%",
    tvl: "$34.2M",
    volume24h: "$1.8M",
    volume7d: "$12.4M",
  },
]

export function PoolList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <Input
          placeholder="Search pools"
          className="max-w-sm"
        />
      </div>
      <div className="rounded-lg border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pool</TableHead>
              <TableHead>Fee</TableHead>
              <TableHead>TVL</TableHead>
              <TableHead>Volume (24h)</TableHead>
              <TableHead>Volume (7d)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {pools.map((pool) => (
              <TableRow key={`${pool.token0}-${pool.token1}`}>
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <div className="h-8 w-8 rounded-full bg-accent" />
                      <div className="h-8 w-8 rounded-full bg-accent/80" />
                    </div>
                    <div>
                      {pool.token0}/{pool.token1}
                    </div>
                  </div>
                </TableCell>
                <TableCell>{pool.fee}</TableCell>
                <TableCell>{pool.tvl}</TableCell>
                <TableCell>{pool.volume24h}</TableCell>
                <TableCell>{pool.volume7d}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
