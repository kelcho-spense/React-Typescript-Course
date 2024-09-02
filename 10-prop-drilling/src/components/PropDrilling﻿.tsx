import React from 'react';

const GreatGrandchild: React.FC<{ user: string }> = ({ user }) => {
    return <p>User: {user}</p>;
};

const Grandchild: React.FC<{ user: string }> = ({ user }) => {
    return <GreatGrandchild user={user} />;
};

const Child: React.FC<{ user: string }> = ({ user }) => {
    return <Grandchild user={user} />;
};

const Parent: React.FC = () => {
    const user = 'John Doe';
    return <Child user={user} />;
};

export default Parent;

// Issues:
// 1. Intermediary Components: Child and Grandchild components are only passing the
//  user prop down to the next component without using it, which increases the code's complexity.
// 2. Difficulty in Refactoring: If you need to change how user is passed or used, you may need
//  to update multiple components, increasing the chance of errors.