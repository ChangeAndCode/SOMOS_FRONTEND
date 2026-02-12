export async function fetcher(endpoint, options = {}) {
  const baseUrl = import.meta.env.VITE_URL;
  if (!baseUrl) {
    throw new Error('VITE_URL no está configurado en .env');
  }
  // Asegura que baseUrl termine en / y endpoint no empiece con /
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
  const normalizedEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
  const url = normalizedBase + normalizedEndpoint;
  try {
    const isFormData = options.body instanceof FormData;
    const defaultHeaders = {
      ...(!isFormData && { "Content-Type": "application/json" }),
      ...(options.auth && {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      }),
    };

    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...(options.headers || {}),
      },
    });

    let data = {};
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const text = await response.text();
      if (text.trim()) {
        try {
          data = JSON.parse(text);
        } catch (_e) {
          data = { message: "Respuesta inválida del servidor" };
        }
      }
    }

    if (!response.ok) {
      const message = data?.message || "Error desconocido";
      throw new Error(message);
    }

    return data;
  } catch (error) {
    console.error("[fetcher error]", error.message);
    throw error;
  }
}
