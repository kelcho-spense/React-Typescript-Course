import { useState } from 'react';

import { BadgeInfo, Expand, EyeOff, House, LayoutDashboard, Settings } from 'lucide-react';
import SideNavItem from '../SideNavItem';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col ${isOpen ? 'w-64' : 'w-20'} bg-gray-700 h-screen transition-all duration-300`}
    >
      {/* Button to toggle menu */}     
      <button
        onClick={toggleMenu}
        className="text-white p-2 focus:outline-none self-end"
      >
        { isOpen ? <EyeOff size={24}/> : <Expand size={24} />}
      </button>

      {/* Navigation items */}
      <div className="flex flex-col mt-5 space-y-2">
        <SideNavItem to="" icon={<House />} label="Home" isOpen={isOpen} />
        <SideNavItem to="item-1" icon={<BadgeInfo />} label="About" isOpen={isOpen} />
        <SideNavItem to="item-2" icon={<Settings />} label="Services" isOpen={isOpen} />
        <SideNavItem to="item-3" icon={<LayoutDashboard />} label="Dashboard" isOpen={isOpen} />
      </div>
    </div>
  );
};

export default SideMenu;
