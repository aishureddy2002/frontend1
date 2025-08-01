import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/tasks";

export const getTasks = () => axios.get(API_BASE_URL);

export const createTask = (title) => axios.post(API_BASE_URL, { title });

export const updateTask = (id, completed) =>
    axios.put(`${API_BASE_URL}/${id}`, { completed });

export const deleteTask = (id) => axios.delete(`${API_BASE_URL}/${id}`);
