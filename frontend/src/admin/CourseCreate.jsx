// import React, { useState } from 'react'
// import { Navigate } from 'react-router-dom';
// import axios from "axios";
// import toast from "react-hot-toast";
// import { BACKEND_URL } from '../utils/utils';

// function CourseCreate() {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState("");
//   const [imagePreview, setImagePreview] = useState("");
  

//   const changePhotoHandler = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => {
//       setImagePreview(reader.result);
//       setImage(file);
//     };
//   };
//   const handleCreateCourse = async (e) => {
//      e.preventDefault();
//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     formData.append("price", price);
//     formData.append("image", image);

//     const token = localStorage.getItem("admin");
//     if (!token) {
//       Navigate("/admin/login");
//       return;
//     }
//      try {
//       const response = await axios.post(
//         `${ BACKEND_URL }/course/create`,
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           withCredentials: true,
//         }
//       );
//       console.log(response.data);
//       toast.success(response.data.message || "Course created successfully");
//       Navigate("/admin/our-courses");
//       setTitle("");
//       setPrice("");
//       setImage("");
//       setDescription("");
//       setImagePreview("");
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response.data.errors);
//     }

//   }
//   return (
//     <div>
//       <div className="min-h-screen  py-10">
//         <div className="max-w-4xl mx-auto p-6 border  rounded-lg shadow-lg">
//           <h3 className="text-2xl font-semibold mb-8">Create Course</h3>

//           <form onSubmit={handleCreateCourse} className="space-y-6">
//             <div className="space-y-2">
//               <label className="block text-lg">Title</label>
//               <input
//                 type="text"
//                 placeholder="Enter your course title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-400   rounded-md outline-none"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-lg">Description</label>
//               <input
//                 type="text"
//                 placeholder="Enter your course description"
//                 value={description}
//                 onChange={(e) => setDescription(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-400   rounded-md outline-none"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-lg">Price</label>
//               <input
//                 type="number"
//                 placeholder="Enter your course price"
//                 value={price}
//                 onChange={(e) => setPrice(e.target.value)}
//                 className="w-full px-3 py-2 border border-gray-400   rounded-md outline-none"
//               />
//             </div>

//             <div className="space-y-2">
//               <label className="block text-lg">Course Image</label>
//               <div className="flex items-center justify-center">
//                 <img
//                   src={imagePreview ? `${imagePreview}` : "/imgPL.webp"}
//                   alt="Image"
//                   className="w-full max-w-sm h-auto rounded-md object-cover"
//                 />
//               </div>
//               <input
//                 type="file"
//                 onChange={changePhotoHandler}
//                 className="w-full px-3 py-2 border border-gray-400   rounded-md outline-none"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors duration-200"
//             >
//               Create Course
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default CourseCreate















import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

import { FaArrowLeft } from "react-icons/fa";

function CourseCreate() {
  const navigate = useNavigate();
const BACKEND_URL = import.meta.env.VITE_BACKEND_URI;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  /* ================= Redirect If Not Logged In ================= */
  useEffect(() => {
    const token = localStorage.getItem("admin");
    if (!token) {
      toast.error("Please login to admin");
      navigate("/admin/login");
    }
  }, [navigate]);

  /* ================= Image Preview ================= */
  const changePhotoHandler = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImagePreview(reader.result);
      setImage(file);
    };
  };

  /* ================= Create Course ================= */
  const handleCreateCourse = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("admin");
    if (!token) {
      navigate("/admin/login");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `${BACKEND_URL}/course/create`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      toast.success(response.data.message || "Course created successfully");

      // Reset form
      setTitle("");
      setPrice("");
      setImage(null);
      setDescription("");
      setImagePreview("");

      navigate("/admin/our-courses");
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.errors || "Failed to create course"
      );
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">

      {/* 🔙 Back Button */}
      <button
        onClick={() => navigate("/admin/dashboard")}
        className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition mb-6"
      >
        <FaArrowLeft />
        Back to Dashboard
      </button>

      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-xl shadow-lg">
        <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
          Create Course
        </h3>

        <form onSubmit={handleCreateCourse} className="space-y-6">

          {/* Title */}
          <div>
            <label className="block text-lg mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter your course title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg mb-2">Description</label>
            <textarea
              rows="4"
              placeholder="Enter your course description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none resize-none"
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-lg mb-2">Price</label>
            <input
              type="number"
              placeholder="Enter your course price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-lg mb-4">Course Image</label>

            <div className="flex justify-center mb-4">
              <img
                src={imagePreview || "/imgPL.webp"}
                alt="Preview"
                className="w-full max-w-sm h-48 object-cover rounded-lg border"
              />
            </div>

            <input
              type="file"
              accept="image/*"
              onChange={changePhotoHandler}
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition"
          >
            Create Course
          </button>
        </form>
      </div>
    </div>
  );
}

export default CourseCreate;