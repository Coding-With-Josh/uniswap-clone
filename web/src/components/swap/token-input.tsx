"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface TokenInputProps {
  value: {
    address: string
    symbol: string
    amount: string
  }
  onChange: (value: {
    address: string
    symbol: string
    amount: string
  }) => void
  label: string
}

export function TokenInput({ value, onChange, label }: TokenInputProps) {
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amount = e.target.value
    if (amount === "" || /^\d*\.?\d*$/.test(amount)) {
      onChange({ ...value, amount })
    }
  }

  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center justify-between gap-2">
        <Label>{label}</Label>
        <Button variant="outline" className="gap-2">
          {value.symbol}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
      <Input
        type="text"
        placeholder="0.0"
        value={value.amount}
        onChange={handleAmountChange}
        className="mt-2 border-0 bg-transparent text-2xl shadow-none focus-visible:ring-0"
      />
    </div>
  )
}
