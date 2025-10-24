import { useSelector, useDispatch } from "react-redux";

import UserProfileSidebar from "../../components/UserProfileSidebar";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { Link, Route, Routes } from "react-router-dom";
import Orders from "./Orders";
import UserProfileContent from "../../components/UserProfileContent";
import Favorites from "./Favorites";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { showSidebarOrNot } from "../../redux/adminSlices/adminDashboardSlice/DashboardSlice";
import { IoMenu } from "react-icons/io5";

function Profile() {
  const { isError } = useSelector((state) => state.user);
  const { activeMenu } = useSelector((state) => state.adminDashboardSlice);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {isError && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-red-100 border border-red-400 text-red-700 px-6 py-3 rounded-lg shadow-lg">
          {isError.message}
        </div>
      )}
      
      <div className="fixed top-4 right-5 md:right-10 z-50">
        <TooltipComponent content={"Back to Home"} position="BottomCenter">
          <Link to={"/"}>
            <div className="bg-white hover:bg-green-50 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 border border-gray-200">
              <IoArrowBackCircleSharp
                className="text-green-600 text-3xl"
              />
            </div>
          </Link>
        </TooltipComponent>
      </div>

      <div>
        <div className="flex relative">
          {activeMenu ? (
            <div className="w-72 bg-white fixed sidebar shadow-xl border-r border-gray-200 z-40">
              <UserProfileSidebar />
            </div>
          ) : (
            <div className="w-0">
              <UserProfileSidebar />
            </div>
          )}

          {/* hamburger icon */}
          {!activeMenu && (
            <TooltipComponent
              content={"Menu"}
              className="fixed top-4 left-4 z-50"
              position="BottomCenter"
            >
              <button
                className="bg-white hover:bg-green-50 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 border border-gray-200"
                onClick={() => {
                  dispatch(showSidebarOrNot(true));
                }}
              >
                <IoMenu className="text-green-600 text-2xl" />
              </button>
            </TooltipComponent>
          )}

          <div
            className={`min-h-screen w-full transition-all duration-300 ${
              activeMenu ? "md:ml-72" : ""
            }`}
          >
            <div className="main_section">
              <Routes>
                <Route path="/" element={<UserProfileContent />} />
                <Route path="/profiles" element={<UserProfileContent />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/favorites" element={<Favorites />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
