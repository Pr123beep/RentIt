import { FaCarSide } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";

const VehicleCard = ({ vehicle, idx, onVehicleDetail, dispatch, navigate }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out animate-fade-in border border-gray-200 group"
      style={{animationDelay: `${idx * 50}ms`}}
    >
      {/* Image Container - Much Larger & Consistent */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white h-64">
        <img
          src={`${vehicle.image[0]}`}
          alt={`${vehicle.name}`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Price Badge - Top Right */}
        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1.5 rounded-full font-bold text-sm shadow-xl">
          ₹{vehicle.price}<span className="text-xs font-normal opacity-90">/day</span>
        </div>
        
        {/* Year Badge - Top Left */}
        {vehicle.year_made && (
          <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-gray-800 px-2.5 py-1 rounded-full text-xs font-bold shadow-lg">
            {vehicle.year_made}
          </div>
        )}
      </div>

      {/* Content Container - Compact */}
      <div className="p-4">
        {/* Car Name & Company - Smaller */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors capitalize truncate">
            {vehicle.name}
          </h3>
          <p className="text-xs text-gray-500 font-medium">{vehicle.company}</p>
        </div>

        {/* Compact Specs - Single Line Items */}
        <div className="space-y-1.5 mb-4">
          {/* Row 1 */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-gray-700">
              <MdAirlineSeatReclineNormal className="text-green-600 text-base" />
              <span className="font-medium">{vehicle.seats} Seats</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-700">
              <BsFillFuelPumpFill className="text-blue-600 text-sm" />
              <span className="font-medium capitalize">{vehicle.fuel_type}</span>
            </div>
          </div>
          
          {/* Row 2 */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-gray-700">
              {vehicle.transmition === 'automatic' ? (
                <TbAutomaticGearbox className="text-purple-600 text-base" />
              ) : (
                <TbManualGearbox className="text-purple-600 text-base" />
              )}
              <span className="font-medium capitalize">{vehicle.transmition}</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-700">
              <svg className="w-3.5 h-3.5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium capitalize truncate">{vehicle.district}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-3"></div>

        {/* Action Buttons - Smaller & Cleaner */}
        <div className="flex gap-2">
          <Link to={"/vehicleDetails"} className="flex-1">
            <button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-3 py-2.5 rounded-lg font-semibold text-sm transform hover:scale-[1.02] transition-all duration-200 shadow hover:shadow-lg"
              onClick={() => onVehicleDetail(vehicle._id, dispatch, navigate)}
            >
              Book Now
            </button>
          </Link>

          <Link to={"/vehicleDetails"}>
            <button
              className="bg-gray-100 hover:bg-gray-900 hover:text-white text-gray-800 px-4 py-2.5 rounded-lg font-semibold text-sm transform hover:scale-[1.02] transition-all duration-200 border border-gray-200 hover:border-gray-900"
              onClick={() => onVehicleDetail(vehicle._id, dispatch, navigate)}
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;

