"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on mobile when component mounts and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    // Initial check
    checkIfMobile()

    // Add event listener
    window.addEventListener("resize", checkIfMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header currentPage="home" />

      <main className="flex-grow">
        {/* Carousel Banner */}
        <div className="container mx-auto px-4 py-4 md:py-8">
          <div className="relative bg-black rounded-3xl overflow-hidden">
            <div className="relative h-[200px] sm:h-[300px] md:h-[400px]">
              <Image
                src="/images/ikan.png"
                alt="Koi fish"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-8 md:p-12 text-white max-w-2xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 md:mb-4">Current Event</h1>
                <p className="text-yellow-200 text-xs sm:text-sm mb-2 md:mb-4">
                  Period of the event | 2025.01.10 8:00 - 2025.01.20 21:00
                </p>
                <p className="text-gray-200 text-xs sm:text-sm md:text-base hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo.
                </p>
              </div>

              {/* Navigation */}
              <button className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1 sm:p-2">
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>
              <button className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/20 rounded-full p-1 sm:p-2">
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
                <div className="w-2 h-2 bg-white/50 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Upcoming Events */}
            <div className="relative mt-6">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#E8D5B0] rounded-full py-2 px-8 font-bold text-lg sm:text-xl z-10">
                Upcoming Events
              </div>
              <div className="bg-red-800 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex justify-center sm:block">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Valentine Auction"
                    width={150}
                    height={150}
                    className="rounded-lg bg-blue-500"
                  />
                </div>
                <div className="w-full sm:w-2/3 sm:pl-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Valentine Auction</h3>
                  <p className="text-yellow-200 text-xs sm:text-sm mb-2">
                    Period of the event
                    <br />
                    2025.02.12 8:00 - 2025.02.14 21:00
                  </p>
                  <p className="text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices.
                  </p>
                </div>
              </div>
            </div>

            {/* Past Events */}
            <div className="relative mt-6">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#E8D5B0] rounded-full py-2 px-8 font-bold text-lg sm:text-xl z-10">
                Past Events
              </div>
              <div className="bg-red-800 rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row">
                <div className="w-full sm:w-1/3 mb-4 sm:mb-0 flex justify-center sm:block">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Year End Auction"
                    width={150}
                    height={150}
                    className="rounded-lg bg-blue-500"
                  />
                </div>
                <div className="w-full sm:w-2/3 sm:pl-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Year End Auction</h3>
                  <p className="text-yellow-200 text-xs sm:text-sm mb-2">
                    Period of the event
                    <br />
                    2024.12.20 8:00 - 2024.12.30 21:00
                  </p>
                  <p className="text-xs sm:text-sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Quis ipsum suspendisse ultrices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-[#E8D5B0] rounded-xl p-4 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">News</h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-white rounded-lg p-4 flex flex-col sm:flex-row">
                  <div className="w-full sm:w-32 text-red-800 font-bold mb-2 sm:mb-0">2024 12 31</div>
                  <div className="flex-1">
                    <h3 className="font-bold mb-2">{item === 1 ? "Auction winner" : "Lorem Ipsum"}</h3>
                    <p className="text-xs sm:text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                      maecenas accumsan lacus vel facilisis.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              <Link href="#" className="px-2">
                1
              </Link>
              <Link href="#" className="px-2">
                2
              </Link>
              <Link href="#" className="px-2">
                3
              </Link>
              <Link href="#" className="px-2">
                4
              </Link>
              <Link href="#" className="px-2">
                »
              </Link>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-8">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="FS KOI Logo"
                width={100}
                height={100}
                className="object-contain"
              />
              <div className="text-center sm:text-left">
                <div className="mb-2">
                  <span className="font-bold">Location</span> | Lorem Ipsum
                </div>
                <div className="mb-2">
                  <span className="font-bold">Tel</span> | 021 123456
                </div>
                <div className="mb-2">
                  <span className="font-bold">Mail</span> | LoremIpsum@mail.com
                </div>
                <div className="mt-4 text-center sm:text-left">
                  <h2 className="text-2xl font-bold text-red-800">FS KOI</h2>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/placeholder.svg?height=300&width=600"
                alt="Location Map"
                width={600}
                height={300}
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

