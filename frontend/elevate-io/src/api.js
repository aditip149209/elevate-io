const API_BASE_URL = "http://localhost:5000"; // Backend URL

export const fetchData = async () => {
  const response = await fetch(`${API_BASE_URL}/`);
  return response.text();
};
