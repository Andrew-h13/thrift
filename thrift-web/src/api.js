import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api", // Django backend URL
});

export const fetchItems = async () => {
  const response = await api.get("/items/");
  return response.data;
};

export const createItem = async (item) => {
  const response = await api.post("/items/", item);
  return response.data;
};
