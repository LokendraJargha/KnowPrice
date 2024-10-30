import { API } from "@/constant";

const fetchData = async (endpoint, query = null) => {
  const API_URL = new URL(endpoint, API);
  API_URL.search = query;
  try {
    const res = await fetch(API_URL.href, {
      method: "GET",
    });
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Error fetching data:", err);
    throw err;
  }
};

export default fetchData;
