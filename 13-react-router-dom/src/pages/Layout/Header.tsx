import { BadgeInfo, Contact, House, LayoutDashboard, Menu, Settings, X } from "lucide-react";
import { useState } from "react";
import NavItem from "../../components/NavItem";

export default function Header() {
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
                    <NavItem to="/" icon={<House />} label="Home" />
                    <NavItem to="/about" icon={<BadgeInfo />} label="About" />
                    <NavItem to="/services" icon={<Settings />} label="Services" />
                    <NavItem to="/contact" icon={<Contact />} label="Contact" />
                    <NavItem to="/dashboard" icon={<LayoutDashboard />} label="Dashboard" />
                </ul>
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={toggleDrawer}
                >  <Menu />
                </button>
            </div>

            {/* Side Drawer */}
            <div className={` fixed inset-y-0 left-0 min-w-fit  w-d-space bg-white shadow-lg transform ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out md:hidden`}
            >
                <div className="flex justify-between items-center p-4 gap-2 bg-gray-100">
                    <div className="text-xl font-bold text-blue-600">Tailwind layouts</div>
                    <button onClick={toggleDrawer} className="text-gray-700 focus:outline-none">
                        <X />
                    </button>
                </div>
                <ul className="p-4 space-y-6">
                    <NavItem to="/" icon={<House />} label="Home" />
                    <NavItem to="/about" icon={<BadgeInfo />} label="About" />
                    <NavItem to="/services" icon={<Settings />} label="Services" />
                    <NavItem to="/contact" icon={<Contact />} label="Contact" />
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
}
