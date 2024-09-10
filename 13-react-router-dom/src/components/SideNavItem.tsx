// src/components/NavItem.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

interface SideNavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  isOpen: boolean; // New prop to handle collapse state
}

const SideNavItem: React.FC<SideNavItemProps> = ({ to, icon, label, isOpen }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending ? 'text-gray-400 ' : isActive ? 'text-blue-600 font-semibold' : 'text-gray-300'
      }
    >
      <div
        className={`flex items-center p-2 rounded-md hover:bg-gray-700 transition-all ${isOpen ? 'gap-4' : 'justify-center'}`}
      >
        <span className="text-lg">{icon}</span>
        {/* Conditionally render the label based on isOpen */}
        {isOpen && <span className="font-medium">{label}</span>}
      </div>
    </NavLink>
  );
};

export default SideNavItem;
