"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown, X } from "lucide-react"

interface BidModalProps {
  isOpen: boolean
  onClose: () => void
  item: {
    title: string
    gender: string
    size: string
    age: string
    image: string
    bidCount: number
    timeLeft: string
    currentPrice: number
    biddingPrice: number
    highestBidderId: string
  }
}

export default function BidModal({ isOpen, onClose, item }: BidModalProps) {
  const [bidAmount, setBidAmount] = useState(item.biddingPrice)

  if (!isOpen) return null

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const adjustBid = (amount: number) => {
    setBidAmount((prev) => prev + amount)
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#E8D5B0] rounded-lg p-4 sm:p-6 max-w-lg w-full mx-auto relative">
        {/* Close Button - Moved to top right */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 p-1"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title Section */}
        <div className="mb-4 pr-8">
          <h2 className="text-xl sm:text-2xl font-bold">{item.title}</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            {item.gender} / {item.size} / {item.age}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Image Section */}
          <div className="relative aspect-square bg-blue-500 rounded-lg overflow-hidden">
            <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
          </div>

          {/* Details Section */}
          <div className="space-y-2 text-sm sm:text-base">
            <div className="flex justify-between">
              <span>Bid count</span>
              <span>{item.bidCount}</span>
            </div>
            <div className="flex justify-between">
              <span>Time left</span>
              <span className="text-red-600">{item.timeLeft}</span>
            </div>
            <div className="flex justify-between">
              <span>Now price</span>
              <span>{formatPrice(item.currentPrice)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Bidding price</span>
              <div className="flex items-center">
                <span>{formatPrice(item.biddingPrice)}</span>
                <span className="ml-2 bg-white text-red-600 px-2 py-0.5 rounded-full text-xs sm:text-sm">Win</span>
              </div>
            </div>
            <div className="flex justify-between">
              <span>Highest bidder ID</span>
              <span>{item.highestBidderId}</span>
            </div>
          </div>
        </div>

        {/* Bidding Section */}
        <div className="mt-6">
          <div className="bg-red-800 text-white p-3 sm:p-4 rounded-lg">
            <h3 className="text-base sm:text-lg mb-2 sm:mb-3">Bidding Price</h3>
            <div className="flex">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={formatPrice(bidAmount)}
                  onChange={(e) => setBidAmount(Number(e.target.value.replace(/\D/g, "")))}
                  className="w-full px-3 sm:px-4 py-2 rounded-lg text-black text-lg sm:text-xl"
                />
                <div className="absolute right-2 top-0 bottom-0 flex flex-col justify-center">
                  <button onClick={() => adjustBid(100000)} className="text-gray-500 hover:text-gray-700">
                    <ChevronUp className="w-4 h-4" />
                  </button>
                  <button onClick={() => adjustBid(-100000)} className="text-gray-500 hover:text-gray-700">
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bid Button */}
        <button className="w-full bg-yellow-300 text-red-800 text-lg sm:text-xl font-bold py-2 sm:py-3 rounded-full mt-6 shadow-lg hover:bg-yellow-400 transition-colors">
          BID
        </button>

        {/* Footer with X CLOSE text - Moved below with proper spacing */}
        <div className="text-center mt-8 mb-2">
          <button onClick={onClose} className="text-gray-600 hover:text-gray-800 text-sm">
            X CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}

