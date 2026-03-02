import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/logo.webp";
import toast from "react-hot-toast";
import { FaBars, FaTimes } from "react-icons/fa";

function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("admin");
    toast.success("Logged out successfully");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">

      {/* ========== Sidebar ========== */}
      <div
        className={`fixed md:static top-0 left-0 h-full w-64 bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 z-50`}
      >
        <div className="flex justify-between items-center p-5 border-b md:hidden">
          <h2 className="text-lg font-bold">Admin Panel</h2>
          <FaTimes
            className="cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <div className="flex flex-col items-center p-6">
          <img
            src={logo}
            alt="Admin"
            className="rounded-full h-20 w-20 object-cover"
          />
          <h2 className="text-lg font-semibold mt-4">Admin</h2>
        </div>

        <nav className="flex flex-col px-6 space-y-4">
          <Link to="/admin/our-courses">
            <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
              Our Courses
            </button>
          </Link>

          <Link to="/admin/create-course">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">
              Create Course
            </button>
          </Link>

          <Link to="/">
            <button className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-lg transition">
              Home
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg transition"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* ========== Main Content ========== */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar (Mobile) */}
        <div className="md:hidden flex items-center justify-between bg-white shadow px-6 py-4">
          <FaBars
            className="text-xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <h1 className="text-lg font-bold">Dashboard</h1>
        </div>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="bg-white shadow-lg rounded-xl p-10 text-center max-w-md w-full">
            <h1 className="text-3xl font-bold mb-4">
              Welcome Admin 👋
            </h1>
            <p className="text-gray-600">
              Manage your courses, create new content, and control your platform from here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
