import React from 'react';

interface GreetingProps {
  name: string;
  age: number;
  isMember: boolean;
}

const Greeting: React.FC<GreetingProps> = ({ name, age, isMember }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
      <p>Membership status: {isMember ? "Active" : "Inactive"}</p>
    </div>
  );
};

export default Greeting;



// We define a GreetingProps interface to specify the types of the name, age,
//  and isMember props.

// The Greeting component receives these props and uses them to display the name, age, 
// and membership status.