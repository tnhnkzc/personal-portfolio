import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    left: "0",
    flexWrap: "wrap",
    width: "auto !important",
    borderRadius: "10px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "550px",
      width: "50px !important",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "250px",
      width: "50px !important",
    },
    transitionTimingFunction: "ease-in",
    transition: "1.2s",
    animationDelay: "1.2s",
  },
  links: {
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    flexWrap: "wrap",
    left: "0",
    height: "50px !important",
    width: "40px !important",
  },

  githubLogo: {
    marginBottom: "10px",
    marginTop: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "18px",
    },
  },

  linkedinLogo: {
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "18px",
    },
  },
  cvLogo: {
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "18px",
    },
  },
}));
