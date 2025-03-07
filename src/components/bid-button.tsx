"use client"

import { useState } from "react"
import BidModal from "./bid-modal"

interface BidButtonProps {
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

export default function BidButton({ item }: BidButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex-1 bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors"
      >
        BID
      </button>

      <BidModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} item={item} />
    </>
  )
}

