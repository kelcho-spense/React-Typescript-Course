import { Outlet } from "react-router-dom";

const MainPanel = () => {
  return (  
      <div className="flex-grow bg-gray-100 p-8">
        <Outlet />
      </div>      
  );
};

export default MainPanel;
