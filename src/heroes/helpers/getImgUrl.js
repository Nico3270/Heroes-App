export const fetchData = async (busqueda) => {
    const apiKey = "w3hNrXX9EszXHyLrnJBRc6qRuB0va26F";
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${busqueda}&limit=1&offset=0&rating=g&lang=en`;
    try {
      const response = await axios.get(url);
      return response.data.data[0].images.original.url;
    } catch (error) {
      console.error(error);
    }
  }
