import { useState, forwardRef } from "react";
import Modal from "../../components/CustomModal";
import { FiEdit2, FiUser, FiMail, FiPhone, FiMapPin, FiSave, FiX } from "react-icons/fi";

//mui

import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { editUserProfile, setUpdated } from "../../redux/user/userSlice";
import { useForm } from "react-hook-form";

const ProfileEdit = forwardRef((props, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const { username, email, phoneNumber, adress, _id } = currentUser || {};

  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const editProfileData = async (data, id) => {
    try {
      if (data && id) {
        const formData = data;
        
        console.log("Updating profile for user:", id);
        console.log("Form data:", formData);
        
        const res = await fetch(`/api/user/editUserProfile/${id}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ formData }),
        });

        console.log("Response status:", res.status);

        if (res.ok) {
          const updatedData = await res.json();
          console.log("Updated data from server:", updatedData);
          
          // Update Redux store with the form data (only the fields that changed)
          dispatch(editUserProfile({ ...formData }));
          dispatch(setUpdated(true));
          
          // Close modal after successful update
          setIsModalOpen(false);
        } else {
          const errorData = await res.json();
          console.error("Failed to update profile:", errorData);
          alert("Failed to update profile. Please try again.");
        }
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Don't render if no current user
  if (!currentUser) {
    return null;
  }

  return (
    <>
      <button 
        ref={ref}
        type="button" 
        className="bg-white hover:bg-green-50 text-green-600 rounded-full p-2 shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110" 
        onClick={() => setIsModalOpen(true)}
      >
        <FiEdit2 className="text-xl" />
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        className="bg-white mt-10 rounded-2xl max-w-[650px] min-w-[360px] shadow-2xl"
      >
        <form onSubmit={handleSubmit((data) => editProfileData(data, _id))}>
          <div className="p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-full p-3">
                  <FiEdit2 className="text-white text-2xl" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Edit Profile</h2>
                  <p className="text-gray-600 text-sm mt-1">Update your personal information</p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col mx-auto md:min-w-[500px] gap-6 my-8">
              {/* Username Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-green-600">
                  <FiUser className="text-xl" />
                </div>
              <TextField
                id="username"
                  label="Full Name"
                variant="outlined"
                {...register("username")}
                defaultValue={username}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingLeft: '40px',
                      '&:hover fieldset': {
                        borderColor: '#10B981',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#10B981',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#10B981',
                    },
                  }}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-green-600">
                  <FiMail className="text-xl" />
                </div>
              <TextField
                id="email"
                  label="Email Address"
                variant="outlined"
                defaultValue={email}
                {...register("email")}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingLeft: '40px',
                      '&:hover fieldset': {
                        borderColor: '#10B981',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#10B981',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#10B981',
                    },
                  }}
                />
              </div>

              {/* Phone Field */}
              <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 z-10 text-green-600">
                  <FiPhone className="text-xl" />
                </div>
              <TextField
                id="phoneNumber"
                  label="Phone Number"
                type="Number"
                variant="outlined"
                defaultValue={phoneNumber}
                {...register("phoneNumber")}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingLeft: '40px',
                      '&:hover fieldset': {
                        borderColor: '#10B981',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#10B981',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#10B981',
                    },
                  }}
                />
              </div>

              {/* Address Field */}
              <div className="relative">
                <div className="absolute left-3 top-6 z-10 text-green-600">
                  <FiMapPin className="text-xl" />
                </div>
              <TextField
                id="adress"
                  label="Address"
                multiline
                rows={4}
                defaultValue={adress}
                {...register("adress")}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      paddingLeft: '40px',
                      '&:hover fieldset': {
                        borderColor: '#10B981',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#10B981',
                      },
                    },
                    '& .MuiInputLabel-root.Mui-focused': {
                      color: '#10B981',
                    },
                  }}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-3 pt-6 border-t border-gray-200">
              <button
                type="button"
                className="px-6 py-3 rounded-xl text-gray-700 bg-gray-100 hover:bg-gray-200 font-semibold transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md"
                onClick={() => {
                  setIsModalOpen(false);
                }}
              >
                <FiX className="text-lg" />
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-white bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 font-semibold transition-all duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <FiSave className="text-lg" />
                Save Changes
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
});

ProfileEdit.displayName = 'ProfileEdit';

export default ProfileEdit;
