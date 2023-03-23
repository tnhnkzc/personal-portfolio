import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  addButton: {
    float: "right",
  },
  addButtonText: {
    textDecoration: "none",
    color: "white",
  },
  circularProgress: {
    marginTop: "100px",
  },
  title: {
    color: "beige",
  },
  titleContainer: {
    display: "flex !important",
    flexWrap: "wrap",
    justifyContent: "center",
    [theme.breakpoints.down("xs")]: {
      marginTop: "150px",
    },
  },
  
}));
