import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchProjects = () => API.get("/projects");

export const createProject = (newProject) =>
  API.post("/projects/createProject", newProject);
