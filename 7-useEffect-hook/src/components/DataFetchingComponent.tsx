import React, { useState, useEffect } from 'react';

interface Data {
    id: number;
    title: string;
}

const DataFetchingComponent: React.FC = () => {
    const [data, setData] = useState<Data[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const result = await response.json();
                setData(result);
            } catch (error: unknown) {
                setError('Failed to fetch data' + error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []); // Empty dependency array means this effect runs only once, on mount

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <ul style={{ paddingLeft: 0, listStyleType: 'none' }}>
            {data.map(item => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul>
    );
};

export default DataFetchingComponent;