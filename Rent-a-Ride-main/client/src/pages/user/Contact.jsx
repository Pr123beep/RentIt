import { useState } from "react";
import Footers from "../../components/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsTwitter, BsFacebook } from "react-icons/bs";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-20 overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-green-50 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '200ms'}}>
              Have questions? We're here to help 24/7. Reach out to us anytime!
            </p>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaPhone className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Call Us</h3>
              <p className="text-gray-600 text-center">+91 98765 43210</p>
              <p className="text-gray-600 text-center">+91 98765 43211</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100" style={{animationDelay: '100ms'}}>
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaEnvelope className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Email Us</h3>
              <p className="text-gray-600 text-center">support@rentaride.com</p>
              <p className="text-gray-600 text-center">info@rentaride.com</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100" style={{animationDelay: '200ms'}}>
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaMapMarkerAlt className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Visit Us</h3>
              <p className="text-gray-600 text-center">123 Main Street</p>
              <p className="text-gray-600 text-center">Bangalore, India</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-2 transition-all duration-300 animate-fade-in border border-gray-100" style={{animationDelay: '300ms'}}>
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                <FaClock className="text-orange-600 text-2xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">Working Hours</h3>
              <p className="text-gray-600 text-center">Mon - Sat: 9AM - 8PM</p>
              <p className="text-gray-600 text-center">Sunday: 10AM - 6PM</p>
            </div>
          </div>

          {/* Main Contact Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className="space-y-8 animate-fade-in" style={{animationDelay: '200ms'}}>
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <div className="h-80 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <FaMapMarkerAlt className="text-6xl text-green-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Visit Our Office</h3>
                    <p className="text-gray-600">123 Main Street, Koramangala</p>
                    <p className="text-gray-600 mb-4">Bangalore, Karnataka 560095</p>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Connect With Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a href="#" className="flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors group">
                    <BsWhatsapp className="text-2xl text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700">WhatsApp</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 bg-pink-50 hover:bg-pink-100 rounded-lg transition-colors group">
                    <BsInstagram className="text-2xl text-pink-600 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
                    <BsTwitter className="text-2xl text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700">Twitter</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors group">
                    <BsFacebook className="text-2xl text-blue-700 group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-gray-700">Facebook</span>
                  </a>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Quick Answers?</h3>
                <p className="mb-6 text-green-50">Check out our FAQ section for instant answers to common questions.</p>
                <button className="bg-white text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition-colors">
                  View FAQs
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
      <Footers />
    </>
  );
}

export default Contact;
