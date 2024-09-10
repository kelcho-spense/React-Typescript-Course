import React from "react";

const ThreeColumnGrid = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 py-12 bg-slate-200">
      {/* Card 1 */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Responsive Card 1</h3>
        <p className="text-gray-700">
          This is a card with content that will adjust based on screen size.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Responsive Card 2</h3>
        <p className="text-gray-700">
          This is a card with content that will adjust based on screen size.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Responsive Card 3</h3>
        <p className="text-gray-700">
          This is a card with content that will adjust based on screen size.
        </p>
      </div>
    </section>
  );
};

export default ThreeColumnGrid;