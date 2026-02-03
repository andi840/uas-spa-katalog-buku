import axios from "axios";

const API_URL = "https://698164f0c9a606f5d446b4c4.mockapi.io/books";

export const getBooks = () => axios.get(API_URL);
export const addBook = (data) => axios.post(API_URL, data);
export const updateBook = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteBook = (id) => axios.delete(`${API_URL}/${id}`);