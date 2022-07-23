import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import { deleteProject } from "../../../actions/index";
import { useDispatch } from "react-redux";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";
import { Link } from "react-router-dom";
import useStyles from "./styles";
import { useNavigate } from "react-router-dom";

const Project = ({ project, setCurrentId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMouseOver, setMouseOver] = useState(false);
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const handleMouseEnter = () => {
    setMouseOver(true);
  };
  const handleMouseLeave = () => {
    setMouseOver(false);
  };
  const handleDelete = () => {
    dispatch(deleteProject(project._id));
    navigate.push("/projects");
  };
  return (
    <Card>
      <CardMedia className={classes.media} image={project.selectedFile} />
      <CardContent
        style={{
          background:
            "linear-gradient(90deg, rgba(122,12,56,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        <Typography variant="h3" color="textPrimary">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Description: {project.description}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Tools: {project.tools}
        </Typography>
      </CardContent>
      <CardActions
        className={classes.cardActions}
        style={{
          background:
            "linear-gradient(90deg, rgba(122,12,56,1) 0%, rgba(148,187,233,1) 100%)",
        }}
      >
        {user && (
          <Button
            id="editButton"
            onClick={() => {
              setCurrentId(project._id);
              navigate(`/projects/editProject/${project._id}`);
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {!isMouseOver ? <MoreHorizIcon cv fontSize="medium" /> : "Edit"}
          </Button>
        )}
        {user && (
          <Button onClick={handleDelete}>
            <DeleteIcon fontSize="small" />
          </Button>
        )}

        <a className={classes.gitHub} target="_blank" href={project.gitHubRepo}>
          <GitHubIcon />
        </a>
        <a className={classes.siteLink} target="_blank" href={project.siteLink}>
          <LaunchIcon />
        </a>
      </CardActions>
    </Card>
  );
};

export default Project;
