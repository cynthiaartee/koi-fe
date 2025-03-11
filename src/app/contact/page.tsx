import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage="contact" />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-center mb-6">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="FS KOI Logo"
                width={120}
                height={120}
                className="mr-6"
              />
              <h2 className="text-3xl font-bold text-red-800">FS KOI</h2>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-800 mr-3" />
                <span>123 Koi Street, Aquarium District, Jakarta</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-800 mr-3" />
                <span>+62 21 123456</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-800 mr-3" />
                <span>info@fskoi.com</span>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <div className="grid grid-cols-2 gap-2 mb-8">
              <div>Monday - Friday:</div>
              <div>9:00 AM - 6:00 PM</div>
              <div>Saturday:</div>
              <div>10:00 AM - 4:00 PM</div>
              <div>Sunday:</div>
              <div>Closed</div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                target="_blank"
                className="bg-red-800 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="bg-red-800 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="bg-red-800 text-white p-3 rounded-full hover:bg-red-700 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-yellow-100 rounded-lg shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-800"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-800 text-white py-2 px-6 rounded-md hover:bg-red-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Find Us</h3>
          <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-gray-300">
            {/* Replace this with an actual Google Maps embed in production */}
            <Image src="/placeholder.svg?height=400&width=800" alt="Location Map" fill className="object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 text-white">
              <div className="text-center">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="text-lg font-semibold">FS KOI Location</p>
                <p>Interactive map would appear here</p>
              </div>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-600">
            <p>For the best experience visiting our store, we recommend calling ahead to schedule an appointment.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-yellow-100 rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            <div className="border-b border-gray-300 pb-4">
              <h4 className="font-medium mb-2">What types of koi do you sell?</h4>
              <p className="text-gray-700">
                We specialize in high-quality Japanese koi varieties including Kohaku, Sanke, Showa, and many others.
                Our selection changes regularly based on availability and season.
              </p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <h4 className="font-medium mb-2">How does the auction process work?</h4>
              <p className="text-gray-700">
                Our auctions are held online through our website. You need to register an account to participate.
                Auctions typically run for a set period, and the highest bidder at the end wins.
              </p>
            </div>
            <div className="border-b border-gray-300 pb-4">
              <h4 className="font-medium mb-2">Do you ship internationally?</h4>
              <p className="text-gray-700">
                Yes, we offer international shipping for our koi. Shipping costs and requirements vary by destination.
                Please contact us for specific details about shipping to your location.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

