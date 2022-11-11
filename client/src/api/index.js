import axios from "axios";

const API = axios.create({ baseURL: "https://personal-portfolio-u11k.onrender.com/" });

export const fetchProjects = () => API.get("/projects");

export const createProject = (newProject) =>
  API.post("/projects/createProject", newProject);

export const updateProject = (id, updatedProject) =>
  API.patch(`/projects/editProject/${id}`, updatedProject);

export const deleteProject = (id) => API.delete(`/projects/${id}`);

export const signIn = (formData) => API.post("/auth/signin", formData);
export const signUp = (formData) => API.post("/auth/signup", formData);

export const sendEmail = (contactFormData, setSend) => {
  try {
    let res = API.post(`/contact`, contactFormData);
    if (res) {
      setSend(res.data);
    }
  } catch (error) {
    console.log(error);
  }
};
