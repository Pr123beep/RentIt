import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setVariants,
  setVehicleDetail,
  showVehicles,
} from "../../redux/user/listAllVehicleSlice";
import { useNavigate } from "react-router-dom";
import Filter from "../../components/Filter";
import Sort from "../../components/Sort";
import VehicleCard from "../../components/VehicleCard";
import { signOut } from "../../redux/user/userSlice";
import Footers from "../../components/Footer";
import SkeletonLoader from "../../components/ui/SkeletonLoader";
import { setSelectedData } from "../../redux/user/BookingDataSlice";

//use Custome hook in this case :)
export const onVehicleDetail = async (id, dispatch, navigate) => {
  try {
    const res = await fetch("/api/user/showVehicleDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials:'include',
      body: JSON.stringify({ id }),
    });
    const data = await res.json();
    console.log("🔍 VEHICLE DETAILS FRONTEND DEBUG:");
    console.log("  - API Response:", data);
    console.log("  - Vehicle price from API:", data?.price);
    console.log("  - Vehicle name:", data?.name);

    if(data.statusCode == 401 || data.statusCode == 403){
      dispatch(signOut())
    }
   
      dispatch(setVehicleDetail(data));
      console.log("  - Vehicle detail stored in Redux");
      navigate("/vehicleDetails");
    
  
   
   
   
  } catch (error) {
    console.log(error);
  }
};

