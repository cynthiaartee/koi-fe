import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function Header({ currentPage }: { currentPage?: string }) {
  return (
    <div className="relative">
      {/* Red strip at the top */}
      <div className="w-full h-6 bg-red-800 mb-0 outline outline-blue-500" />

      {/* Main header content with white background */}
      <header className="relative bg-white p-0 m-0">
        <div className="container mx-auto flex justify-between items-center px-4">
          <nav className="flex items-center space-x-4">
            <Link
              href="/auction"
              className={`relative py-3 px-6 font-medium ${
                currentPage === "auction" ? "active-menu text-white" : "text-gray-800"
              }`}
            >
              AUCTION
            </Link>
            <Link href="/store" className="py-3 px-6 font-medium text-gray-800">
              OUR STORE
            </Link>
          </nav>

          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/images/Logo.png"
              alt="FS KOI Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/contact" className="font-medium text-gray-800">
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

