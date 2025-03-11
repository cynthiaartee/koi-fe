import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header({ currentPage }: { currentPage?: string }) {
  return (
    <div className="relative">
      {/* Red strip at the top */}
      <div className="w-full h-6 bg-red-800" />

      {/* Main header content with white background */}
      <header className="relative bg-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          <nav className="flex items-center space-x-12">
            <Link
              href="/auction"
              className={`relative py-3 px-6 font-medium ${
                currentPage === "auction" ? "active-menu text-white" : "text-gray-800"
              }`}
            >
              AUCTION
            </Link>
            <Link
              href="/store"
              className={`relative py-3 px-12 font-medium ${currentPage === "store" ? "active-menu text-white" : ""}`}
            >
              OUR STORE
            </Link>
          </nav>

          {/* Logo container with active-menu polygon when on home page */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ top: "0px" }}>
            <Link
              href="/"
              className={`block px-12 py-3 ${currentPage === "home" ? "active-menu logo-menu text-white" : ""}`}
            >
              <Image
                src={`${currentPage === "home" ? "/images/putih.png" : "/images/merah.png"}`}
                alt="FS KOI Logo"
                width={85}
                height={125}
                className="object-contain relative z-10"
                style={{
                  maxHeight: "unset",
                  height: "auto",
                }}
              />
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link 
            href="/contact" 
            className={`relative py-3 px-12 font-medium ${
                currentPage === "contact" ? "active-menu text-white" : "text-gray-800"
            }`}
            >
              CONTACT US
            </Link>
            <button className="bg-black text-white px-3 py-1 rounded-md text-sm">Log In</button>
            <button className="text-gray-800">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
    </div>
  )
}

