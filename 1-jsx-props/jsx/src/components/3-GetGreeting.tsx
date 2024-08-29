import React from 'react';

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning!";
  if (hour < 18) return "Good Afternoon!";
  return "Good Evening!";
};

const GreetingComponent: React.FC = () => {
  return <h1>{getGreeting()}</h1>;
};

export default GreetingComponent;

// The getGreeting function determines the current greeting based on the time of day.
// This function is called within the JSX using curly braces.