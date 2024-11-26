
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
  )}