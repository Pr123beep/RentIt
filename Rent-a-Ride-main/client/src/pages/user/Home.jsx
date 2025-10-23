import styles from "../../index";
import Herocar from "../../Assets/homepage_car_copy.jpeg";
import CarSearch from "./CarSearch";
import { HeroParallax } from "../../components/ui/Paralax";
import { useRef } from "react";

import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsSweetAlert } from "../../redux/user/userSlice";
import Footers from "../../components/Footer";


function Home() {
  const ref = useRef(null);
  const { isSweetAlert } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const sweetalert = () => {
    Swal.fire({
      
      show: true,
      title: "",
      text: "Vehicle Booked Successfully",
      icon: "success",
      showDenyButton: true,
      confirmButtonText: "Go to Home",
      confirmButtonColor:"#22c55e",
      denyButtonColor:'black',
      denyButtonText: `See Orders`,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
      else if(result.isDenied){
        navigate('/profile/orders')
      }
    })
    dispatch(setIsSweetAlert(false))
  };

  return (
    <>
      {isSweetAlert && sweetalert()}

      {/* This is div is the container for the dot background */}
      <div className="relative h-[100vh] w-full mx-auto sm:max-w-[900px] lg:max-w-[1500px] bg-white min-h-[72vh] md:min-h-[60vh] lg:min-h-[73vh]">
        <div
          className={`px-12 lg:px-28 absolute top-0   z-10 w-full   justify-between items-center flex flex-col  sm:flex-row mt-[50px] md:mt-[170px] gap-10`}
        >
          <div className="">
            <p className={`py-2 text-[9px] md:text-[12px] ${styles.paragraph}`}>
              Plan your trip now
            </p>
            <h1
              className={` md:${styles.heading2} font-extrabold text-[35px] leading-10 lg:font-bold  mb-6  lg:text-[58px] lg:mb-6`}
            >
              Save <span className="text-green-600">big</span> with our <br />
              car rental
            </h1>
            <p className={`${styles.paragraph} text-justify`}>
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
            <div className="mt-10 lg:mt-[40px] flex gap-4">
              <button
                onClick={() => {
                  ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-sm md:text-lg py-3 px-6 md:px-8 rounded-xl font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Book Ride
              </button>
              <button
                onClick={() => {
                  ref.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className="bg-gray-900 hover:bg-black text-white rounded-xl text-sm md:text-lg px-6 md:px-8 py-3 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
              >
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
          <div className="object-contain hidden sm:block">
            <img src={Herocar} alt="" />
          </div>
        </div>
        <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <div ref={ref}>
        <CarSearch />
      </div>

      {/* Features Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the best car rental service with unmatched benefits and features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-green-50 to-blue-50 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Best Prices</h3>
              <p className="text-gray-600">Competitive rates with no hidden charges. Get the best value for your money.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="bg-blue-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Safe & Secure</h3>
              <p className="text-gray-600">All our vehicles are regularly maintained and sanitized for your safety.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="bg-purple-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock customer support to assist you anytime, anywhere.</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl">
              <div className="bg-orange-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wide Selection</h3>
              <p className="text-gray-600">Choose from 50+ vehicles ranging from hatchbacks to luxury SUVs.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
              <div className="text-xl text-green-100">Vehicles</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">1000+</div>
              <div className="text-xl text-green-100">Happy Customers</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">4</div>
              <div className="text-xl text-green-100">Cities</div>
            </div>
            <div className="transform hover:scale-110 transition-transform">
              <div className="text-5xl md:text-6xl font-bold mb-2">24/7</div>
              <div className="text-xl text-green-100">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to rent your dream car</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="bg-gradient-to-r from-green-500 to-green-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  1
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Choose Your Car</h3>
              <p className="text-gray-600 text-lg">Browse our wide selection of vehicles and pick the perfect one for your journey.</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  2
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Book Online</h3>
              <p className="text-gray-600 text-lg">Select dates, add details, and complete your booking in just a few clicks.</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-xl">
                  3
                </div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 w-8 h-8 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hit the Road</h3>
              <p className="text-gray-600 text-lg">Pick up your car and enjoy the ride. Return it when you're done!</p>
            </div>
          </div>
        </div>
      </div>

      <HeroParallax />

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl md:text-2xl text-green-50 mb-10 max-w-3xl mx-auto">
            Join thousands of happy customers. Book your perfect ride today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => {
                ref.current?.scrollIntoView({ behavior: "smooth", block: "center" });
              }}
              className="bg-white text-green-600 hover:bg-green-50 font-bold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              Book Now
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-green-600 font-bold text-lg px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>
      </div>

      <Footers/>
    </>
  );
}

export default Home;
