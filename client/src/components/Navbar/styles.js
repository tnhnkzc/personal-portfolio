import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  appBar: {
    background: "transparent !important",
    width: "100%",
    height: "120px",
  },
  toolBar: {
    background: "#EEA47F !important",
    width: "100%",
    height: "150px",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  logo: {
    width: "200px",
    position: "relative",
    top: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "150px",
      left: "20px",
    },
  },
  logoContainer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    width: "50% !important",
  },
  navbarLinksContainer: {
    width: "50% !important",
    height: "120px",
    display: "flex !important",
    flexDirection: "row",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      visibility: "hidden",
    },
  },
  buttonContainers: {
    width: "33% !important",
  },

  navbarLinks: {
    color: "black !important",
  },
  

  // Hamburger Menu Styles

  hamburgerMenu: {
    right: "20px",
    [theme.breakpoints.up("sm")]: {
      visibility: "hidden",
    },
  },
  chevronIcon: {
    width: "50px",
  },
  chevronIconDiv: {
    width: "100%",
    background: "#EEA47F !important",
    color: "black",
  },
  hamburgerMenuContainer: {
    display: "flex !important",
    flexDirection: "column",
    height: "100%",
    background: "#EEA47F !important",
  },
  hamburgerMenuIcon: {
    color: "#F96167",
    marginRight: "10px",
  },
  hmbrgMenuUserContainer: {
    display: "flex !important",
    flexDirection: "column",
    gap: "10px",
  },
  hmbrgMenuLinkContainer: {
    display: "flex !important",
    flexDirection: "column",
    margin: "0",
  },
}));
