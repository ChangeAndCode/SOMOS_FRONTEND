import { useAuth } from "../context/AuthContext";

export async function fetcher(endpoint, options = {}) {

    const host = 'luckysw.xyz'
    //const host = "miniature-disco-wgwg9p6wj9q2vgwr-3000.app.github.dev"   
    //const host = 'localhost:3000'
    const url = "https://" + host + "/" + endpoint

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
        })

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
