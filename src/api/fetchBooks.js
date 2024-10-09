export const apiKey = import.meta.env.VITE_LIBRARY_API_KEY;
export const userId = '100376024772822168767';

export const fetchBooks = async (query) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items;
  };
  