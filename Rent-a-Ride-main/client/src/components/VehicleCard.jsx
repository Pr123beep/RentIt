import { FaCarSide } from "react-icons/fa";
import { BsFillFuelPumpFill } from "react-icons/bs";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { Link } from "react-router-dom";
import { TbManualGearbox, TbAutomaticGearbox } from "react-icons/tb";

const VehicleCard = ({ vehicle, idx, onVehicleDetail, dispatch, navigate }) => {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 ease-in-out animate-fade-in border border-gray-100 w-full max-w-sm mx-auto"
      style={{animationDelay: `${idx * 50}ms`}}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 h-52 group">
        <img
          src={`${vehicle.image[0]}`}
          alt={`${vehicle.name}`}
          className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg animate-pulse-slow">
          ₹{vehicle.price}
          <span className="text-xs font-normal">/day</span>
        </div>
        {/* Year Badge */}
        {vehicle.year_made && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold shadow">
            {vehicle.year_made}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5">
        {/* Car Name & Company */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 mb-1 hover:text-green-600 transition-colors capitalize">
            {vehicle.name}
          </h3>
          <p className="text-sm text-gray-500 font-medium flex items-center gap-1">
            <FaCarSide className="text-gray-400" />
            {vehicle.company}
          </p>
        </div>

        {/* Specs Grid - 2x2 */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          {/* Seats */}
          <div className="flex items-center gap-2 bg-green-50 p-3 rounded-xl hover:bg-green-100 transition-colors">
            <div className="bg-green-500 p-2 rounded-lg">
              <MdAirlineSeatReclineNormal className="text-white text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">Seats</p>
              <p className="text-sm font-bold text-gray-900">{vehicle.seats}</p>
            </div>
          </div>

          {/* Fuel */}
          <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-xl hover:bg-blue-100 transition-colors">
            <div className="bg-blue-500 p-2 rounded-lg">
              <BsFillFuelPumpFill className="text-white text-lg" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">Fuel</p>
              <p className="text-sm font-bold text-gray-900 capitalize">{vehicle.fuel_type}</p>
            </div>
          </div>

          {/* Transmission */}
          <div className="flex items-center gap-2 bg-purple-50 p-3 rounded-xl hover:bg-purple-100 transition-colors">
            <div className="bg-purple-500 p-2 rounded-lg">
              {vehicle.transmition === 'automatic' ? (
                <TbAutomaticGearbox className="text-white text-lg" />
              ) : (
                <TbManualGearbox className="text-white text-lg" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">Gear</p>
              <p className="text-sm font-bold text-gray-900 capitalize">{vehicle.transmition}</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 bg-orange-50 p-3 rounded-xl hover:bg-orange-100 transition-colors">
            <div className="bg-orange-500 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-xs text-gray-500 font-medium">City</p>
              <p className="text-sm font-bold text-gray-900 truncate capitalize">{vehicle.district}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-4"></div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Link to={"/vehicleDetails"} className="flex-1">
            <button
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-xl font-bold text-sm transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              onClick={() => onVehicleDetail(vehicle._id, dispatch, navigate)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Book Now
            </button>
          </Link>

          <Link to={"/vehicleDetails"}>
            <button
              className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-5 py-3 rounded-xl font-bold text-sm transform hover:scale-[1.02] transition-all duration-200 border border-gray-200 hover:border-gray-300 flex items-center gap-1"
              onClick={() => onVehicleDetail(vehicle._id, dispatch, navigate)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VehicleCard;

