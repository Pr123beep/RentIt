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

    if(data.statusCode == 401 || data.statusCode == 403){
      dispatch(signOut())
    }
   
      dispatch(setVehicleDetail(data));
      navigate("/vehicleDetails");
    
  
   
   
   
  } catch (error) {
    console.log(error);
  }
};

const Vehicles = () => {
  const { userAllVehicles } = useSelector((state) => state.userListVehicles);
  const { data, filterdData } = useSelector((state) => state.sortfilterSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading , setIsLoading] = useState(true)

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
