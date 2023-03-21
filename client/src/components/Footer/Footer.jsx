import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./styles";
import { Container, Typography } from "@mui/material";
import WebFont from "webfontloader";

const Footer = () => {
  const classes = useStyles();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Comfortaa", "Chilanka", "Grape Nuts"],
      },
    });
  }, []);

  const { t } = useTranslation();

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg" style={{ textAlign: "center" }}>
        <Typography
          className={classes.footerText}
          style={{ fontFamily: "Comfortaa", fontWeight: "bold" }}
        >
          {t("footer.part1")}
        </Typography>

        <Typography
          className={classes.footerText}
          style={{ fontFamily: "Comfortaa", fontWeight: "bold" }}
        >
          &copy; Copyright {currentYear}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
