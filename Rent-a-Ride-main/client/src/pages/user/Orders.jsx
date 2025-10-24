import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MdCurrencyRupee } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import UserOrderDetailsModal from "../../components/UserOrderDetailsModal";
import {
  setIsOrderModalOpen,
  setSingleOrderDetails,
} from "../../redux/user/userSlice";



export default function Orders() {
  const { _id } = useSelector((state) => state.user.currentUser);
  const [bookings, setBookings] = useState("");
  const dispatch = useDispatch();

  const fetchBookings = async () => {
    try {
      const res = await fetch("/api/user/findBookingsOfUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: _id,
        }),
      });

      const data = await res.json();
      if (data) {
        setBookings(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const handleDetailsModal = (bookingDetails, vehicleDetails) => {
    dispatch(setIsOrderModalOpen(true));
    dispatch(setSingleOrderDetails(bookingDetails, vehicleDetails));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <UserOrderDetailsModal />
      
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3 flex items-center gap-3">
            <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl shadow-lg">
              <FiShoppingBag className="text-white text-3xl" />
      </div>
            Your Bookings
          </h1>
          <p className="text-gray-600 text-lg">
        {bookings && bookings.length > 0
              ? `Manage and track all your ${bookings.length} booking${bookings.length > 1 ? 's' : ''}` 
              : ''}
          </p>
        </div>

        {/* Bookings List or Empty State */}
        {bookings && bookings.length > 0 ? (
          <div className="space-y-6">
            {bookings.map((cur, idx) => {
              const pickupDate = new Date(cur.bookingDetails.pickupDate);
              const dropoffDate = new Date(cur.bookingDetails.dropOffDate);

              return (
                <div
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 transform hover:-translate-y-1"
                  key={idx}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
                    {/* Vehicle Image */}
                    <div className="lg:col-span-1">
                      <div className="relative rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 h-64 lg:h-full">
                    <img
                      alt={cur.vehicleDetails.name}
                          className="w-full h-full object-contain p-4 hover:scale-110 transition-transform duration-300"
                      src={cur.vehicleDetails.image[0]}
                    />
                        <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                          Booking #{idx + 1}
                        </div>
                      </div>
                    </div>
                    
                    {/* Booking Details */}
                    <div className="lg:col-span-2 space-y-4">
                      {/* Vehicle Name & Price */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-gray-200">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {cur.vehicleDetails.name || cur.vehicleDetails.model}
                          </h3>
                          <p className="text-sm text-gray-500 font-mono">
                            ID: {cur.bookingDetails._id.slice(0, 12)}...
                          </p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-emerald-50 px-4 py-3 rounded-xl border-2 border-green-200">
                          <p className="text-sm text-gray-600 font-medium mb-1">Total Amount</p>
                          <p className="text-2xl font-bold text-green-600 flex items-center">
                            <MdCurrencyRupee className="text-3xl" />
                        {cur.bookingDetails.totalPrice}
                      </p>
                        </div>
                      </div>

                      {/* Pickup & Dropoff Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pickup */}
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-5 rounded-xl border border-blue-200">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="bg-blue-500 p-2 rounded-lg">
                              <CiLocationOn className="text-white text-xl" />
                            </div>
                            <h4 className="font-bold text-blue-900 text-lg">Pick Up</h4>
                          </div>
                          <p className="text-gray-800 font-semibold mb-3 capitalize">
                            {cur.bookingDetails.pickUpLocation}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                              <CiCalendarDate className="text-blue-600 text-lg" />
                              <span className="text-sm font-medium">
                                {pickupDate.toLocaleDateString('en-US', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                })}
                              </span>
                              </div>
                            <div className="flex items-center gap-2 text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                              <IoMdTime className="text-blue-600 text-lg" />
                              <span className="text-sm font-medium">
                                {pickupDate.toLocaleTimeString('en-US', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                                </span>
                            </div>
                          </div>
                        </div>

                        {/* Dropoff */}
                        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-5 rounded-xl border border-emerald-200">
                          <div className="flex items-center gap-2 mb-4">
                            <div className="bg-emerald-500 p-2 rounded-lg">
                              <CiLocationOn className="text-white text-xl" />
                            </div>
                            <h4 className="font-bold text-emerald-900 text-lg">Drop Off</h4>
                          </div>
                          <p className="text-gray-800 font-semibold mb-3 capitalize">
                            {cur.bookingDetails.dropOffLocation}
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                              <CiCalendarDate className="text-emerald-600 text-lg" />
                              <span className="text-sm font-medium">
                                {dropoffDate.toLocaleDateString('en-US', { 
                                  day: '2-digit', 
                                  month: 'short', 
                                  year: 'numeric' 
                                })}
                              </span>
                              </div>
                            <div className="flex items-center gap-2 text-gray-700 bg-white/60 rounded-lg px-3 py-2">
                              <IoMdTime className="text-emerald-600 text-lg" />
                              <span className="text-sm font-medium">
                                {dropoffDate.toLocaleTimeString('en-US', { 
                                  hour: '2-digit', 
                                  minute: '2-digit' 
                                })}
                                </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <button
                          className="w-full sm:w-auto bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white font-semibold rounded-xl px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center gap-2"
                          onClick={() => handleDetailsModal(cur)}
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          View Full Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl shadow-xl p-12 text-center">
            <div className="max-w-md mx-auto">
              <div className="bg-gray-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <FiShoppingBag className="text-gray-400 text-5xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No Bookings Yet</h3>
              <p className="text-gray-600 mb-8">
                Start your journey by booking your first ride. Explore our wide range of vehicles!
              </p>
              <a
                href="/vehicles"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Browse Vehicles
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
