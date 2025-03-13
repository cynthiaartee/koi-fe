"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, ShoppingCart, X } from "lucide-react"

type HeaderProps = {
  currentPage?: "home" | "auction" | "store" | "contact"
}

export default function Header({ currentPage }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("body-with-menu-open")
    } else {
      document.body.classList.remove("body-with-menu-open")
    }

    return () => {
      document.body.classList.remove("body-with-menu-open")
    }
  }, [mobileMenuOpen])

  // Helper function to conditionally join classNames
  const classNames = (...classes: string[]) => {
    return classes.filter(Boolean).join(" ")
  }

  return (
    <div className="relative header-container">
      {/* Red strip at the top */}
      <div className="w-full h-6 bg-red-800" />

      {/* Main header content with white background */}
      <header className="relative bg-white">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Burger menu for mobile */}
          <button
            className="md:hidden z-20 p-2 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <Link
              href="/auction"
              className={classNames(
                "relative py-3 px-6 font-medium",
                currentPage === "auction" ? "active-menu text-white" : "text-gray-800",
              )}
            >
              AUCTION
            </Link>
            <Link
              href="/store"
              className={classNames(
                "relative py-3 px-6 lg:px-12 font-medium",
                currentPage === "store" ? "active-menu text-white" : "text-gray-800",
              )}
            >
              OUR STORE
            </Link>
          </nav>

          {/* Logo container with special styling when on home page */}
          <div className="absolute left-1/2 transform -translate-x-1/2 z-10" style={{ top: "0px" }}>
            <Link
              href="/"
              className={classNames(
                "block px-6 md:px-12 py-3",
                currentPage === "home" ? "active-menu logo-menu text-white" : "",
              )}
              aria-label="FS KOI Home"
            >
              <Image
                src={currentPage === "home" ? "/images/putih.png" : "/images/merah.png"}
                alt="FS KOI Logo"
                width={85}
                height={125}
                className="object-contain relative z-10"
                style={{
                  maxHeight: "unset",
                  height: "auto",
                }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Right Menu */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/contact"
              className={classNames(
                "relative py-3 px-6 lg:px-12 font-medium",
                currentPage === "contact" ? "active-menu text-white" : "text-gray-800",
              )}
            >
              CONTACT US
            </Link>
            <button className="bg-black text-white px-3 py-1 rounded-md text-sm">Log In</button>
            <button className="text-gray-800">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex md:hidden items-center space-x-2">
            <button className="bg-black text-white px-3 py-1 rounded-md text-sm">Log In</button>
            <button className="text-gray-800">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {mobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden mobile-menu-overlay"
              onClick={closeMobileMenu}
            />
          )}

          {/* Mobile Menu */}
          <div
            className={classNames(
              "fixed top-0 left-0 h-screen w-3/4 max-w-xs bg-white z-40 transform transition-transform duration-300 ease-in-out md:hidden",
              mobileMenuOpen ? "translate-x-0" : "-translate-x-full",
            )}
          >
            {/* Close button inside mobile menu */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none"
              onClick={closeMobileMenu}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>

            <div className="flex flex-col h-full pt-16 pb-6 px-4">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/auction"
                  className={classNames(
                    "py-2 px-4 font-medium rounded-md transition-colors",
                    currentPage === "auction"
                      ? "active-menu text-white text-center"
                      : "text-gray-800 hover:bg-red-800 hover:text-white active:bg-red-800 active:text-white text-center",
                  )}
                  onClick={closeMobileMenu}
                >
                  AUCTION
                </Link>
                <Link
                  href="/store"
                  className={classNames(
                    "py-2 px-4 font-medium rounded-md transition-colors",
                    currentPage === "store"
                      ? "active-menu text-white text-center"
                      : "text-gray-800 hover:bg-red-800 hover:text-white active:bg-red-800 active:text-white text-center",
                  )}
                  onClick={closeMobileMenu}
                >
                  OUR STORE
                </Link>
                <Link
                  href="/contact"
                  className={classNames(
                    "py-2 px-4 font-medium rounded-md transition-colors",
                    currentPage === "contact"
                      ? "active-menu text-white text-center"
                      : "text-gray-800 hover:bg-red-800 hover:text-white active:bg-red-800 active:text-white text-center",
                  )}
                  onClick={closeMobileMenu}
                >
                  CONTACT US
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

