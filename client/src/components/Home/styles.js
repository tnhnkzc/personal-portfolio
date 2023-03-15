import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100% !important",
    height: "100% !important",
    marginTop: "200px",
    textAlign: "center",
  },
  // Entry Message Container Styling
  entryContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100% !important",
  },
  title: {
    color: "beige",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "36px !important",
    },
  },
  // About Message Container Styling

  aboutContainer: {
    display: "flex !important",
    flexDirection: "column",
  },
  text: {
    color: "beige",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "18px !important",
    },
  },

  // Languages and Tools Container

  langContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      flexDirection: "row",
    },
  },
  frontEndContainer: {
    marginBottom: "5px",
  },
  backEndContainer: {
    marginBottom: "5px",
  },
  toolsContainer: {
    marginBottom: "5px",
  },
  langText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "36px !important",
    },
  },

  // Skills and Competences Container
  // Competences
  skillsContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("md")]: {
      display: "flex !important",
      flexDirection: "row",
    },
  },
  skillsTitle: {
    textDecoration: "underline",
    [theme.breakpoints.down("xs")]: {
      fontSize: "24px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "36px !important",
    },
  },
  competencesContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  competencesListContainer: {},
  competencesList: {
    padding: 0,
  },
  skillsText: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px !important",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "18px !important",
    },
  },

  // Soft Skills
  softSkillsContainer: {
    display: "flex !important",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "50px",
  },
  
  softSkillsList: {
    padding: 0,
  },

  // contentContainer: {
  //   display: "flex !important",
  //   flexWrap: "wrap",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginTop: "150px",
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: "150px",
  //   },
  // },
  // aboutContainer: {
  //   display: "flex !important",
  //   flexWrap: "wrap",
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "10px",
  //   marginTop: "150px",
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: "100px",
  //   },
  //   [theme.breakpoints.down("md")]: {
  //     marginTop: "100px",
  //   },
  // },
  // languagesContainer: {
  //   display: "flex !important",
  //   flexDirection: "row ",
  //   marginTop: "150px",
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: "100px",
  //     display: "flex !important",
  //     flexDirection: "column ",
  //     marginBottom: "100px",
  //   },
  // },
  // skillsContainer: {
  //   display: "flex !important",
  //   flexDirection: "row ",
  //   marginTop: "150px",
  //   [theme.breakpoints.down("xs")]: {
  //     display: "flex !important",
  //     flexDirection: "column ",
  //   },
  //   [theme.breakpoints.up("md")]: {
  //     display: "flex !important",
  //     flexDirection: "row ",
  //   },
  // },
  // logoContainer: {
  //   display: "flex !important",
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center",
  //   margin: "10px",
  //   gap: "15px",
  //   [theme.breakpoints.down("xs")]: {
  //     gap: "10px",
  //     marginBottom: "150px",
  //   },
  //   [theme.breakpoints.down("md")]: { marginBottom: "50px" },
  // },
  // text: {
  //   color: "beige",
  //   textAlign: "center",
  //   [theme.breakpoints.down("xs")]: {
  //     fontSize: "24px !important",
  //   },
  // },
  // softSkillsContainer: {
  //   display: "flex",
  //   [theme.breakpoints.down("xs")]: {
  //     marginTop: "20px",
  //     gap: "10px",
  //   },
  // },
  // softSkillsImage: {
  //   [theme.breakpoints.down("xs")]: {
  //     width: "100%",
  //   },
  // },
  // competencesImage: {
  //   [theme.breakpoints.down("xs")]: {
  //     width: "100%",
  //   },
  // },
}));
