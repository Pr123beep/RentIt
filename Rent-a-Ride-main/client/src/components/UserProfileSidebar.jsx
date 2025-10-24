import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  signOut,
} from "../redux/user/userSlice";
import { SiShopware } from "react-icons/si";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";
import { links } from "./UserSidebarContent";
import { showSidebarOrNot } from "../redux/adminSlices/adminDashboardSlice/DashboardSlice";
import { CiLogout } from "react-icons/ci";


const UserProfileSidebar = () => {
  const { activeMenu, screenSize } = useSelector(
    (state) => state.adminDashboardSlice
  );

  const { currentUser, isLoading } = useSelector(
    (state) => state.user
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-green-700 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 text-md font-semibold m-2 shadow-sm";
  //in normal mode there was dark:text-gray-200 i removed it
  const normalLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg  text-md text-gray-700 hover:text-green-600 hover:bg-green-50 m-2 transition-all duration-200";

  //SignOut
  const handleSignout = async () => {
    const res = await fetch("/api/admin/signout", {
      method: "GET",
      credentials:'include'
    });
    const data = await res.json();
    if (data) {
      dispatch(signOut());
      navigate("/signin");
    }
  };

  const handleDelete = async () => {
    // Add confirmation dialog
    const confirmed = window.confirm(
      "Are you sure you want to delete your account? This action cannot be undone and will delete all your bookings and data."
    );
    
    if (!confirmed) {
      return;
    }

    try {
      dispatch(deleteUserStart());
      
      // Get authentication tokens
      const refreshToken = localStorage.getItem('refreshToken');
      const accessToken = localStorage.getItem('accessToken');
      
      console.log("🗑️ Attempting to delete account:", {
        userId: currentUser._id,
        hasRefreshToken: !!refreshToken,
        hasAccessToken: !!accessToken
      });
      
      const res = await fetch(`/api/user/delete/${currentUser._id}`, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${refreshToken},${accessToken}`,
          "Content-Type": "application/json"
        },
        credentials: 'include',
        signal: AbortSignal.timeout(10000) // 10 second timeout
      });
      
      console.log("📥 Delete response status:", res.status);
      
      const data = await res.json();
      console.log("📥 Delete response data:", data);
      
      if (!res.ok) {
        console.error("Delete account failed:", data);
        dispatch(deleteUserFailure(data.message || "Failed to delete account"));
        alert("Failed to delete account. Please try again.");
        return;
      }
      
      // Success - clear local storage and redirect
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      dispatch(deleteUserSuccess(data));
      alert("Account deleted successfully.");
      navigate("/signin");
      
    } catch (error) {
      console.error("Delete account error:", error);
      
      if (error.name === 'TimeoutError') {
        alert("Request timed out. Please check your internet connection and try again.");
      } else if (error.name === 'AbortError') {
        alert("Request was cancelled. Please try again.");
      } else {
        alert("An error occurred while deleting your account. Please try again.");
      }
      
      dispatch(deleteUserFailure(error));
    } finally {
      // Always clear loading state
      dispatch(deleteUserFailure(null));
    }
  };

  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10 bg-gradient-to-b from-white to-gray-50">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center px-2 pt-2">
            <Link
              to={`/`}
              onClick={() => {}}
              className="items-center flex gap-3 mt-4 ml-3 text-xl font-extrabold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent tracking-tight hover:from-green-700 hover:to-green-800 transition-all"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg shadow-md">
                <SiShopware className="text-white" />
              </div>
              Rent a Ride
            </Link>
            {/* hide sidebar button */}
            <TooltipComponent content={"menu"} position="BottomCenter">
              <button
                className="text-xl rounded-full p-3 mt-4 block hover:bg-red-100 text-gray-700 hover:text-red-600 transition-all duration-200"
                onClick={() => {dispatch(showSidebarOrNot(false))}}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          
          <div className="mt-10 px-2">
            <div className="mb-4 px-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Navigation</p>
            </div>
            {links.map((cur, idx) => (
              <div key={idx}>
                {cur.links.map((link) => (
                  <NavLink
                    to={`/profile/${link.name}`}
                    key={link.name}
                    onClick={() => {
                      if (screenSize <= 900 && activeMenu) {
                        dispatch(showSidebarOrNot(false));
                      }
                    }}
                    className={({ isActive }) =>
                      isActive ? activeLink : normalLink
                    }
                  >
                    <div className={`text-2xl ${({ isActive }) => isActive ? 'text-green-600' : 'text-gray-600'}`}>
                      {link.icon}
                    </div>
                    <span className="capitalize font-medium">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}

            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="mb-3 px-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Account</p>
              </div>
              
              <div className="flex flex-col gap-y-2">
                <button
                  type="button"
                  className="flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-red-600 hover:bg-red-50 hover:text-red-700 m-2 font-medium transition-all duration-200 group"
                  onClick={handleSignout}
                >
                  <CiLogout className="text-2xl group-hover:scale-110 transition-transform" />
                  <span>Sign Out</span>
                </button>

                <button
                  className="flex items-center gap-3 pl-4 pt-3 pb-2.5 rounded-lg text-md text-red-600 hover:bg-red-50 hover:text-red-700 m-2 font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={handleDelete}
                  type="button"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
                      <span>Deleting...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-lg">🗑️</span>
                      <span>Delete Account</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserProfileSidebar;
