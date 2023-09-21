const baseUrl =
  `${import.meta.env.VITE_PANTHEON_ENVIRONMENT_URL}/api` ||
  "http://localhost:8000/api";

// fetch data helper
const fetchData = async (url: string, controller: AbortController) => {
  try {
    const res = await fetch(url, {
      signal: controller?.signal || null,
    });
    if (res?.ok) {
      return await res.json();
    }
  } catch (error) {
    console.error(error);
  }
};

export const API = {
  articles: async (controller: AbortController) => {
    return fetchData(`${baseUrl}/articles`, controller);
  },
};
