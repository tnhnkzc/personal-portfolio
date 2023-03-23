import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    [theme.breakpoints.down("xs")]: {
      marginBottom: "100px",
    },
  },
  formContainer: {
    backgroundColor: "#EEA47F",
    padding: "10px",
    borderRadius: "15px",
  },

  textField: {
    marginBottom: "10px",
  },

  formTitle: {
    color: "black",
    marginTop: "100px",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: "36px !important",
    },
  },
  textArea: {
    width: "100% !important",
    marginBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important",
    },
  },
  button: {
    background: "#8aaae5 !important",
    color: "black !important",
  },
}));
