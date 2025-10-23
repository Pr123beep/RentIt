import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, ".env") });

// Vehicle Schema (same as your model)
const vehicleSchema = new mongoose.Schema({
  registeration_number: { type: String, required: true, unique: true },
  car_title: { type: String },
  car_description: { type: String },
  company: { type: String },
  name: { type: String },
  model: { type: String },
  year_made: { type: Number },
  fuel_type: { type: String, enum: ["petrol", "diesel", "electric", "hybrid"] },
  seats: { type: Number },
  transmition: { type: String, enum: ["manual", "automatic"] },
  image: { type: Array },
  description: { type: String },
  title: { type: String },
  price: { type: Number },
  location: { type: String, required: true },
  district: { type: String, required: true },
  isDeleted: { type: String, default: "false" },
  isBooked: { type: Boolean, default: false },
  isAdminAdded: { type: Boolean, default: true },
  addedBy: { type: String, default: "admin" },
  isAdminApproved: { type: Boolean, default: true },
  isRejected: { type: Boolean, default: false }
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

// Sample vehicles data - 50+ unique vehicles
const vehicles = [
  // Sedans
  {
    registeration_number: "KA01AB1234",
    car_title: "Swift Dzire - Comfortable Sedan",
    car_description: "Well maintained Swift Dzire, perfect for city rides",
    company: "Maruti Suzuki",
    name: "Swift Dzire",
    model: "Dzire VXI",
    year_made: 2021,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1500,
    title: "Maruti Suzuki Swift Dzire",
    description: "Spacious sedan with excellent fuel efficiency. Perfect for family trips and daily commute.",
    location: "Koramangala",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH02CD5678",
    car_title: "Honda City - Premium Sedan",
    car_description: "Luxury sedan with advanced features",
    company: "Honda",
    name: "City",
    model: "City ZX",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 2000,
    title: "Honda City Premium",
    description: "Premium sedan with automatic transmission, perfect for comfortable long drives.",
    location: "Andheri",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL03EF9012",
    car_title: "Hyundai Verna - Executive Sedan",
    car_description: "Feature loaded executive sedan",
    company: "Hyundai",
    name: "Verna",
    model: "Verna SX",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 5,
    transmition: "automatic",
    price: 2200,
    title: "Hyundai Verna Executive",
    description: "Premium sedan with sunroof and advanced safety features.",
    location: "Connaught Place",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN04GH3456",
    car_title: "Volkswagen Virt o - German Engineering",
    car_description: "Solid build quality with great performance",
    company: "Volkswagen",
    name: "Vento",
    model: "Vento Highline",
    year_made: 2021,
    fuel_type: "diesel",
    seats: 5,
    transmition: "manual",
    price: 1900,
    title: "Volkswagen Vento Sedan",
    description: "German engineered sedan with excellent build quality and safety.",
    location: "T Nagar",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA05IJ7890",
    car_title: "Skoda Rapid - Elegant Sedan",
    car_description: "Spacious and elegant family sedan",
    company: "Skoda",
    name: "Rapid",
    model: "Rapid Ambition",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 2100,
    title: "Skoda Rapid Automatic",
    description: "Elegant sedan with spacious interiors and smooth automatic transmission.",
    location: "Whitefield",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  
  // SUVs
  {
    registeration_number: "MH06KL2345",
    car_title: "Hyundai Creta - Spacious SUV",
    car_description: "Popular SUV with great features and comfort",
    company: "Hyundai",
    name: "Creta",
    model: "Creta SX",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 5,
    transmition: "automatic",
    price: 3000,
    title: "Hyundai Creta SUV",
    description: "Spacious SUV perfect for family outings and road trips.",
    location: "Bandra",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80",
      "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL07MN6789",
    car_title: "Kia Seltos - Modern SUV",
    car_description: "Feature-packed modern SUV",
    company: "Kia",
    name: "Seltos",
    model: "Seltos HTX",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 2800,
    title: "Kia Seltos Premium SUV",
    description: "Modern SUV loaded with technology and comfort features.",
    location: "Dwarka",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN08OP1234",
    car_title: "Tata Nexon - Compact SUV",
    car_description: "5-star safety rated compact SUV",
    company: "Tata",
    name: "Nexon",
    model: "Nexon XZ+",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1800,
    title: "Tata Nexon Compact SUV",
    description: "Award-winning compact SUV with excellent safety features and build quality.",
    location: "Adyar",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA09QR5678",
    car_title: "Mahindra Scorpio - Rugged SUV",
    car_description: "Powerful SUV for all terrains",
    company: "Mahindra",
    name: "Scorpio",
    model: "Scorpio S11",
    year_made: 2022,
    fuel_type: "diesel",
    seats: 7,
    transmition: "manual",
    price: 2500,
    title: "Mahindra Scorpio 4WD",
    description: "Rugged and powerful SUV perfect for highway and off-road adventures.",
    location: "Indiranagar",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH10ST9012",
    car_title: "Mahindra XUV700 - Flagship SUV",
    car_description: "Premium 7-seater SUV with ADAS",
    company: "Mahindra",
    name: "XUV700",
    model: "XUV700 AX7",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 7,
    transmition: "automatic",
    price: 3500,
    title: "Mahindra XUV700 Premium",
    description: "Flagship SUV with advanced driver assistance systems and luxury features.",
    location: "Powai",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL11UV3456",
    car_title: "Tata Harrier - Bold SUV",
    car_description: "Powerful and stylish 5-seater SUV",
    company: "Tata",
    name: "Harrier",
    model: "Harrier XZ",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 5,
    transmition: "automatic",
    price: 3200,
    title: "Tata Harrier SUV",
    description: "Bold design with powerful diesel engine and panoramic sunroof.",
    location: "Rohini",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN12WX7890",
    car_title: "MG Hector - Connected SUV",
    car_description: "India's first internet car with smart features",
    company: "MG",
    name: "Hector",
    model: "Hector Sharp",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 2900,
    title: "MG Hector Smart SUV",
    description: "Smart SUV with AI assistant, panoramic sunroof, and connected car features.",
    location: "Anna Nagar",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA13YZ1234",
    car_title: "Jeep Compass - American SUV",
    car_description: "Premium American SUV with 4x4",
    company: "Jeep",
    name: "Compass",
    model: "Compass Limited",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 5,
    transmition: "automatic",
    price: 3800,
    title: "Jeep Compass 4x4",
    description: "Premium American SUV with legendary Jeep capability and luxury interiors.",
    location: "Jayanagar",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  
  // Hatchbacks
  {
    registeration_number: "MH14AB5678",
    car_title: "Maruti Swift - Sporty Hatchback",
    car_description: "Popular sporty hatchback with great mileage",
    company: "Maruti Suzuki",
    name: "Swift",
    model: "Swift ZXI",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1200,
    title: "Maruti Swift Sporty",
    description: "Zippy hatchback with sporty styling and excellent fuel economy.",
    location: "Vile Parle",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL15CD9012",
    car_title: "Hyundai i20 - Premium Hatchback",
    car_description: "Stylish and feature-rich premium hatchback",
    company: "Hyundai",
    name: "i20",
    model: "i20 Sportz",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1600,
    title: "Hyundai i20 Premium",
    description: "Premium hatchback with connected car features and stylish design.",
    location: "Vasant Vihar",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN16EF3456",
    car_title: "Tata Altroz - Premium Hatchback",
    car_description: "5-star safety rated premium hatchback",
    company: "Tata",
    name: "Altroz",
    model: "Altroz XZ",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1400,
    title: "Tata Altroz Safety Champion",
    description: "India's safest hatchback with Gold standard safety rating.",
    location: "Velachery",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1581540222194-0def2dda95b8?w=800&q=80",
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA17GH7890",
    car_title: "Honda Jazz - Versatile Hatchback",
    car_description: "Spacious hatchback with magic seats",
    company: "Honda",
    name: "Jazz",
    model: "Jazz VX",
    year_made: 2021,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1500,
    title: "Honda Jazz Magic Seats",
    description: "Versatile hatchback with segment-best space and innovative magic seats.",
    location: "HSR Layout",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH18IJ1234",
    car_title: "Volkswagen Polo - German Hatchback",
    car_description: "Solid German hatchback with great build",
    company: "Volkswagen",
    name: "Polo",
    model: "Polo Highline",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1700,
    title: "Volkswagen Polo AT",
    description: "German engineered hatchback with solid build and automatic transmission.",
    location: "Thane",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL19KL5678",
    car_title: "Maruti Baleno - Spacious Hatchback",
    car_description: "Premium hatchback with ample space",
    company: "Maruti Suzuki",
    name: "Baleno",
    model: "Baleno Alpha",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1450,
    title: "Maruti Baleno Premium",
    description: "Spacious premium hatchback with Nexa styling and features.",
    location: "Karol Bagh",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  
  // MPVs
  {
    registeration_number: "TN20MN9012",
    car_title: "Maruti Ertiga - Family MPV",
    car_description: "Perfect for large families and group trips",
    company: "Maruti Suzuki",
    name: "Ertiga",
    model: "Ertiga VXI",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 7,
    transmition: "manual",
    price: 1700,
    title: "Maruti Ertiga 7-Seater",
    description: "Reliable 7-seater MPV with good fuel economy and comfortable seating.",
    location: "Porur",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80",
      "https://images.unsplash.com/photo-1597404294360-feeeda04612e?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA21OP3456",
    car_title: "Maruti XL6 - Premium MPV",
    car_description: "Premium 6-seater MPV with captain seats",
    company: "Maruti Suzuki",
    name: "XL6",
    model: "XL6 Alpha",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 6,
    transmition: "automatic",
    price: 2000,
    title: "Maruti XL6 Captain Seats",
    description: "Premium 6-seater with captain seats in middle row and automatic transmission.",
    location: "Malleshwaram",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH22QR7890",
    car_title: "Kia Carens - Modern MPV",
    car_description: "Modern 7-seater MPV with SUV styling",
    company: "Kia",
    name: "Carens",
    model: "Carens Prestige",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 7,
    transmition: "automatic",
    price: 2400,
    title: "Kia Carens SUV-styled MPV",
    description: "Modern MPV with SUV-like stance and premium features for families.",
    location: "Borivali",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL23ST1234",
    car_title: "Toyota Innova Crysta - Premium MPV",
    car_description: "Legendary MPV with unmatched reliability",
    company: "Toyota",
    name: "Innova Crysta",
    model: "Crysta VX",
    year_made: 2022,
    fuel_type: "diesel",
    seats: 7,
    transmition: "automatic",
    price: 3500,
    title: "Toyota Innova Crysta Diesel",
    description: "Premium MPV with legendary reliability and comfortable seating for 7.",
    location: "Lajpat Nagar",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  
  // Electric Cars
  {
    registeration_number: "TN24UV5678",
    car_title: "Tata Nexon EV - Electric SUV",
    car_description: "India's best-selling electric SUV",
    company: "Tata",
    name: "Nexon EV",
    model: "Nexon EV Max",
    year_made: 2023,
    fuel_type: "electric",
    seats: 5,
    transmition: "automatic",
    price: 2200,
    title: "Tata Nexon EV Max Range",
    description: "Electric SUV with 437km range on single charge. Zero emissions, low running cost.",
    location: "Tambaram",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA25WX9012",
    car_title: "MG ZS EV - Premium Electric SUV",
    car_description: "Premium electric SUV with long range",
    company: "MG",
    name: "ZS EV",
    model: "ZS EV Excite",
    year_made: 2023,
    fuel_type: "electric",
    seats: 5,
    transmition: "automatic",
    price: 2800,
    title: "MG ZS EV Premium Electric",
    description: "Premium electric SUV with 461km range and fast charging capability.",
    location: "Electronic City",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH26YZ3456",
    car_title: "Tata Tiago EV - Affordable Electric",
    car_description: "Most affordable electric car in India",
    company: "Tata",
    name: "Tiago EV",
    model: "Tiago EV XZ+",
    year_made: 2023,
    fuel_type: "electric",
    seats: 5,
    transmition: "automatic",
    price: 1600,
    title: "Tata Tiago EV Affordable",
    description: "Affordable electric hatchback with 315km range. Perfect city electric car.",
    location: "Dadar",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  },
  
  // More Sedans
  {
    registeration_number: "DL27AB7890",
    car_title: "Toyota Camry - Luxury Sedan",
    car_description: "Premium luxury sedan with hybrid technology",
    company: "Toyota",
    name: "Camry",
    model: "Camry Hybrid",
    year_made: 2023,
    fuel_type: "hybrid",
    seats: 5,
    transmition: "automatic",
    price: 4500,
    title: "Toyota Camry Hybrid Luxury",
    description: "Premium hybrid sedan with superior comfort and advanced safety features.",
    location: "Golf Course Road",
    district: "Gurgaon",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN28CD1234",
    car_title: "Skoda Octavia - Executive Sedan",
    car_description: "European executive sedan with premium features",
    company: "Skoda",
    name: "Octavia",
    model: "Octavia L&K",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 3200,
    title: "Skoda Octavia Premium",
    description: "Executive sedan with Czech craftsmanship and premium interiors.",
    location: "Nungambakkam",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA29EF5678",
    car_title: "Honda Accord - Business Sedan",
    car_description: "Premium business class sedan",
    company: "Honda",
    name: "Accord",
    model: "Accord Hybrid",
    year_made: 2023,
    fuel_type: "hybrid",
    seats: 5,
    transmition: "automatic",
    price: 4200,
    title: "Honda Accord Hybrid",
    description: "Business class hybrid sedan with exceptional comfort and technology.",
    location: "Yelahanka",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  
  // More SUVs
  {
    registeration_number: "MH30GH9012",
    car_title: "Nissan Magnite - Compact SUV",
    car_description: "Feature-loaded compact SUV at great price",
    company: "Nissan",
    name: "Magnite",
    model: "Magnite XV",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1600,
    title: "Nissan Magnite Value SUV",
    description: "Compact SUV with big car features at an affordable price point.",
    location: "Navi Mumbai",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL31IJ3456",
    car_title: "Renault Kiger - Stylish SUV",
    car_description: "Stylish and sporty compact SUV",
    company: "Renault",
    name: "Kiger",
    model: "Kiger RXZ",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1650,
    title: "Renault Kiger Sporty SUV",
    description: "Sporty compact SUV with turbo engine and modern styling.",
    location: "Janakpuri",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN32KL7890",
    car_title: "Hyundai Venue - Smart SUV",
    car_description: "India's first connected compact SUV",
    company: "Hyundai",
    name: "Venue",
    model: "Venue SX",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1900,
    title: "Hyundai Venue Connected SUV",
    description: "Smart compact SUV with connected car technology and Bluelink features.",
    location: "Guindy",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA33MN1234",
    car_title: "Maruti Brezza - Popular SUV",
    car_description: "India's best-selling compact SUV",
    company: "Maruti Suzuki",
    name: "Brezza",
    model: "Brezza ZXI+",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1850,
    title: "Maruti Brezza Best-Seller",
    description: "Best-selling compact SUV with head-up display and 360-degree camera.",
    location: "Rajajinagar",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH34OP5678",
    car_title: "Toyota Fortuner - Luxury SUV",
    car_description: "Premium 7-seater luxury SUV",
    company: "Toyota",
    name: "Fortuner",
    model: "Fortuner Legender",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 7,
    transmition: "automatic",
    price: 4500,
    title: "Toyota Fortuner Legender",
    description: "Premium luxury SUV with commanding road presence and 4x4 capability.",
    location: "Juhu",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL35QR9012",
    car_title: "Ford Endeavour - American SUV",
    car_description: "Powerful American 7-seater SUV",
    company: "Ford",
    name: "Endeavour",
    model: "Endeavour Titanium",
    year_made: 2022,
    fuel_type: "diesel",
    seats: 7,
    transmition: "automatic",
    price: 4200,
    title: "Ford Endeavour Power SUV",
    description: "Powerful American SUV with 4x4, ideal for long highway drives.",
    location: "Saket",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN36ST3456",
    car_title: "Tata Safari - Flagship SUV",
    car_description: "Premium 7-seater SUV with Land Rover DNA",
    company: "Tata",
    name: "Safari",
    model: "Safari XZ+",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 7,
    transmition: "automatic",
    price: 3400,
    title: "Tata Safari Premium 7-Seater",
    description: "Premium SUV with Land Rover derived platform and luxurious interiors.",
    location: "Kilpauk",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  },
  
  // More Diverse Cars
  {
    registeration_number: "KA37UV7890",
    car_title: "Citroen C3 - French Hatchback",
    car_description: "Quirky French hatchback with unique styling",
    company: "Citroen",
    name: "C3",
    model: "C3 Shine",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1350,
    title: "Citroen C3 French Style",
    description: "Unique French hatchback with quirky design and comfortable ride.",
    location: "Banashankari",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH38WX1234",
    car_title: "Fiat Punto - Italian Hatchback",
    car_description: "Solid Italian build hatchback",
    company: "Fiat",
    name: "Punto",
    model: "Punto Evo",
    year_made: 2021,
    fuel_type: "diesel",
    seats: 5,
    transmition: "manual",
    price: 1100,
    title: "Fiat Punto Italian Build",
    description: "Italian hatchback with solid build quality and punchy diesel engine.",
    location: "Goregaon",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL39YZ5678",
    car_title: "Datsun Go Plus - Budget MPV",
    car_description: "Affordable 7-seater for families",
    company: "Datsun",
    name: "Go Plus",
    model: "Go Plus T",
    year_made: 2021,
    fuel_type: "petrol",
    seats: 7,
    transmition: "manual",
    price: 1000,
    title: "Datsun Go Plus Budget 7-Seater",
    description: "Most affordable 7-seater option for budget-conscious families.",
    location: "Pitampura",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN40AB9012",
    car_title: "Renault Triber - Modular MPV",
    car_description: "Unique modular seating 7-seater",
    company: "Renault",
    name: "Triber",
    model: "Triber RXZ",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 7,
    transmition: "manual",
    price: 1300,
    title: "Renault Triber Modular Seating",
    description: "Innovative MPV with modular seating arrangement and flexible configurations.",
    location: "Mylapore",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA41CD3456",
    car_title: "Mahindra Bolero - Rugged UV",
    car_description: "India's favorite rugged utility vehicle",
    company: "Mahindra",
    name: "Bolero",
    model: "Bolero Power+",
    year_made: 2022,
    fuel_type: "diesel",
    seats: 7,
    transmition: "manual",
    price: 1800,
    title: "Mahindra Bolero Rugged",
    description: "Legendary rugged utility vehicle perfect for tough Indian conditions.",
    location: "BTM Layout",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH42EF7890",
    car_title: "Mahindra TUV300 - Compact SUV",
    car_description: "Battle-tank inspired compact SUV",
    company: "Mahindra",
    name: "TUV300",
    model: "TUV300 T8",
    year_made: 2021,
    fuel_type: "diesel",
    seats: 7,
    transmition: "manual",
    price: 1650,
    title: "Mahindra TUV300 Tank Design",
    description: "Rugged compact SUV with battle-tank inspired design and 7-seater option.",
    location: "Kalyan",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL43GH1234",
    car_title: "Volkswagen Tiguan - German SUV",
    car_description: "Premium German SUV with refined interiors",
    company: "Volkswagen",
    name: "Tiguan",
    model: "Tiguan Highline",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 3900,
    title: "Volkswagen Tiguan Premium",
    description: "Premium German SUV with refined interiors and advanced technology.",
    location: "Greater Kailash",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN44IJ5678",
    car_title: "Skoda Kushaq - European SUV",
    car_description: "European SUV with premium features",
    company: "Skoda",
    name: "Kushaq",
    model: "Kushaq Style",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 2600,
    title: "Skoda Kushaq European SUV",
    description: "European SUV with Czech craftsmanship and modern features.",
    location: "Ashok Nagar",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA45KL9012",
    car_title: "MG Astor - AI-powered SUV",
    car_description: "SUV with personal AI assistant",
    company: "MG",
    name: "Astor",
    model: "Astor Savvy",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 2700,
    title: "MG Astor AI Assistant",
    description: "Smart SUV with personal AI assistant and autonomous level-2 features.",
    location: "Sarjapur Road",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH46MN3456",
    car_title: "Hyundai Alcazar - Grand SUV",
    car_description: "Grand 7-seater SUV with premium features",
    company: "Hyundai",
    name: "Alcazar",
    model: "Alcazar Platinum",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 7,
    transmition: "automatic",
    price: 3100,
    title: "Hyundai Alcazar Grand 7-Seater",
    description: "Grand SUV with 7-seater luxury and premium features for families.",
    location: "Mulund",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL47OP7890",
    car_title: "Citroen C5 Aircross - French SUV",
    car_description: "Premium French SUV with unique comfort",
    company: "Citroen",
    name: "C5 Aircross",
    model: "C5 Shine",
    year_made: 2023,
    fuel_type: "diesel",
    seats: 5,
    transmition: "automatic",
    price: 3300,
    title: "Citroen C5 Aircross Comfort",
    description: "Premium French SUV with Progressive Hydraulic Cushions for cloud-like comfort.",
    location: "Nehru Place",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80"
    ]
  },
  {
    registeration_number: "TN48QR1234",
    car_title: "Honda WR-V - Crossover",
    car_description: "Stylish crossover with SUV stance",
    company: "Honda",
    name: "WR-V",
    model: "WR-V VX",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1550,
    title: "Honda WR-V Crossover",
    description: "Stylish crossover combining hatchback efficiency with SUV stance.",
    location: "Kodambakkam",
    district: "Chennai",
    image: [
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80"
    ]
  },
  {
    registeration_number: "KA49ST5678",
    car_title: "Toyota Glanza - Premium Hatchback",
    car_description: "Premium hatchback from Toyota",
    company: "Toyota",
    name: "Glanza",
    model: "Glanza V",
    year_made: 2023,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1500,
    title: "Toyota Glanza Premium",
    description: "Premium hatchback with Toyota's reliability and modern features.",
    location: "Marathahalli",
    district: "Bangalore",
    image: [
      "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=800&q=80",
      "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
    ]
  },
  {
    registeration_number: "MH50UV9012",
    car_title: "Toyota Urban Cruiser - Compact SUV",
    car_description: "Compact SUV with Toyota reliability",
    company: "Toyota",
    name: "Urban Cruiser",
    model: "Urban Cruiser Premium",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "automatic",
    price: 1950,
    title: "Toyota Urban Cruiser SUV",
    description: "Compact SUV backed by Toyota's legendary reliability and service network.",
    location: "Andheri East",
    district: "Mumbai",
    image: [
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&q=80",
      "https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?w=800&q=80"
    ]
  },
  {
    registeration_number: "DL51WX3456",
    car_title: "Nissan Kicks - Feature-loaded SUV",
    car_description: "Feature-rich compact SUV",
    company: "Nissan",
    name: "Kicks",
    model: "Kicks XV Premium",
    year_made: 2022,
    fuel_type: "petrol",
    seats: 5,
    transmition: "manual",
    price: 1750,
    title: "Nissan Kicks Feature SUV",
    description: "Feature-loaded compact SUV with 360-degree camera and premium interiors.",
    location: "Punjabi Bagh",
    district: "Delhi",
    image: [
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80"
    ]
  }
];

// Connect and seed
async function seedDatabase() {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(process.env.mongo_uri);
    console.log("✅ MongoDB connected");

    // Clear existing vehicles (optional - remove this if you want to keep existing ones)
    // await Vehicle.deleteMany({});
    // console.log("Cleared existing vehicles");

    // Insert vehicles
    console.log("\nInserting vehicles...");
    for (const vehicle of vehicles) {
      try {
        const existingVehicle = await Vehicle.findOne({ registeration_number: vehicle.registeration_number });
        if (existingVehicle) {
          console.log(`⚠️  Vehicle ${vehicle.registeration_number} already exists, skipping...`);
        } else {
          await Vehicle.create(vehicle);
          console.log(`✅ Added: ${vehicle.car_title} (${vehicle.registeration_number})`);
        }
      } catch (err) {
        console.log(`❌ Error adding ${vehicle.registeration_number}: ${err.message}`);
      }
    }

    console.log("\n🎉 Seeding completed!");
    console.log(`Total vehicles in database: ${await Vehicle.countDocuments()}`);
    
    process.exit(0);
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

seedDatabase();

