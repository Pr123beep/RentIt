import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import MasterData from "./models/masterDataModel.js";
import Vehicle from "./models/vehicleModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// Location data
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

  // Car models data
  { id: "car_1", brand: "Maruti Suzuki", model: "Swift Dzire", type: "car" },
  { id: "car_2", brand: "Honda", model: "City", type: "car" },
  { id: "car_3", brand: "Hyundai", model: "Creta", type: "car" },
  { id: "car_4", brand: "Hyundai", model: "Verna", type: "car" },
  { id: "car_5", brand: "Tata", model: "Nexon", type: "car" },
  { id: "car_6", brand: "Kia", model: "Seltos", type: "car" },
  { id: "car_7", brand: "Mahindra", model: "Scorpio", type: "car" },
  { id: "car_8", brand: "Mahindra", model: "XUV700", type: "car" },
  { id: "car_9", brand: "Tata", model: "Harrier", type: "car" },
  { id: "car_10", brand: "MG", model: "Hector", type: "car" },
  { id: "car_11", brand: "Maruti Suzuki", model: "Swift", type: "car" },
  { id: "car_12", brand: "Hyundai", model: "i20", type: "car" },
  { id: "car_13", brand: "Tata", model: "Altroz", type: "car" },
  { id: "car_14", brand: "Honda", model: "Jazz", type: "car" },
  { id: "car_15", brand: "Maruti Suzuki", model: "Ertiga", type: "car" },
  { id: "car_16", brand: "Toyota", model: "Innova Crysta", type: "car" },
  { id: "car_17", brand: "Toyota", model: "Fortuner", type: "car" },
  { id: "car_18", brand: "Jeep", model: "Compass", type: "car" },
];

// Car type mapping
const carTypeMapping = {
  "Swift Dzire": "sedan", "City": "sedan", "Verna": "sedan", "Vento": "sedan", "Rapid": "sedan",
  "Camry": "sedan", "Octavia": "sedan", "Accord": "sedan",
  "Creta": "suv", "Seltos": "suv", "Nexon": "suv", "Scorpio": "suv", "XUV700": "suv",
  "Harrier": "suv", "Hector": "suv", "Compass": "suv", "Fortuner": "suv", "Endeavour": "suv",
  "Safari": "suv", "Magnite": "suv", "Kiger": "suv", "Venue": "suv", "Brezza": "suv",
  "Alcazar": "suv", "Tiguan": "suv", "Kushaq": "suv", "Astor": "suv", "Nexon EV": "suv",
  "ZS EV": "suv", "Urban Cruiser": "suv", "Kicks": "suv", "WR-V": "suv",
  "Swift": "hatchback", "i20": "hatchback", "Altroz": "hatchback", "Jazz": "hatchback",
  "Polo": "hatchback", "Baleno": "hatchback", "C3": "hatchback", "Punto": "hatchback",
  "Glanza": "hatchback", "Tiago EV": "hatchback",
  "Ertiga": "mpv", "XL6": "mpv", "Carens": "mpv", "Innova Crysta": "mpv",
  "Go Plus": "mpv", "Triber": "mpv", "Bolero": "suv", "TUV300": "suv", "C5 Aircross": "suv"
};

async function setupComplete() {
  try {
    console.log("🚀 Starting complete setup...\n");
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.mongo_uri);
    console.log("✅ MongoDB connected\n");

    // Step 1: Add Master Data (Locations)
    console.log("📍 Adding location data...");
    let locationsAdded = 0;
    
    for (const entry of masterDataEntries) {
      try {
        const existing = await MasterData.findOne({ id: entry.id });
        if (!existing) {
          await MasterData.create(entry);
          if (entry.type === 'location') {
            console.log(`✅ Added location: ${entry.district} - ${entry.location}`);
            locationsAdded++;
          } else {
            console.log(`✅ Added car model: ${entry.brand} ${entry.model}`);
          }
        }
      } catch (err) {
        if (!err.message.includes('duplicate')) {
          console.log(`⚠️  ${entry.id}: ${err.message}`);
        }
      }
    }

    console.log(`\n📍 Locations added: ${locationsAdded}`);

    // Step 2: Update car_type for all vehicles
    console.log("\n🚗 Updating vehicle car_types...");
    const vehicles = await Vehicle.find();
    let vehiclesUpdated = 0;

    for (const vehicle of vehicles) {
      let carType = "suv"; // default
      
      for (const [model, type] of Object.entries(carTypeMapping)) {
        if (vehicle.name && vehicle.name.toLowerCase().includes(model.toLowerCase())) {
          carType = type;
          break;
        }
      }

      try {
        await Vehicle.updateOne(
          { _id: vehicle._id },
          { $set: { car_type: carType } }
        );
        vehiclesUpdated++;
      } catch (err) {
        console.log(`❌ Error updating ${vehicle.name}: ${err.message}`);
      }
    }

    console.log(`✅ Updated car_type for ${vehiclesUpdated} vehicles`);

    // Summary
    const totalLocations = await MasterData.countDocuments({ type: "location" });
    const totalCarModels = await MasterData.countDocuments({ type: "car" });
    const totalVehicles = await Vehicle.countDocuments();
    
    console.log(`\n🎉 Setup Complete!`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
    console.log(`📍 Total Locations: ${totalLocations}`);
    console.log(`🏷️  Total Car Models: ${totalCarModels}`);
    console.log(`🚗 Total Vehicles: ${totalVehicles}`);
    console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`);
    console.log(`✅ Your Rent-a-Ride platform is ready!`);
    console.log(`🌐 Visit: http://localhost:5173\n`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

setupComplete();

