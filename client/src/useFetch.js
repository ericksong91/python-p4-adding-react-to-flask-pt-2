import { useEffect, useState } from 'react';

export function useFetch(url) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        console.log("Firing...")
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error(response.statusText);
                const json = await response.json();
                setIsLoading(false);
                setData(json);
                setError(null);
            } catch (error) {
                setError(`${error} Could Not Fetch Data`);
                setIsLoading(false);
            };
        };
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { data, error, isLoading }
};

// export const fetchData = async (url) => {
//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error("error fetching data: ", error)
//         throw error;
//     }
// };