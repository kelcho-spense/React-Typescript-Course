import { BadgeInfo, Contact, House, Settings, X } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
    // State to track the visibility of the side drawer
    const [isDrawerOpen, setDrawerOpen] = useState(false);

    // Function to toggle the drawer
    const toggleDrawer = () => {
        setDrawerOpen(!isDrawerOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="text-2xl font-bold text-blue-600">Tailwind layouts</div>
                <ul className="hidden md:flex space-x-6">
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <House />
                        Home
                    </li>
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <BadgeInfo />
                        About
                    </li>
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <Settings />
                        Services
                    </li>
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <Contact />
                        Contact
                    </li>
                </ul>
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleDrawer}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Side Drawer */}
            <div className={`fixed inset-y-0 left-0 min-w-fit  w-d-space bg-white shadow-lg transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="flex justify-between items-center p-4 bg-gray-100">
                    <div className="text-xl font-bold text-blue-600">Tailwind layouts</div>
                    <button onClick={toggleDrawer} className="text-gray-700 focus:outline-none">
                    <X /> 
                    </button>
                </div>
                <ul className="p-4 space-y-6">
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <House />
                        Home
                    </li>
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <BadgeInfo />
                        About
                    </li>
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <Settings />
                        Services
                    </li>
                    <li className="text-gray-700 hover:text-blue-600 flex gap-1">
                        <Contact />
                        Contact
                    </li>
                </ul>
            </div>

            {/* Overlay for side drawer when open */}
            {isDrawerOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 md:hidden -z-10"
                    onClick={toggleDrawer}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
