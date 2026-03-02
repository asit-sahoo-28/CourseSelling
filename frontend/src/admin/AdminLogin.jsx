// import React, { useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from "../utils/utils";

// function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMessage("");

//     try {
//       const response = await axios.post(
//         `${ BACKEND_URL }/admin/login`,
//         {
//           email: email.trim().toLowerCase(),
//           password: password.trim(),
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       console.log("Admin login successful:", response.data);
//       navigate("/admin/dashboard");
//       toast.success(response.data.message || "Login successful!");
      
//       localStorage.setItem("admin", response.data.token);
//       navigate("/admin/dashboard");
//     } catch (error) {
//       if (error.response) {
//         setErrorMessage(error.response.data.error || "Admin login failed!");
//       } else {
//         setErrorMessage("Network error. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="bg-linear-to-r from-black to-blue-950 min-h-screen text-white">
//       {/* HEADER */}
//       <header className="container mx-auto px-6 py-6 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
//           <h1 className="text-2xl font-bold text-orange-500">LearnBase</h1>
//         </div>
//         <div className="space-x-4">
//           <Link
//             to="/admin/signup"
//             className="border px-4 py-2 rounded border-gray-500 bg-transparent"
//           >
//             Signup
//           </Link>
//           <Link
//             to="/course"
//             className="bg-amber-500 border px-4 py-2 rounded"
//           >
//             Join Now
//           </Link>
//         </div>
//       </header>

//       {/* Login Form */}
//       <div className="flex justify-center">
//         <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full mt-20">
//           <h2 className="text-2xl font-bold mb-4 text-center">
//             Welcome to <span className="text-orange-500">LearnBase</span>
//           </h2>

//           <p className="text-center text-gray-400 mb-6">
//             Log in to access the admin dashboard!
//           </p>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label className="text-gray-400 mb-2">Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="text-gray-400 mb-2">Password</label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                   className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
//                   placeholder="********"
//                 />
//                 <span
//                   className="absolute right-3 top-3 cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? "🙈" : "👁️"}
//                 </span>
//               </div>
//             </div>

//             {errorMessage && (
//               <div className="text-red-500 text-center mb-4">
//                 {errorMessage}
//               </div>
//             )}

//             <button
//               type="submit"
//               className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-md"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminLogin;


import React, { useState } from "react";
import logo from "../../public/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URI;
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post(
        `${BACKEND_URL}/admin/login`,
        {
          email: email.trim().toLowerCase(),
          password: password.trim(),
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      toast.success(response.data.message || "Login successful!");

      if (response.data.token) {
        localStorage.setItem("admin", response.data.token);
        navigate("/admin/dashboard");
      }

    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.errors || "Admin login failed!");
      } else {
        setErrorMessage("Network error. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white">
      
      <header className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
          <h1 className="text-2xl font-bold text-orange-500">LearnBase</h1>
        </div>

        <div className="flex gap-3">
          <Link
            to="/admin/signup"
            className="border border-gray-500 px-4 py-2 rounded hover:bg-gray-800"
          >
            Signup
          </Link>
        </div>
      </header>

      <div className="flex justify-center items-center py-16">
        <div className="bg-gray-900 p-8 rounded-xl shadow-xl w-full max-w-md">
          
          <h2 className="text-2xl font-bold text-center mb-6">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500"
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500"
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>

            {errorMessage && (
              <div className="text-red-500 text-sm text-center">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded-md font-semibold"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{" "}
            <Link to="/admin/signup" className="text-orange-500 hover:underline">
              Signup here
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default AdminLogin;