const Vehicles = () => {
  const { userAllVehicles } = useSelector((state) => state.userListVehicles);
  const { data, filterdData } = useSelector((state) => state.sortfilterSlice);
  const bookingData = useSelector((state) => state.bookingDataSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(true)
  
  // Date selection state
  const [showDateSelector, setShowDateSelector] = useState(false);
  const [selectedPickupDate, setSelectedPickupDate] = useState('');
  const [selectedDropoffDate, setSelectedDropoffDate] = useState('');
  const [selectedPickupLocation, setSelectedPickupLocation] = useState('');
  const [selectedDropoffLocation, setSelectedDropoffLocation] = useState('');

  const BASE_URL = import.meta.env.VITE_PRODUCTION_BACKEND_URL
  //allVariants are set to null when we enter AllVehicles from navbar

  let refreshToken = localStorage.getItem('refreshToken')
  let accessToken = localStorage.getItem('accessToken')

  useEffect(() => {
    dispatch(setVariants(null));
    const fetchData = async () => {
      try {
        const res = await fetch(`${BASE_URL}/api/user/listAllVehicles`,{
          headers:{'Authorization':`Bearer ${refreshToken},${accessToken}`},
          credentials:'include'
        });
        if (!res.ok) {
          console.log("not success");
        }
        if (res.ok) {
          const data = await res.json();
          dispatch(showVehicles(data));
          setIsLoading(false)
        }
      } catch (error) {
        console.log(error); 
        setIsLoading(false)             
      }
    };
    fetchData();
  }, [dispatch, data]);

  // Date selection handlers
  const handleDateSelection = () => {
    if (selectedPickupDate && selectedDropoffDate && selectedPickupLocation && selectedDropoffLocation) {
      // Convert dates to the format expected by Redux
      const pickupDate = new Date(selectedPickupDate);
      const dropoffDate = new Date(selectedDropoffDate);
      
      // Create the data structure expected by setSelectedData
      const bookingData = {
        pickup_district: "", // You can add district selection if needed
        pickup_location: selectedPickupLocation,
        dropoff_location: selectedDropoffLocation,
        pickuptime: {
          $D: pickupDate.getDate(),
          $M: pickupDate.getMonth() + 1,
          $y: pickupDate.getFullYear(),
          $d: selectedPickupDate,
          $H: 10, // Default pickup time
          $m: 0,
          $s: 0
        },
        dropofftime: {
          $D: dropoffDate.getDate(),
          $M: dropoffDate.getMonth() + 1,
          $y: dropoffDate.getFullYear(),
          $d: selectedDropoffDate,
          $H: 18, // Default dropoff time
          $m: 0,
          $s: 0
        }
      };
      
      // Dispatch to Redux
      dispatch(setSelectedData(bookingData));
      
      setShowDateSelector(false);
      console.log("✅ Dates and locations set:", bookingData);
    } else {
      alert("Please fill all fields!");
    }
  };

  // Determine which vehicles to display
  const vehiclesToDisplay = filterdData && filterdData.length > 0 ? filterdData : userAllVehicles || [];

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 py-6">
      <div className="lg:grid lg:grid-cols-12 gap-x-6 max-w-[1800px] mx-auto px-4 lg:px-6">
        {/* Filter Sidebar */}
        <div className="mt-2 col-span-3 lg:relative">
        <Filter />
      </div>

        {/* Main Content */}
      <div className="col-span-9">
          {/* Date Selection Banner */}
          <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Select Your Trip Dates & Locations</h3>
                <div className="flex flex-wrap gap-2 text-sm text-gray-600">
                  {bookingData?.pickupDate?.humanReadable && bookingData?.dropoffDate?.humanReadable ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      📅 {bookingData.pickupDate.humanReadable} → {bookingData.dropoffDate.humanReadable}
                    </span>
                  ) : (
                    <span className="text-gray-500">No dates selected</span>
                  )}
                  {bookingData?.pickup_location && bookingData?.dropoff_location && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      📍 {bookingData.pickup_location} → {bookingData.dropoff_location}
                    </span>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowDateSelector(!showDateSelector)}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                {showDateSelector ? 'Hide' : 'Select Dates & Locations'}
              </button>
            </div>
            
            {/* Date Selection Form */}
            {showDateSelector && (
              <div className="mt-4 p-4 bg-white rounded-lg border border-green-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                    <input
                      type="date"
                      value={selectedPickupDate}
                      onChange={(e) => setSelectedPickupDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dropoff Date</label>
                    <input
                      type="date"
                      value={selectedDropoffDate}
                      onChange={(e) => setSelectedDropoffDate(e.target.value)}
                      min={selectedPickupDate || new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                    <input
                      type="text"
                      value={selectedPickupLocation}
                      onChange={(e) => setSelectedPickupLocation(e.target.value)}
                      placeholder="Enter pickup location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Dropoff Location</label>
                    <input
                      type="text"
                      value={selectedDropoffLocation}
                      onChange={(e) => setSelectedDropoffLocation(e.target.value)}
                      placeholder="Enter dropoff location"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    />
                  </div>
                </div>
                <div className="mt-4 flex gap-3">
                  <button
                    onClick={handleDateSelection}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                  >
                    Save Dates & Locations
                  </button>
                  <button
                    onClick={() => setShowDateSelector(false)}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-all duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Sort Component */}
          <div className="mt-2 sticky top-2 z-40 mb-6">
          <Sort />
        </div>
       
          {/* Vehicles Count */}
          {!isLoading && vehiclesToDisplay.length > 0 && (
            <div className="mb-6 flex items-center justify-between">
              <p className="text-base font-semibold text-gray-700">
                <span className="text-green-600 text-2xl">{vehiclesToDisplay.filter(v => v.isDeleted === "false" && v.isAdminApproved).length}</span> vehicles available
              </p>
              <div className="text-sm text-gray-500">
                Showing the best options for you
                          </div>
                        </div>
          )}

          {/* Loading State */}
          {isLoading ? (
            <SkeletonLoader />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 pb-10">
              {vehiclesToDisplay.map((vehicle, idx) =>
                vehicle.isDeleted === "false" && vehicle.isAdminApproved ? (
                  <VehicleCard
                    key={vehicle._id || idx}
                    vehicle={vehicle}
                    idx={idx}
                    onVehicleDetail={onVehicleDetail}
                    dispatch={dispatch}
                    navigate={navigate}
                    bookingData={bookingData}
                  />
                ) : null
              )}
                        </div>
          )}

          {/* No Vehicles Message */}
          {!isLoading && vehiclesToDisplay.filter(v => v.isDeleted === "false" && v.isAdminApproved).length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No vehicles found</h3>
              <p className="text-gray-600">Try adjusting your filters or check back later for new listings.</p>
                            </div>
          )}
              </div>
      </div>
    </div>
    <Footers/>
    </>
  );
};

export default Vehicles;
