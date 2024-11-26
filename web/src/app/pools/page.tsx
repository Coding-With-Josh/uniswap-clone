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

}