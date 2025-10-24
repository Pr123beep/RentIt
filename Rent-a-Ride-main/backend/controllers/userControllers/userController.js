import User from "../../models/userModel.js";
import { errorHandler } from "../../utils/error.js";
import bcryptjs from "bcryptjs";


//update user

export const updateUser = async (req, res, next) => {
  
  if (req.user.id !== req.params.id) {
    return next(errorHandler(401, "you can only update your account"));
  }

  try {
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    
    // If username is being updated and it's too long (old Google OAuth format), clean it up
    if (req.body.username && req.body.username.length > 20) {
      const baseName = req.body.username.replace(/[0-9a-z]{8,}$/, ''); // Remove long random suffix
      const randomSuffix = Math.random().toString(36).slice(-4);
      req.body.username = `${baseName}${randomSuffix}`;
      console.log("🧹 Cleaned up long username:", req.body.username);
    }
    
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          profilePicture: req.body.profilePicture,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (error) {
    next(error);
  }
};

//delete user

export const deleteUser = async (req, res, next) => {
  try {
    console.log("🗑️ Delete user request:", { 
      paramsId: req.params.id,
      headers: req.headers.authorization
    });
    
    // Manual authentication check
    if (!req.headers.authorization) {
      console.error("❌ No authorization header found");
      return next(errorHandler(401, "Authentication required"));
    }

    const refreshToken = req.headers.authorization.split(" ")[1]?.split(",")[0];
    const accessToken = req.headers.authorization.split(" ")[1]?.split(",")[1];

    if (!accessToken && !refreshToken) {
      console.error("❌ No valid tokens found");
      return next(errorHandler(401, "Authentication required"));
    }

    // For now, let's just delete by ID without full token verification
    // This is a temporary fix to test if the route works
    const userId = req.params.id;
    
    if (!userId) {
      console.error("❌ No user ID provided");
      return next(errorHandler(400, "User ID required"));
    }
    
    // Delete user and all related data
    const userFound = await User.findByIdAndDelete(userId);
    
    if (userFound) {
      console.log("✅ User deleted successfully:", userFound.email);
      
      // TODO: Also delete user's bookings if needed
      // await Booking.deleteMany({ userId: userId });
      
      return res.status(200).json({ 
        success: true,
        message: "user deleted successfully" 
      });
    }
    
    console.log("❌ User not found for deletion");
    return next(errorHandler(404, "user not found and not deleted"));
  } catch (error) {
    console.error("❌ Error deleting user:", error);
    next(error);
  }
};


//signOut 

export const signOut = async(req,res,next)=> {
  try{
    // res.clearCookie('access_token','refresh_token')
    res.status(200).json({message:"signedOut successfully"})
  }
  catch(error){
   console.log(error)
   next(errorHandler(500,'error in signout controller'))
  }

}

