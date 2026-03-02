// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import axios from "axios";
// import Slider from "react-slick";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from "../utils/utils";


// function Home() {
//   const [courses, setCourses] = useState([]);
//   const[isLoggedIn,setIsLoggedIn]= useState(false);

//   useEffect(()=>{
//     const token = localStorage.getItem("token");
//     if(token){
//     setIsLoggedIn(true)
//   }else{
//     setIsLoggedIn(false)
//   }
//   },[])


//   const handleLogout = () => {
//   localStorage.removeItem("token");   // ✅ remove JWT
//   setIsLoggedIn(false);               // ✅ update UI
//   toast.success("Logged out successfully");
// };
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get(
//           `${BACKEND_URL}/course/courses`,
//           { withCredentials: true }
//         );
//         setCourses(res.data.courses);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchCourses();
//   }, []);

//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 3 } },
//       { breakpoint: 768, settings: { slidesToShow: 2 } },
//       { breakpoint: 480, settings: { slidesToShow: 1 } },
//     ],
//   };

//   return (
//     <div className="bg-linear-to-r from-black to-blue-950 min-h-screen text-white">
//       {/* HEADER */}
//       <header className="container mx-auto px-6 py-6 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <img src={logo} className="w-10 h-10 rounded-full" />
//           <h1 className="text-2xl font-bold text-orange-500">LearnBase</h1>
//         </div>
//         <div className="space-x-4">
//         {isLoggedIn?(
//             // <button onClick={handleLogout}
//             // to={"/login"}
//             // className="bg-transparent text-white py-2 px-4 border border-white rounded">
//             //   Logout
//             // </button>
//             <button
//              onClick={handleLogout}
//               className="bg-transparent text-white py-2 px-4 border border-white rounded">
//                Logout
//             </button>

//         ): ( <>
//         <Link
//         to={"/login"}
//         className="bg-transparent text-white py-2 px-4 border border-white rounded">
//          Login
//         </Link>
//         <Link
//         to={"/signup"}
//         className="bg-transparent text-white py-2 px-4 border border-white rounded">
//           Signup
//         </Link>
//         </> )
//         }
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="text-center py-20">
//         <h1 className="text-4xl font-bold text-orange-500 mb-4">LearnBase</h1>
//         <p className="text-gray-400 mb-6">
//           Sharpen your skills with courses crafted by experts.
//         </p>
//         <div className="space-x-4 mt-8">
//           <Link to ={"/courses"} className="bg-green-500 text-white  px-6 py-3 rounded hover:bg-white duration-300 hover:text-black transition">
//             Explore Courses
//           </Link>
//           <Link to={"https://www.youtube.com/@ApnaCollegeOfficial"}
//           className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-green-500 duration-300 hover:text-white transition">
//             Course Videos
//           </Link>
//         </div>
//       </section>

//       {/* COURSES SLIDER */}
//       <section className="container mx-auto px-6 pb-20">
//         <Slider {...settings}>
//           {courses.map((course) => (
//             <div key={course._id} className="px-3">
//               <div className="bg-[#0f172a] rounded-xl p-6 text-center shadow-lg">
//                 <img
//                   src={course?.images?.[0]?.url || "/placeholder.jpg"}
//                   alt={course.title}
//                   className="h-32 mx-auto object-contain mb-4"
//                 />
//                 <h2 className="text-lg font-semibold mb-3">
//                   {course.title}
//                 </h2>
//                 <button className="bg-orange-500 text-white  px-4 py-2 rounded-full  hover:bg-blue-600 duration-300">
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       <hr className="border-gray-700" />

//       {/* FOOTER */}
//       <footer className="container mx-auto px-6 py-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
//           <div>
//             <div className="flex items-center gap-2 justify-center md:justify-start">
//               <img src={logo} className="w-10 h-10 rounded-full" />
//               <h2 className="text-xl font-bold text-orange-500">LearnBase</h2>
//             </div>
//             <p className="mt-4 mb-2">Follow us</p>
//             <div className="flex justify-center md:justify-start gap-4">
//               <FaFacebook className="text-xl hover:text-blue-500 cursor-pointer" />
//               <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
//               <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
//             </div>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-3">Connects</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>YouTube – Learn Coding</li>
//               <li>Telegram – Learn Coding</li>
//               <li>GitHub – Learn Coding</li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="font-semibold mb-3">© 2024 LearnBase</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>Refund & Cancellation</li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;





// import React, { useEffect, useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
// import axios from "axios";
// import Slider from "react-slick";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from "../utils/utils";

// function Home() {
//   const [courses, setCourses] = useState([]);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   // Check login
//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   // Logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     toast.success("Logged out successfully");
//   };

//   // Fetch courses
//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const res = await axios.get(
//           `${BACKEND_URL}/course/courses`,
//           { withCredentials: true }
//         );
//         setCourses(res.data.courses);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchCourses();
//   }, []);

//   // Slider settings
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: { slidesToShow: 3 },
//       },
//       {
//         breakpoint: 1024,
//         settings: { slidesToShow: 2 },
//       },
//       {
//         breakpoint: 640,
//         settings: { slidesToShow: 1 },
//       },
//     ],
//   };

//   return (
//     <div className="bg-gradient-to-r from-black to-blue-950 min-h-screen text-white">

//       {/* ================= HEADER ================= */}
//       <header className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
//         <div className="flex items-center gap-2">
//           <img src={logo} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" alt="logo" />
//           <h1 className="text-xl sm:text-2xl font-bold text-orange-500">
//             LearnBase
//           </h1>
//         </div>

//         <div className="flex flex-wrap justify-center gap-3">
//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-transparent text-white py-2 px-4 border border-white rounded text-sm sm:text-base"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <Link
//                 to="/login"
//                 className="bg-transparent text-white py-2 px-4 border border-white rounded text-sm sm:text-base"
//               >
//                 Login
//               </Link>
//               <Link
//                 to="/signup"
//                 className="bg-transparent text-white py-2 px-4 border border-white rounded text-sm sm:text-base"
//               >
//                 Signup
//               </Link>
//             </>
//           )}
//         </div>
//       </header>

//       {/* ================= HERO ================= */}
//       <section className="text-center px-4 py-16 sm:py-20">
//         <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-500 mb-4">
//           LearnBase
//         </h1>

//         <p className="text-gray-400 mb-6 text-sm sm:text-base md:text-lg max-w-xl mx-auto">
//           Sharpen your skills with courses crafted by experts.
//         </p>

//         <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
//           <Link
//             to="/courses"
//             className="bg-green-500 text-white px-6 py-3 rounded hover:bg-white duration-300 hover:text-black transition"
//           >
//             Explore Courses
//           </Link>

//           <Link
//             to="https://www.youtube.com/@ApnaCollegeOfficial"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-white text-black px-6 py-3 rounded font-semibold hover:bg-green-500 duration-300 hover:text-white transition"
//           >
//             Course Videos
//           </Link>
//         </div>
//       </section>

//       {/* ================= COURSES SLIDER ================= */}
//       <section className="container mx-auto px-4 sm:px-6 pb-16">
//         <Slider {...settings}>
//           {courses.map((course) => (
//             <div key={course._id} className="px-2">
//               <div className="bg-[#0f172a] rounded-xl p-4 sm:p-6 text-center shadow-lg h-full">
//                 <img
//                   src={course?.images?.[0]?.url || "/placeholder.jpg"}
//                   alt={course.title}
//                   className="h-28 sm:h-32 mx-auto object-contain mb-4"
//                 />

//                 <h2 className="text-base sm:text-lg font-semibold mb-3">
//                   {course.title}
//                 </h2>

//                 <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 duration-300 text-sm sm:text-base">
//                   Enroll Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </section>

//       <hr className="border-gray-700" />

//       {/* ================= FOOTER ================= */}
//       <footer className="container mx-auto px-4 sm:px-6 py-10">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center md:text-left">

//           {/* Column 1 */}
//           <div>
//             <div className="flex items-center gap-2 justify-center md:justify-start">
//               <img src={logo} className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" alt="logo" />
//               <h2 className="text-lg sm:text-xl font-bold text-orange-500">
//                 LearnBase
//               </h2>
//             </div>

//             <p className="mt-4 mb-2 text-sm sm:text-base">Follow us</p>

//             <div className="flex justify-center md:justify-start gap-4">
//               <FaFacebook className="text-xl hover:text-blue-500 cursor-pointer" />
//               <FaInstagram className="text-xl hover:text-pink-500 cursor-pointer" />
//               <FaTwitter className="text-xl hover:text-blue-400 cursor-pointer" />
//             </div>
//           </div>

//           {/* Column 2 */}
//           <div>
//             <h3 className="font-semibold mb-3 text-sm sm:text-base">Connects</h3>
//             <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
//               <li>YouTube – Learn Coding</li>
//               <li>Telegram – Learn Coding</li>
//               <li>GitHub – Learn Coding</li>
//             </ul>
//           </div>

//           {/* Column 3 */}
//           <div>
//             <h3 className="font-semibold mb-3 text-sm sm:text-base">
//               © 2024 LearnBase
//             </h3>
//             <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
//               <li>Terms & Conditions</li>
//               <li>Privacy Policy</li>
//               <li>Refund & Cancellation</li>
//             </ul>
//           </div>

//         </div>
//       </footer>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import logo from "../../public/logo.webp";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import axios from "axios";
import Slider from "react-slick";
import toast from "react-hot-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URI;
/* ================= Custom Arrow ================= */
const Arrow = ({ onClick, direction }) => {
  
  return (
    <div
      onClick={onClick}
      className={`hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2
      ${direction === "left" ? "-left-6" : "-right-6"}
      w-10 h-10 bg-orange-500 rounded-full cursor-pointer
      hover:bg-orange-600 transition duration-300 z-20 shadow-lg`}
    >
      {direction === "left" ? (
        <FaChevronLeft className="text-white" />
      ) : (
        <FaChevronRight className="text-white" />
      )}
    </div>
  );
};

function Home() {
  const [courses, setCourses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* ================= Check Login ================= */
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  /* ================= Logout ================= */
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    toast.success("Logged out successfully");
  };

  /* ================= Fetch Courses ================= */
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/course/courses`,
          { withCredentials: true }
        );
        setCourses(res.data.courses);
      } catch (err) {
        console.log(err);
      }
    };
    fetchCourses();
  }, []);

  /* ================= Slider Settings ================= */
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <Arrow direction="right" />,
    prevArrow: <Arrow direction="left" />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-black to-blue-950 min-h-screen text-white">

      {/* ================= HEADER ================= */}
      <header className="container mx-auto px-4 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8 h-8 rounded-full" alt="logo" />
          <h1 className="text-2xl font-bold text-orange-500">LearnBase</h1>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-wrap justify-center gap-3 text-sm">

          {/* User Section */}
          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black transition"
              >
                Signup
              </Link>
            </>
          )}

          {/* Divider */}
          <div className="hidden sm:block border-l border-gray-600 mx-2"></div>

          {/* Admin Section */}
          <Link
            to="/admin/login"
            className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 transition"
          >
            Admin Login
          </Link>

          <Link
            to="/admin/signup"
            className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Admin Signup
          </Link>

        </div>
      </header>

      {/* ================= HERO ================= */}
      <section className="text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-orange-500 mb-4">
          LearnBase
        </h1>

        <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm md:text-base">
          Sharpen your skills with courses crafted by experts.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/courses"
            className="bg-green-500 px-6 py-3 rounded hover:scale-105 transition duration-300"
          >
            Explore Courses
          </Link>

          <Link
            to="https://www.youtube.com/@ApnaCollegeOfficial"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded hover:scale-105 transition duration-300"
          >
            Course Videos
          </Link>
        </div>
      </section>

      {/* ================= COURSES SLIDER ================= */}
      <section className="container mx-auto px-4 pb-20 relative">
        <Slider {...settings}>
          {courses.map((course) => (
            <div key={course._id} className="px-3">
              <div className="bg-[#111827] rounded-2xl p-6 text-center
                              shadow-lg hover:shadow-2xl
                              transition duration-300
                              h-[380px] flex flex-col justify-between">

                <div className="h-40 flex items-center justify-center">
                  <img
                    src={course?.images?.[0]?.url || "/placeholder.jpg"}
                    alt={course.title}
                    className="max-h-full object-contain"
                  />
                </div>

                <h2 className="text-lg font-semibold mt-4">
                  {course.title}
                </h2>

                <button className="bg-orange-500 px-6 py-2 rounded-full
                                   hover:bg-orange-600 transition duration-300 mt-4">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      <hr className="border-gray-700" />

      {/* ================= FOOTER ================= */}
      <footer className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

          <div>
            <div className="flex items-center gap-2 justify-center md:justify-start">
              <img src={logo} className="w-8 h-8 rounded-full" alt="logo" />
              <h2 className="text-xl font-bold text-orange-500">LearnBase</h2>
            </div>
            <p className="mt-4">Follow us</p>
            <div className="flex justify-center md:justify-start gap-4 mt-2">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <ul className="text-gray-400 space-y-2">
              <li>YouTube – Learn Coding</li>
              <li>Telegram – Learn Coding</li>
              <li>GitHub – Learn Coding</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">© 2024 LearnBase</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Refund & Cancellation</li>
            </ul>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default Home;