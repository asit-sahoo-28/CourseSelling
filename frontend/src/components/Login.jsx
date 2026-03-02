// import React, { useState } from "react";
// import logo from "../../public/logo.webp";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from "../utils/utils";


// function Login() {
  
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState("");

//   const navigate=useNavigate()

//   const handleSubmit = async (e) => {
//   e.preventDefault();
//   setErrorMessage("");

//   try {
//     const response = await axios.post(
//       `${BACKEND_URL}/user/login`,
//       {
    
//         email: email.trim().toLowerCase(),
//         password: password.trim(),
//       },
//       {
//         withCredentials: true,
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     console.log("Login successful:", response.data);
//     toast.success(response.data.message);
//     localStorage.setItem("token", response.data.token);

//     navigate("/")
//   } catch (error) {
//     if(error.response){
//       setErrorMessage(error.response.data.error ||  "Login failed!!" )

//     }
//   }
// };

//   return (
//     <div className="bg-linear-to-r from-black to-blue-950 min-h-screen text-white">
//       {/* HEADER */}
//       <header className="container mx-auto px-6 py-6 flex items-center justify-between">
//         <div className="flex items-center gap-2">
//           <img src={logo} className="w-10 h-10 rounded-full" />
//           <h1 className="text-2xl font-bold text-orange-500">LearnBase</h1>
//         </div>
//         <div className="space-x-4">
//           <Link to="/signup" className="border px-4 py-2 rounded border-gray-500 bg-transparent">
//             Signup
//           </Link>
//           <Link to="/Course" className="bg-amber-500 border px-4 py-2 rounded">
//             Join Now
//           </Link>
//         </div>
//       </header>

//       {/* login Form */}
//       <div className="flex justify-center">
//         <div className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-md w-full mt-20">
//           <h2 className="text-2xl font-bold mb-4 text-center">
//             Welcome to <span className="text-orange-500">LearnBase</span>
//           </h2>

//           <p className="text-center text-gray-400 mb-6">
//             Log in to access paid content!
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
//             {errorMessage && (
//               <div className="mb-4 text-red-600 text-center">
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

// export default Login;




import React, { useState } from "react";
import logo from "../../public/logo.webp";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";


function Login() {
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
        `${BACKEND_URL}/user/login`,
        {
          email: email.trim().toLowerCase(),
          password: password.trim(),
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success(response.data.message);
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error || "Login failed!");
      } else {
        setErrorMessage("Server not responding!");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-950 text-white">
      
      {/* HEADER */}
      <header className="container mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
          <h1 className="text-xl sm:text-2xl font-bold text-orange-500">
            LearnBase
          </h1>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            to="/signup"
            className="border px-4 py-2 rounded border-gray-500 text-sm sm:text-base"
          >
            Signup
          </Link>
          <Link
            to="/course"
            className="bg-amber-500 px-4 py-2 rounded text-sm sm:text-base"
          >
            Join Now
          </Link>
        </div>
      </header>

      {/* LOGIN FORM */}
      <div className="flex justify-center items-center px-4">
        <div className="bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md mt-10 sm:mt-20">
          
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">
            Welcome to <span className="text-orange-500">LearnBase</span>
          </h2>

          <p className="text-center text-gray-400 mb-6 text-sm sm:text-base">
            Log in to access paid content!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email */}
            <div>
              <label className="text-gray-400 text-sm">Email</label>
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
              <label className="text-gray-400 text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <span
                  className="absolute right-3 top-3 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            {/* Error Message */}
            {errorMessage && (
              <div className="text-red-500 text-center text-sm">
                {errorMessage}
              </div>
            )}

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition duration-300 text-white py-3 rounded-md font-semibold"
            >
              Login
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Login;