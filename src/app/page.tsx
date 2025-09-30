import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              HydroGrow
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Fresh Fruits & Vegetables Grown with Hydroponics
            </p>
            <p className="text-lg text-gray-700 mb-12 max-w-4xl mx-auto">
              We are leading providers of fresh fruits and vegetables produced by hydroponics in the market. 
              Experience the future of farming with our nutrient-rich, pesticide-free produce grown sustainably.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#learn-more"
                className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="learn-more" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Hydroponic Produce?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our hydroponically grown fruits and vegetables offer superior quality, nutrition, and taste 
              while being environmentally sustainable and available year-round.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Nutrition</h3>
              <p className="text-gray-600">
                Our hydroponic produce contains higher levels of vitamins and minerals due to precise nutrient control, 
                delivering superior nutritional value to your table.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Superior Taste & Quality</h3>
              <p className="text-gray-600">
                Our controlled growing conditions produce fruits and vegetables with enhanced flavor, texture, 
                and visual appeal that surpasses traditional farming methods.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pesticide-Free</h3>
              <p className="text-gray-600">
                Grown in controlled environments, our produce is completely free from harmful pesticides and herbicides, 
                ensuring cleaner and safer food for you and your family.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consistent Supply</h3>
              <p className="text-gray-600">
                Our indoor hydroponic farms operate year-round, ensuring a consistent supply of fresh produce 
                regardless of weather conditions or seasonal changes.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Farming</h3>
              <p className="text-gray-600">
                Our hydroponic systems use 90% less water than traditional farming and produce zero soil waste, 
                making it an environmentally responsible choice for conscious consumers.
              </p>
            </div>

            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fresh & Local</h3>
              <p className="text-gray-600">
                Our produce is harvested at peak ripeness and delivered fresh to local markets, 
                reducing transportation time and ensuring maximum freshness for consumers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fresh Produce
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our wide range of hydroponically grown fruits and vegetables, 
              each carefully cultivated for maximum nutrition and flavor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Leafy Greens</h3>
              <p className="text-gray-600 text-sm">Lettuce, Spinach, Kale, Arugula, Swiss Chard</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tomatoes</h3>
              <p className="text-gray-600 text-sm">Cherry, Roma, Beefsteak, Heirloom Varieties</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌶️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Peppers</h3>
              <p className="text-gray-600 text-sm">Bell Peppers, Jalapeños, Sweet Peppers</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Berries</h3>
              <p className="text-gray-600 text-sm">Strawberries, Blueberries, Raspberries</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥒</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cucumbers</h3>
              <p className="text-gray-600 text-sm">English, Persian, Pickling Varieties</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Herbs</h3>
              <p className="text-gray-600 text-sm">Basil, Mint, Cilantro, Parsley, Oregano</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥕</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Root Vegetables</h3>
              <p className="text-gray-600 text-sm">Carrots, Radishes, Beets, Turnips</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥬</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Microgreens</h3>
              <p className="text-gray-600 text-sm">Broccoli, Pea Shoots, Sunflower, Radish</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Produce by the Numbers
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-green-100">Pesticide-Free</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">365</div>
              <div className="text-green-100">Days Fresh Produce</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">40%</div>
              <div className="text-green-100">More Nutrients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">90%</div>
              <div className="text-green-100">Less Water Used</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Experience Fresh Hydroponic Produce?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers who choose our fresh, nutritious, and sustainable produce. 
            Contact us today to learn more about our products and delivery options.
          </p>
          <Link
            href="/contact"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-green-400 mb-4">HydroGrow</h3>
              <p className="text-gray-300 mb-4">
                Leading providers of fresh fruits and vegetables produced by hydroponics in the market. 
                We deliver nutrient-rich, pesticide-free produce grown sustainably year-round.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-300 space-y-2">
                <p>Email: deepika@hydrogrow.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: BIMM, Pune, GC 12345</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 HydroGrow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}