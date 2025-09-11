export async function fetcher(endpoint, options = {}) {
  const url = import.meta.env.VITE_URL + endpoint;
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
