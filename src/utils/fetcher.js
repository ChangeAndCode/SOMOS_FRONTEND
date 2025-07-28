import { useAuth } from "../context/AuthContext";

export async function fetcher(endpoint, options = {}) {
    const host = "localhost"
    const port = "3000"
    const url = "http://" + host + ":" + port + "/" + endpoint

    try {
        const defaultHeaders = {
            'Content-Type': 'application/json',
            // Agrega Authorization si usas JWT
            ...(options.auth && {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }),
        };
        const response = await fetch(url, {
            ...options,
            headers: {
                ...defaultHeaders,
                ...(options.headers || {}),
            },
        });

        const data = await response.json();
        if (!response.ok) {
            const message = data?.message || 'Error desconocido';
            throw new Error(message);
        }

        return data;
    } catch (error) {
        console.error('[fetcher error]', error.message);
        throw error;
    }
}
