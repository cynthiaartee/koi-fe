import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ShoppingCart, Filter, Search } from "lucide-react"

export default function StorePage() {
  // Dummy data for store items
  const storeItems = [
    { id: 1, name: "Premium Koi Food", price: "350.000", category: "Food" },
    { id: 2, name: "Water Testing Kit", price: "275.000", category: "Equipment" },
    { id: 3, name: "Koi Medication", price: "180.000", category: "Health" },
    { id: 4, name: "Pond Filter System", price: "1.200.000", category: "Equipment" },
    { id: 5, name: "Koi Net", price: "125.000", category: "Equipment" },
    { id: 6, name: "Water Conditioner", price: "95.000", category: "Health" },
    { id: 7, name: "Decorative Pond Plants", price: "75.000", category: "Decoration" },
    { id: 8, name: "Automatic Feeder", price: "450.000", category: "Equipment" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header currentPage="store" />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8">Our Store</h1>

        {/* Search and Filter Bar */}
        <div className="bg-yellow-100 rounded-lg p-4 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
          <div className="flex gap-4">
            <select className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800">
              <option value="">All Categories</option>
              {/* <option value="food"></option>
              <option value="equipment">Equipment</option>
              <option value="health">Health</option>
              <option value="decoration">Decoration</option> */}
            </select>
            <select className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-800">
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="popular">Most Popular</option>
            </select>
            <button className="bg-red-800 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-red-700 transition-colors">
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filter</span>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {storeItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=${encodeURIComponent(item.name)}`}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-100 text-red-800 text-xs font-bold px-2 py-1 rounded-full">
                  {item.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium mb-2">{item.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-bold">Rp. {item.price}</span>
                  <button className="bg-red-800 text-white p-2 rounded-full hover:bg-red-700 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1">
            <button className="px-4 py-2 bg-gray-200 rounded-l-md hover:bg-gray-300 transition-colors">Previous</button>
            <button className="px-4 py-2 bg-red-800 text-white">1</button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors">2</button>
            <button className="px-4 py-2 bg-gray-200 hover:bg-gray-300 transition-colors">3</button>
            <button className="px-4 py-2 bg-gray-200 rounded-r-md hover:bg-gray-300 transition-colors">Next</button>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["Food", "Equipment", "Health", "Decoration"].map((category) => (
              <div key={category} className="relative rounded-lg overflow-hidden h-40 group">
                <Image
                  src={`/placeholder.svg?height=200&width=300&text=${encodeURIComponent(category)}`}
                  alt={category}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{category}</h3>
                </div>
                <Link href={`/store?category=${category.toLowerCase()}`} className="absolute inset-0">
                  <span className="sr-only">Shop {category}</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        {/* <div className="bg-red-800 text-white rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-2">Stay Updated</h2>
          <p className="mb-6">Subscribe to our newsletter for exclusive offers and updates on new products</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <button className="bg-yellow-100 text-red-800 font-bold px-6 py-2 rounded-r-md hover:bg-yellow-200 transition-colors">
              Subscribe
            </button>
          </div>
        </div> */}
      </main>

      <Footer />
    </div>
  )
}

