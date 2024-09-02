import { useState, useEffect } from 'react';

interface FetchState<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

export default function useFetch<T>(url: string, options?: RequestInit) {
    const [state, setState] = useState<FetchState<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState({ data: null, loading: true, error: null });
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setState({ data: result, loading: false, error: null });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (error: any) {
                setState({ data: null, loading: false, error: error?.message });
            }
        };

        fetchData();
    }, [url, options]);

    return state;
}

// Custom Hook (useFetch): The hook manages the fetching process, including loading, error handling, and storing the fetched data.
// Generic Type <T>: The hook is generic, allowing it to work with any type of data structure that you fetch.
// Effect Dependency: The useEffect hook runs the fetch operation whenever the url or options change.





