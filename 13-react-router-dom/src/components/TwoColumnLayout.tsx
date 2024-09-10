import React from "react";

const TwoColumnLayout = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 py-12">
      {/* Text Column */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-4xl font-bold text-gray-900">
          Stunning Two-Column Layout
        </h2>
        <p className="text-lg text-gray-600">
          This is a basic two-column layout using Tailwind's flex utilities.
          It's responsive, stacking vertically on smaller screens.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Learn More
        </a>
      </div>

      {/* Image Column */}
      <div className="mt-8 md:mt-0 md:w-1/2">
        <img
          src="https://via.placeholder.com/600x400"
          alt="Placeholder"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default TwoColumnLayout;