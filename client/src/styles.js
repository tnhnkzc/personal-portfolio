import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  homeContainer: {
    [theme.breakpoints.down("xs")]: {
      position: "absolute",
    },
  },
  homeSection: {
    height: "auto",
  },
  htmlContainer: {
    [theme.breakpoints.down("xs")]: {
      width: "auto !important",
    },
  },
}));
