import React, { useState } from 'react';

interface User {
  name: string;
  age: number;
}

const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({ name: '', age: 0 });

  const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, name: e.target.value });
  };

  const updateAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, age: parseInt(e.target.value, 10) });
  };

  return (
    <div>
      <input type="text" value={user.name} onChange={updateName} placeholder="Name" />
      <input type="number" value={user.age} onChange={updateAge} placeholder="Age" />
      <p>User: {user.name}, Age: {user.age}</p>
    </div>
  );
};

export default UserForm;