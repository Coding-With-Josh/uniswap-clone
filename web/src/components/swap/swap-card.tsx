"use client"

import { useState } from "react"
// import { useAccount } from "wagmi"
import { ArrowDownUp } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { TokenInput } from "@/components/swap/token-input"
import { Input } from "../ui/input"

export function SwapCard() {
const [address, setAddress] = useState("")
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [tokenIn, setTokenIn] = useState({
    address: "",
    symbol: "ETH",
    amount: "",
  })
  const [tokenOut, setTokenOut] = useState({
    address: "",
    symbol: "Select token",
    amount: "",
  })

  const handleSwap = async () => {
    if (!address) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please connect your wallet first",
      })
      return
    }

    setLoading(true)
    try {
      // Implement swap logic here
      toast({
        title: "Success",
        description: "Swap executed successfully",
      })
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to execute swap",
      })
    } finally {
      setLoading(false)
    }
  }

  const switchTokens = () => {
    setTokenIn(tokenOut)
    setTokenOut(tokenIn)
  }

  return (
    <Card className="w-full max-w-[480px]">
      <CardHeader className="text-2xl font-semibold">Swap</CardHeader>
      <CardContent className="space-y-4">
        <TokenInput
          value={tokenIn}
          onChange={setTokenIn}
          label="You pay"
        />
        <div className="flex justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={switchTokens}
          >
            <ArrowDownUp className="h-4 w-4" />
          </Button>
        </div>
        <TokenInput
          value={tokenOut}
          onChange={setTokenOut}
          label="You receive"
        />
      </CardContent>
      <CardFooter>
        <Input placeholder="Walle Addess" onChange={(e) => setAddress(e.target.value)} value={address} />
        <Button
          className="w-full"
          disabled={loading || !address}
          onClick={handleSwap}
        >
          {!address
            ? "Connect Wallet"
            : loading
            ? "Swapping..."
            : "Swap"}
        </Button>
      </CardFooter>
    </Card>
  )
}
