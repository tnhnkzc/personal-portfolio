import express from "express";
import {
  homePage,
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  emailSender,
} from "../controllers/pages.js";


const router = express.Router();

router.get("/", homePage);
router.get("/projects", getProjects);
router.post("/projects/createProject", createProject);
router.post("/contact", emailSender);
router.patch("/projects/editProject/:id", updateProject);
router.delete("/projects/:id", deleteProject);

export default router;
