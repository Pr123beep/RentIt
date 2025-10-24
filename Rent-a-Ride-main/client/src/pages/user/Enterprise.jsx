import { Link } from "react-router-dom";
import Footers from "../../components/Footer";
import { FaMoneyBillWave, FaChartLine, FaShieldAlt, FaClock, FaCar, FaUsers } from "react-icons/fa";

function Enterprise() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
                Become a <span className="text-green-500">Partner</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in" style={{animationDelay: '200ms'}}>
                List your vehicles and earn money. Join hundreds of successful vendors on India's fastest-growing car rental platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '400ms'}}>
                <Link to="/vendorSignup">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2">
                    <FaCar className="text-xl" />
                    Start Earning Today
                  </button>
                </Link>
                <Link to="/vendorSignin">
                  <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
                    Vendor Login
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Why Partner With Us */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Maximize your earnings with our trusted platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Benefit 1 */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <FaMoneyBillWave className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">High Earnings</h3>
                <p className="text-gray-700 leading-relaxed">
                  Earn up to ₹50,000/month per vehicle. Set your own prices and maximize your income with flexible rental rates.
                </p>
              </div>

              {/* Benefit 2 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <FaChartLine className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Track Performance</h3>
                <p className="text-gray-700 leading-relaxed">
                  Real-time dashboard to monitor bookings, earnings, and vehicle performance. Get detailed analytics and insights.
                </p>
              </div>

              {/* Benefit 3 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <FaShieldAlt className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">100% Safe</h3>
                <p className="text-gray-700 leading-relaxed">
                  Your vehicles are insured and customers are verified. We handle all security and damage protection.
                </p>
              </div>

              {/* Benefit 4 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <FaClock className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
                <p className="text-gray-700 leading-relaxed">
                  Dedicated support team available round the clock to help with bookings, payments, and any issues.
                </p>
              </div>

              {/* Benefit 5 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <FaCar className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Easy Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  Simple dashboard to add vehicles, manage bookings, and update availability. List unlimited vehicles.
                </p>
              </div>

              {/* Benefit 6 */}
              <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <FaUsers className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Large Customer Base</h3>
                <p className="text-gray-700 leading-relaxed">
                  Access to thousands of verified customers across 5+ major cities. Get more bookings effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-xl text-gray-600">Get started in 3 simple steps</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Step 1 */}
              <div className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="bg-gradient-to-r from-green-500 to-green-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                      1
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Account</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Sign up as a vendor with your basic details. Get verified within 24 hours.
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-12 -right-6 text-green-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                      2
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">List Vehicles</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Add your vehicles with photos and details. We'll approve them quickly for listing.
                  </p>
                </div>
                {/* Arrow */}
                <div className="hidden md:block absolute top-12 -right-6 text-blue-500">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="relative inline-block mb-6">
                  <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Start Earning</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Receive bookings and get paid instantly. Track everything from your vendor dashboard.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-green-400">500+</div>
                <div className="text-xl text-gray-300">Active Vendors</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-green-400">₹2Cr+</div>
                <div className="text-xl text-gray-300">Paid to Vendors</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-green-400">5000+</div>
                <div className="text-xl text-gray-300">Monthly Bookings</div>
              </div>
              <div className="transform hover:scale-110 transition-transform">
                <div className="text-5xl md:text-6xl font-bold mb-2 text-green-400">4.8★</div>
                <div className="text-xl text-gray-300">Vendor Rating</div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Vendor Dashboard Features</h2>
              <p className="text-xl text-gray-600">Everything you need to manage your fleet</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-green-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Real-Time Booking Management</h3>
                  <p className="text-gray-600">Instantly view and manage all bookings with notifications for new reservations.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Analytics & Insights</h3>
                  <p className="text-gray-600">Track earnings, popular vehicles, and customer trends with detailed reports.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-purple-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Payouts</h3>
                  <p className="text-gray-600">Get paid directly to your bank account. Fast, secure, and hassle-free payments.</p>
                </div>
              </div>

              <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="bg-orange-100 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Easy Verification</h3>
                  <p className="text-gray-600">Quick KYC and vehicle verification process. Start listing within 24-48 hours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-24 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Start Earning?</h2>
            <p className="text-xl md:text-2xl text-green-50 mb-10 max-w-3xl mx-auto">
              Join our growing community of successful vendors. List your first vehicle today!
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/vendorSignup">
                <button className="bg-white text-green-600 hover:bg-green-50 font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Register as Vendor
                </button>
              </Link>
              <Link to="/vendorSignin">
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-xl px-12 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-200">
                  Already a Vendor? Login
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How much commission do you charge?</h3>
                <p className="text-gray-600">We charge a competitive 15% commission on each booking. No hidden fees or charges.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">When do I receive payments?</h3>
                <p className="text-gray-600">Payments are processed within 24-48 hours after trip completion directly to your bank account.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">What if my vehicle gets damaged?</h3>
                <p className="text-gray-600">All rentals include insurance coverage. We handle claims and ensure your vehicle is protected.</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">How many vehicles can I list?</h3>
                <p className="text-gray-600">List unlimited vehicles! The more you list, the more you earn. No restrictions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footers />
    </>
  );
}

export default Enterprise;