import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import Vehicle from "./models/vehicleModel.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// Mapping of car models to car types
const carTypeMapping = {
  // Sedans
  "Swift Dzire": "sedan",
  "City": "sedan",
  "Verna": "sedan",
  "Vento": "sedan",
  "Rapid": "sedan",
  "Camry": "sedan",
  "Octavia": "sedan",
  "Accord": "sedan",
  
  // SUVs
  "Creta": "suv",
  "Seltos": "suv",
  "Nexon": "suv",
  "Scorpio": "suv",
  "XUV700": "suv",
  "Harrier": "suv",
  "Hector": "suv",
  "Compass": "suv",
  "Fortuner": "suv",
  "Endeavour": "suv",
  "Safari": "suv",
  "Magnite": "suv",
  "Kiger": "suv",
  "Venue": "suv",
  "Brezza": "suv",
  "Alcazar": "suv",
  "C5 Aircross": "suv",
  "WR-V": "suv",
  "Urban Cruiser": "suv",
  "Kicks": "suv",
  "Tiguan": "suv",
  "Kushaq": "suv",
  "Astor": "suv",
  "Nexon EV": "suv",
  "ZS EV": "suv",
  
  // Hatchbacks
  "Swift": "hatchback",
  "i20": "hatchback",
  "Altroz": "hatchback",
  "Jazz": "hatchback",
  "Polo": "hatchback",
  "Baleno": "hatchback",
  "C3": "hatchback",
  "Punto": "hatchback",
  "Glanza": "hatchback",
  "Tiago EV": "hatchback",
  
  // MPVs
  "Ertiga": "mpv",
  "XL6": "mpv",
  "Carens": "mpv",
  "Innova Crysta": "mpv",
  "Go Plus": "mpv",
  "Triber": "mpv",
  "Bolero": "suv",
  "TUV300": "suv"
};

async function updateCarTypes() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.mongo_uri);
    console.log("✅ MongoDB connected\n");

    const vehicles = await Vehicle.find();
    console.log(`Found ${vehicles.length} vehicles to update\n`);

    let updated = 0;
    let skipped = 0;

    for (const vehicle of vehicles) {
      // Determine car_type based on the vehicle name
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
        console.log(`✅ Updated ${vehicle.name} → ${carType}`);
        updated++;
      } catch (err) {
        console.log(`❌ Error updating ${vehicle.name}: ${err.message}`);
        skipped++;
      }
    }

    console.log(`\n🎉 Update completed!`);
    console.log(`✅ Updated: ${updated} vehicles`);
    console.log(`⚠️  Skipped: ${skipped} vehicles`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

updateCarTypes();

