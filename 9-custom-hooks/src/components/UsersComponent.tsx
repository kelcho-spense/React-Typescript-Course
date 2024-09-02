import React from "react";
import useFetch from '../hooks/useFetch'
interface User {
    id: number;
    name: string;
}
const UsersComponent: React.FC = () => {
    const { data, loading, error } = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');

  console.log({data})
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ol>
            {data?.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ol>
    );
};

export default UsersComponent;