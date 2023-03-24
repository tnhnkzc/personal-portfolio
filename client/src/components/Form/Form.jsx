import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
} from "@material-ui/core";
import FileBase from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { createProject } from "../../actions/index";
import { useSelector } from "react-redux";
import useStyles from "./styles";
import { updateProject } from "../../actions/index";
import WebFont from "webfontloader";

const Form = ({ currentId, setCurrentId }) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    tools: "",
    gitHubRepo: "",
    selectedFile: "",
    siteLink: "",
  });
  const classes = useStyles();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const project = useSelector((state) =>
    currentId ? state.projects.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (project) setProjectData(project);
  }, [project]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateProject(currentId, projectData));
      clear();
    } else {
      dispatch(createProject(projectData));
    }
    navigate("/");
  };

  const clear = () => {
    setCurrentId(null);
    setProjectData({
      title: "",
      description: "",
      tools: "",
      gitHubRepo: "",
      selectedFile: "",
      siteLink: "",
    });
  };

  return (
    <Container>
      <Typography
        style={{ fontFamily: "Chilanka" }}
        variant="h4"
        className={classes.formTitle}
      >
        {currentId ? "Edit" : "Add"} a Project
      </Typography>
      <Paper className={classes.formContainer}>
        <form
          autoComplete="off"
          noValidate
          className={classes.form}
          style={{
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.6671043417366946) 31%, rgba(201,149,35,0.30015756302521013) 54%)",
          }}
        >
          <TextField
            className={classes.textField}
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={projectData.title}
            onChange={(e) =>
              setProjectData({ ...projectData, title: e.target.value })
            }
          />
          <TextField
            className={classes.textField}
            name="description"
            variant="outlined"
            label="Description"
            fullWidth
            value={projectData.description}
            onChange={(e) =>
              setProjectData({ ...projectData, description: e.target.value })
            }
          />
          <TextField
            className={classes.textField}
            name="tools"
            variant="outlined"
            label="Tools"
            fullWidth
            value={projectData.tools}
            onChange={(e) =>
              setProjectData({ ...projectData, tools: e.target.value })
            }
          />
          <TextField
            className={classes.textField}
            name="gitHubRepo"
            variant="outlined"
            label="GitHub"
            fullWidth
            value={projectData.gitHubRepo}
            onChange={(e) =>
              setProjectData({ ...projectData, gitHubRepo: e.target.value })
            }
          />
          <TextField
            className={classes.textField}
            name="siteLink"
            variant="outlined"
            label="Link"
            fullWidth
            value={projectData.siteLink}
            onChange={(e) =>
              setProjectData({ ...projectData, siteLink: e.target.value })
            }
          />
          <div className={classes.fileBase}>
            <FileBase
              type="file"
              multiple={false}
              onDone={({ base64 }) =>
                setProjectData({ ...projectData, selectedFile: base64 })
              }
            />
          </div>
          <Button
            style={{ fontFamily: "Chilanka" }}
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
