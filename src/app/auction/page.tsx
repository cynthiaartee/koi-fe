import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronLeft, ChevronRight } from "lucide-react"
import BidButton from "@/components/bid-button"

export default function AuctionPage() {
  // Dummy data for auction items
  const auctionItems = [
    { id: 1, bids: 30, price: "8.500.000", time: "0:05:00" },
    { id: 2, bids: 15, price: "6.000.000", time: "0:05:00" },
    { id: 3, bids: 30, price: "8.500.000", time: "0:05:00" },
    { id: 4, bids: 30, price: "8.500.000", time: "0:05:00" },
    { id: 5, bids: 30, price: "8.500.000", time: "0:05:00" },
    { id: 6, bids: 15, price: "6.000.000", time: "0:05:00" },
    { id: 7, bids: 30, price: "8.500.000", time: "0:05:00" },
    { id: 8, bids: 30, price: "8.500.000", time: "0:05:00" },
  ]

  // Dummy data for history items
  const historyItems = [
    { id: 1, status: "Win" },
    { id: 2, status: "Win" },
    { id: 3, status: "Lose" },
    { id: 4, status: "Win" },
    { id: 5, status: "Lose" },
    { id: 6, status: "On Progress" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage="auction" />

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Auction Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {auctionItems.map((item) => (
            <div key={item.id} className="bg-[#E8D5B0] rounded-lg p-4">
              <h3 className="text-lg font-medium mb-2">Lorem Ipsum</h3>
              <div className="relative aspect-square mb-2">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Koi fish"
                  width={400}
                  height={400}
                  className="rounded-lg bg-blue-500"
                />
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>{item.bids} Bids</span>
                <span>{item.time}</span>
              </div>
              <div className="font-bold mb-3">Rp. {item.price}</div>
              <div className="flex gap-2">
                <BidButton
                  item={{
                    title: "Lorem Ipsum",
                    gender: "Male",
                    size: "53cm",
                    age: "2 year",
                    image: "/placeholder.svg?height=400&width=400",
                    bidCount: item.bids,
                    timeLeft: item.time,
                    currentPrice: Number.parseInt(item.price.replace(/\D/g, "")),
                    biddingPrice: Number.parseInt(item.price.replace(/\D/g, "")),
                    highestBidderId: "IcDF2004",
                  }}
                />
                <button className="bg-gray-400 text-white w-10 rounded-md hover:bg-gray-500 transition-colors flex items-center justify-center">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end mt-6">
          <Link
            href="#"
            className="bg-[#E8D5B0] text-red-800 px-6 py-2 rounded-full hover:bg-[#d8c5a0] transition-colors"
          >
            Next {">"}
          </Link>
        </div>

        {/* History Section */}
        <div className="mt-12 bg-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">History Auction</h2>
          <div className="relative">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-4 overflow-x-auto px-8 py-2">
              {historyItems.map((item) => (
                <div key={item.id} className="flex-shrink-0">
                  <div className="relative w-24 h-24 mb-2">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Koi fish history"
                      width={200}
                      height={200}
                      className="rounded-lg bg-blue-500"
                    />
                  </div>
                  <div className="text-center text-sm">{item.status}</div>
                </div>
              ))}
            </div>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-md">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

