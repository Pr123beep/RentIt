import { useDispatch, useSelector } from "react-redux";
import ProfileEdit from "../pages/user/ProfileEdit";
import toast, { Toaster } from "react-hot-toast";
import { setUpdated } from "../redux/user/userSlice";
import { useEffect, useState, useRef } from "react";
import { FiMail, FiPhone, FiMapPin, FiUser, FiCalendar, FiShoppingBag } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

const UserProfileContent = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const isUpdated = useSelector((state) => state.user.isUpdated);
  const [bookingCount, setBookingCount] = useState(0);
  const editButtonRef = useRef(null);
  
  useEffect(() => {
    if (isUpdated) {
      toast.success("Successfully updated", {
        duration: 3000,
        style: {
          background: '#10B981',
          color: '#fff',
        },
      });
      dispatch(setUpdated(false));
    }
  }, [isUpdated, dispatch]);

  useEffect(() => {
    if (currentUser?._id) {
      const fetchBookingsCount = async () => {
        try {
          const res = await fetch("/api/user/findBookingsOfUser", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: currentUser._id }),
          });
          const data = await res.json();
          if (data) {
            setBookingCount(data.length);
          }
        } catch (error) {
          console.log(error);
        }
      };
      fetchBookingsCount();
    }
  }, [currentUser?._id]);

  // Guard clause - if no user, show loading or redirect message
  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Loading profile...</h2>
        </div>
      </div>
    );
  }

  const { email, username, profilePicture, phoneNumber, adress, createdAt, _id } = currentUser;
  const memberSince = createdAt ? new Date(createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'Recently';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 py-8 px-4 sm:px-6 lg:px-8">
      <Toaster position="top-right" />
      
      <div className="max-w-5xl mx-auto">
        {/* Header Card with Cover */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-6 transform hover:shadow-2xl transition-all duration-300">
          {/* Cover Image with Gradient */}
          <div className="relative h-48 bg-gradient-to-r from-green-500 via-green-600 to-emerald-600">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="absolute top-4 right-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                <ProfileEdit ref={editButtonRef} />
              </div>
            </div>
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full translate-x-32 translate-y-32"></div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="relative px-6 sm:px-8 pb-8">
            {/* Profile Picture */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
              <div className="relative -mt-20 mb-4 sm:mb-0">
                <div className="relative h-32 w-32 sm:h-40 sm:w-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur opacity-75"></div>
            <img
              src={profilePicture}
              alt="profile_picture"
                    className="relative w-full h-full rounded-full object-cover border-4 border-white shadow-2xl ring-4 ring-green-100"
            />
                  <div className="absolute bottom-2 right-2 bg-green-500 rounded-full p-1.5 border-4 border-white shadow-lg">
                    <MdVerified className="text-white text-xl" />
              </div>
            </div>
          </div>

              {/* Name and Email */}
              <div className="flex-1 sm:pb-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-1 flex items-center gap-2">
              {username}
                    </h1>
                    <p className="text-gray-600 flex items-center gap-2 text-sm sm:text-base">
                      <FiMail className="text-green-500" />
                      {email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Total Bookings */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-l-4 border-green-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Total Bookings</p>
                <p className="text-3xl font-bold text-gray-900">{bookingCount}</p>
              </div>
              <div className="bg-green-100 rounded-full p-4">
                <FiShoppingBag className="text-green-600 text-2xl" />
              </div>
            </div>
          </div>

          {/* Member Since */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-l-4 border-blue-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Member Since</p>
                <p className="text-xl font-bold text-gray-900">{memberSince}</p>
              </div>
              <div className="bg-blue-100 rounded-full p-4">
                <FiCalendar className="text-blue-600 text-2xl" />
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border-l-4 border-emerald-500 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Account Status</p>
                <p className="text-xl font-bold text-emerald-600 flex items-center gap-2">
                  <MdVerified className="text-2xl" />
                  Verified
                </p>
              </div>
              <div className="bg-emerald-100 rounded-full p-4">
                <FiUser className="text-emerald-600 text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information Card */}
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 transform hover:shadow-2xl transition-all duration-300">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            <div className="bg-green-100 rounded-full p-2">
              <FiUser className="text-green-600 text-xl" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-all duration-200 border border-gray-200 hover:border-green-300">
                <div className="bg-white rounded-lg p-3 shadow-sm group-hover:shadow-md transition-all">
                  <FiPhone className="text-green-600 text-xl" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-1">Phone Number</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {phoneNumber || <span className="text-gray-400 text-sm font-normal">Not provided</span>}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-all duration-200 border border-gray-200 hover:border-green-300">
                <div className="bg-white rounded-lg p-3 shadow-sm group-hover:shadow-md transition-all">
                  <FiMail className="text-green-600 text-xl" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-500 mb-1">Email Address</p>
                  <p className="text-lg font-semibold text-gray-900 truncate">{email}</p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="group md:col-span-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-green-50 transition-all duration-200 border border-gray-200 hover:border-green-300">
                <div className="bg-white rounded-lg p-3 shadow-sm group-hover:shadow-md transition-all">
                  <FiMapPin className="text-green-600 text-xl" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-500 mb-1">Address</p>
                  <p className="text-lg font-semibold text-gray-900">
                    {adress || <span className="text-gray-400 text-sm font-normal">Not provided</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Button */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">Complete Your Profile</h3>
                  <p className="text-sm text-gray-600">Add your phone number and address for a better experience</p>
                </div>
                <button 
                  onClick={() => editButtonRef.current?.click()}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
                >
                  Update Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileContent;
