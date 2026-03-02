// import React, { useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from "../utils/utils";

// function AdminSignup() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");
//   try {
//   const response = await axios.post(
//     `${ BACKEND_URL }/admin/signup`,
//     {
//       firstName,
//       lastName,
//       email,
//       password,
//     },
//     {
//       withCredentials: true,
//       headers: { "Content-Type": "application/json" },
//     }
//   );
//   console.log("Signup successful:", response.data);
//   toast.success("Signup successful!");
//   navigate("/admin/login");

// } catch (error) {
//   console.error("Signup error response:", error.response?.data);
//   setErrorMessage(
//     error.response?.data?.error ||
//     error.response?.data?.errors?.[0]?.message ||
//     "Signup failed"
//   );
// }}
//   return (
//     <div className="bg-linear-to-r from-black to-blue-950 min-h-screen text-white">
//       {/* HEADER */}
//       <header className="container mx-auto px-6 py-6 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
//           <h1 className="text-2xl font-bold text-orange-500">LearnBase</h1>
//         </div>
//         <div className="space-x-4">
//           <Link to="/admin/login" className="border px-4 py-2 rounded">
//             Login
//           </Link>
//           <Link to="/course" className="bg-amber-500 border px-4 py-2 rounded">
//             Join now
//           </Link>
//         </div>
//       </header>

//       {/* Signup Form */}
//       <div className="flex justify-center">
//         <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full mt-20">
//           <h2 className="text-2xl font-bold mb-4 text-center">
//             Welcome to <span className="text-orange-500">LearnBase</span>
//           </h2>

//           <p className="text-center text-gray-400 mb-6">
//             Just signup to mess with dashboard!
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="text-gray-400 mb-2">Firstname</label>
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 required
//                 className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="text-gray-400 mb-2">Lastname</label>
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 required
//                 className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="text-gray-400 mb-2">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-blue-500"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="text-gray-400 mb-2">Password</label>
//               <div className="relative">
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   placeholder="********"
//                   required
//                 />
//                 <span className="absolute right-3 top-3 text-gray-500 cursor-pointer">
//                   👁️
//                 </span>
//               </div>
//             </div>

//             {errorMessage && (
//               <div className="mb-4 text-red-600 text-center">
//                 {errorMessage}
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md"
//             >
//               Signup
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminSignup;


import React, { useState } from "react";
import logo from "../../public/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { FaHome } from "react-icons/fa";

function AdminSignup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URI;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/admin/signup`,
        {
          firstName,
          lastName,
          email,
          password,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success("Signup successful!");
      navigate("/admin/login");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error ||
          error.response?.data?.errors?.[0]?.message ||
          "Signup failed"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white">

      {/* ================= HEADER ================= */}
      <header className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
          <h1 className="text-xl sm:text-2xl font-bold text-orange-500">
            LearnBase
          </h1>
        </div>

        {/* Navigation Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-gray-700 px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            <FaHome />
            Home
          </Link>

          <Link
            to="/admin/login"
            className="text-center border px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Login
          </Link>

          <Link
            to="/course"
            className="text-center bg-amber-500 px-4 py-2 rounded hover:bg-amber-600 transition"
          >
            Join Now
          </Link>
        </div>
      </header>

      {/* ================= FORM SECTION ================= */}
      <div className="flex justify-center items-center px-4 sm:px-6 py-10">
        <div className="bg-gray-900 p-6 sm:p-8 rounded-xl shadow-xl w-full max-w-md">
          
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
            Welcome to <span className="text-orange-500">LearnBase</span>
          </h2>

          <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">
            Just signup to access the dashboard!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* First Name */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                First Name
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                Last Name
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-400 mb-1 text-sm">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-sm text-center">
                {errorMessage}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition py-3 rounded-md font-semibold"
            >
              Signup
            </button>
          </form>

          {/* Back to Home Button */}
          <Link
            to="/"
            className="block text-center mt-4 bg-gray-800 hover:bg-gray-700 transition py-2 rounded-md text-sm"
          >
            ← Back to Home
          </Link>

          {/* Footer Link */}
          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <Link
              to="/admin/login"
              className="text-orange-500 hover:underline"
            >
              Login here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default AdminSignup;