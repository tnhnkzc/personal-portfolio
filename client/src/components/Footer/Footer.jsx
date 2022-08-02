import React, { useEffect } from "react";
import useStyles from "./styles";
import { Container, Typography, Grow } from "@mui/material";
import WebFont from "webfontloader";

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  return (
    <Grow in>
      <Container
        style={{
          background: "transparent",
        }}
        className={classes.footerContainer}
      >
        <Container className={classes.footerTextContainer}>
          <Typography
            className={classes.footerText}
            style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
          >
            Made with ❤️ by Tunahan Kuzucu
          </Typography>
        </Container>
        <Container className={classes.footerTextContainer}>
          <Typography
            className={classes.footerText}
            style={{ fontFamily: "Droid Sans", fontWeight: "bold" }}
          >
            &copy; Copyright {currentYear}
          </Typography>
        </Container>
      </Container>
    </Grow>
  );
};

export default Footer;
