import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
// Load env from backend/.env to ensure values exist here too
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });
import { v2 as cloudinary, uploader, config } from "cloudinary";


export const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
   
  });

  next();
};

export { uploader, cloudinary };
