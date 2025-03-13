import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-red-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
          <Link href="/about" className="hover:underline text-sm sm:text-base whitespace-nowrap py-1">
            About FS Koi
          </Link>
          <Link href="/license" className="hover:underline text-sm sm:text-base whitespace-nowrap py-1">
            License/Certificate
          </Link>
          <Link href="/terms" className="hover:underline text-sm sm:text-base whitespace-nowrap py-1">
            Terms of Use Agreement
          </Link>
          <Link href="/privacy" className="hover:underline text-sm sm:text-base whitespace-nowrap py-1">
            Privacy policy
          </Link>
        </div>
      </div>
    </footer>
  )
}

