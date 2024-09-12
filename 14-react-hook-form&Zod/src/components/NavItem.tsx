import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
  className?: string; // Allow additional classes to be passed as a prop
  disableHover?: boolean; // Prop to conditionally disable hover
}

const NavItem: React.FC<NavItemProps> = ({ to, icon, label, className, disableHover }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        clsx(
          className,  // Merge additional classes
          isPending ? "text-gray-400" : isActive ? "text-blue-600 font-semibold" : "text-gray-700"
        )
      }
    >
      <div
        className={clsx(
          "flex items-center gap-2 p-2 rounded-md transition-all", // Base classes
          !disableHover && "hover:bg-gray-100", // Apply hover only if disableHover is false
          className // Allow external customization
        )}
      >
        <span className="text-lg">{icon}</span>
        <span className="font-medium">{label}</span>
      </div>
    </NavLink>
  );
};

export default NavItem;
