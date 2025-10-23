import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import MasterData from "./models/masterDataModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// Location data matching our vehicles
const masterDataEntries = [
  // Bangalore locations
  { id: "loc_1", district: "Bangalore", location: "Koramangala", type: "location" },
  { id: "loc_2", district: "Bangalore", location: "Whitefield", type: "location" },
  { id: "loc_3", district: "Bangalore", location: "Indiranagar", type: "location" },
  { id: "loc_4", district: "Bangalore", location: "Jayanagar", type: "location" },
  { id: "loc_5", district: "Bangalore", location: "HSR Layout", type: "location" },
  { id: "loc_6", district: "Bangalore", location: "Malleshwaram", type: "location" },
  { id: "loc_7", district: "Bangalore", location: "Rajajinagar", type: "location" },
  { id: "loc_8", district: "Bangalore", location: "Electronic City", type: "location" },
  { id: "loc_9", district: "Bangalore", location: "Banashankari", type: "location" },
  { id: "loc_10", district: "Bangalore", location: "BTM Layout", type: "location" },
  { id: "loc_11", district: "Bangalore", location: "Marathahalli", type: "location" },
  { id: "loc_12", district: "Bangalore", location: "Sarjapur Road", type: "location" },
  { id: "loc_13", district: "Bangalore", location: "Yelahanka", type: "location" },

  // Mumbai locations
  { id: "loc_14", district: "Mumbai", location: "Andheri", type: "location" },
  { id: "loc_15", district: "Mumbai", location: "Bandra", type: "location" },
  { id: "loc_16", district: "Mumbai", location: "Powai", type: "location" },
  { id: "loc_17", district: "Mumbai", location: "Vile Parle", type: "location" },
  { id: "loc_18", district: "Mumbai", location: "Borivali", type: "location" },
  { id: "loc_19", district: "Mumbai", location: "Dadar", type: "location" },
  { id: "loc_20", district: "Mumbai", location: "Andheri East", type: "location" },
  { id: "loc_21", district: "Mumbai", location: "Mulund", type: "location" },
  { id: "loc_22", district: "Mumbai", location: "Juhu", type: "location" },
  { id: "loc_23", district: "Mumbai", location: "Navi Mumbai", type: "location" },
  { id: "loc_24", district: "Mumbai", location: "Goregaon", type: "location" },
  { id: "loc_25", district: "Mumbai", location: "Kalyan", type: "location" },
  { id: "loc_26", district: "Mumbai", location: "Thane", type: "location" },

  // Delhi locations
  { id: "loc_27", district: "Delhi", location: "Connaught Place", type: "location" },
  { id: "loc_28", district: "Delhi", location: "Dwarka", type: "location" },
  { id: "loc_29", district: "Delhi", location: "Rohini", type: "location" },
  { id: "loc_30", district: "Delhi", location: "Vasant Vihar", type: "location" },
  { id: "loc_31", district: "Delhi", location: "Karol Bagh", type: "location" },
  { id: "loc_32", district: "Delhi", location: "Lajpat Nagar", type: "location" },
  { id: "loc_33", district: "Delhi", location: "Nehru Place", type: "location" },
  { id: "loc_34", district: "Delhi", location: "Janakpuri", type: "location" },
  { id: "loc_35", district: "Delhi", location: "Punjabi Bagh", type: "location" },
  { id: "loc_36", district: "Delhi", location: "Greater Kailash", type: "location" },
  { id: "loc_37", district: "Delhi", location: "Saket", type: "location" },
  { id: "loc_38", district: "Delhi", location: "Pitampura", type: "location" },

  // Chennai locations
  { id: "loc_39", district: "Chennai", location: "T Nagar", type: "location" },
  { id: "loc_40", district: "Chennai", location: "Adyar", type: "location" },
  { id: "loc_41", district: "Chennai", location: "Anna Nagar", type: "location" },
  { id: "loc_42", district: "Chennai", location: "Velachery", type: "location" },
  { id: "loc_43", district: "Chennai", location: "Porur", type: "location" },
  { id: "loc_44", district: "Chennai", location: "Tambaram", type: "location" },
  { id: "loc_45", district: "Chennai", location: "Ashok Nagar", type: "location" },
  { id: "loc_46", district: "Chennai", location: "Kilpauk", type: "location" },
  { id: "loc_47", district: "Chennai", location: "Kodambakkam", type: "location" },
  { id: "loc_48", district: "Chennai", location: "Nungambakkam", type: "location" },
  { id: "loc_49", district: "Chennai", location: "Mylapore", type: "location" },
  { id: "loc_50", district: "Chennai", location: "Guindy", type: "location" },

  // Gurgaon locations
  { id: "loc_51", district: "Gurgaon", location: "Golf Course Road", type: "location" },
  { id: "loc_52", district: "Gurgaon", location: "Cyber City", type: "location" },
  { id: "loc_53", district: "Gurgaon", location: "Sohna Road", type: "location" },
  { id: "loc_54", district: "Gurgaon", location: "MG Road", type: "location" },

  // Car models data (for admin dropdown when adding vehicles)
  { id: "car_1", brand: "Maruti Suzuki", model: "Swift Dzire", type: "car", photoUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400" },
  { id: "car_2", brand: "Honda", model: "City", type: "car", photoUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400" },
  { id: "car_3", brand: "Hyundai", model: "Creta", type: "car", photoUrl: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400" },
  { id: "car_4", brand: "Hyundai", model: "Verna", type: "car", photoUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
  { id: "car_5", brand: "Tata", model: "Nexon", type: "car", photoUrl: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400" },
  { id: "car_6", brand: "Kia", model: "Seltos", type: "car", photoUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400" },
  { id: "car_7", brand: "Mahindra", model: "Scorpio", type: "car", photoUrl: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400" },
  { id: "car_8", brand: "Mahindra", model: "XUV700", type: "car", photoUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=400" },
  { id: "car_9", brand: "Tata", model: "Harrier", type: "car", photoUrl: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400" },
  { id: "car_10", brand: "MG", model: "Hector", type: "car", photoUrl: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400" },
  { id: "car_11", brand: "Maruti Suzuki", model: "Swift", type: "car", photoUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400" },
  { id: "car_12", brand: "Hyundai", model: "i20", type: "car", photoUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400" },
  { id: "car_13", brand: "Tata", model: "Altroz", type: "car", photoUrl: "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=400" },
  { id: "car_14", brand: "Honda", model: "Jazz", type: "car", photoUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
  { id: "car_15", brand: "Maruti Suzuki", model: "Ertiga", type: "car", photoUrl: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=400" },
  { id: "car_16", brand: "Maruti Suzuki", model: "XL6", type: "car", photoUrl: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400" },
  { id: "car_17", brand: "Kia", model: "Carens", type: "car", photoUrl: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400" },
  { id: "car_18", brand: "Toyota", model: "Innova Crysta", type: "car", photoUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
  { id: "car_19", brand: "Tata", model: "Nexon EV", type: "car", photoUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400" },
  { id: "car_20", brand: "MG", model: "ZS EV", type: "car", photoUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400" },
  { id: "car_21", brand: "Toyota", model: "Fortuner", type: "car", photoUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400" },
  { id: "car_22", brand: "Jeep", model: "Compass", type: "car", photoUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400" },
  { id: "car_23", brand: "Volkswagen", model: "Polo", type: "car", photoUrl: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400" },
  { id: "car_24", brand: "Maruti Suzuki", model: "Baleno", type: "car", photoUrl: "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400" },
  { id: "car_25", brand: "Maruti Suzuki", model: "Brezza", type: "car", photoUrl: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400" },
];

async function seedMasterData() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.mongo_uri);
    console.log("✅ MongoDB connected\n");

    console.log("Inserting master data...\n");
    
    for (const entry of masterDataEntries) {
      try {
        const existing = await MasterData.findOne({ id: entry.id });
        if (existing) {
          console.log(`⚠️  ${entry.type === 'location' ? entry.district + ' - ' + entry.location : entry.brand + ' ' + entry.model} already exists, skipping...`);
        } else {
          await MasterData.create(entry);
          console.log(`✅ Added: ${entry.type === 'location' ? entry.district + ' - ' + entry.location : entry.brand + ' ' + entry.model}`);
        }
      } catch (err) {
        console.log(`❌ Error adding ${entry.id}: ${err.message}`);
      }
    }

    const totalLocations = await MasterData.countDocuments({ type: "location" });
    const totalCars = await MasterData.countDocuments({ type: "car" });
    
    console.log(`\n🎉 Seeding completed!`);
    console.log(`📍 Total locations: ${totalLocations}`);
    console.log(`🚗 Total car models: ${totalCars}`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

seedMasterData();

