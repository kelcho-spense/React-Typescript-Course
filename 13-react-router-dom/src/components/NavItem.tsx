import React from 'react';
import { NavLink  } from 'react-router-dom';
interface NavItemProps {
    to: string;
    icon: React.ReactNode;
    label: string;
  }
  
  const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => {
  return (
    <NavLink
    to={to}
    className={({ isActive, isPending }) =>
      isPending ? "text-gray-400" : isActive ? "text-blue-600 font-semibold" : "text-gray-700"
    }
  >
    <div className="flex items-center gap-2 space-x-2 p-2 rounded-md hover:bg-gray-100 transition-all">
      <span className="text-lg">{icon}</span>
      <span className="font-medium">{label}</span>
    </div>
  </NavLink>
  );
};

export default NavItem;
