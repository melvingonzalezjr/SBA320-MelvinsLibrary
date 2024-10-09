export const fetchBooks = async (query) => {
    const apiKey = process.env.REACT_APP_LIBRARY_API_KEY;
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`
    );
    const data = await response.json();
    return data.items;
  };
  