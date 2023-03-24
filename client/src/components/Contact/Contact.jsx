import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  TextField,
  Button,
  Typography,
  Paper,
  TextareaAutosize,
  Grow,
} from "@material-ui/core";
import useStyles from "./styles";
import { sendEmail } from "../../api/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import WebFont from "webfontloader";
import { motion } from "framer-motion";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Twitter from "@material-ui/icons/Twitter";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import MyPDF from "../../files/CV.pdf";

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Comfortaa", "Grape Nuts"],
      },
    });
  }, []);

  const [contactFormData, setContactFormData] = useState({
    email: "",
    fullName: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const clear = () => {
    setContactFormData({ email: "", fullName: "", subject: "", message: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contactFormData.message !== "" &&
      contactFormData.fullName !== "" &&
      contactFormData.subject !== ""
    ) {
      setStatus("success");
      setTimeout(() => {
        setStatus("");
      }, 1500);

      dispatch(sendEmail(contactFormData));
    } else {
      setStatus("error");
      setTimeout(() => {
        setStatus("");
      }, 2000);
      clear();
    }
  };

  return (
    <Grow in id="contact">
      <section className="h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex gap-4 items-center justify-center flex-col"
        >
          <Typography
            style={{ fontFamily: "Comfortaa" }}
            className={classes.formTitle}
            variant="h2"
          >
            {t("contactPage.title")}
          </Typography>
          <div className="flex w-full md:items-center md:justify-center justify-center gap-4">
            <motion.button
              style={{
                background: "transparent",
                border: "none",
                display: "flex",
                width: "30px",
                height: "40px",
                marginBottom: "10px",
              }}
              whileHover={{ scale: 1.2, color: "red" }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Typography className={classes.githubButton}>
                <a
                  target="_blank"
                  href="https://www.github.com/tnhnkzc"
                  rel="noreferrer"
                >
                  <GitHubIcon
                    className="text-black hover:text-orange-300"
                    fontSize="large"
                  />
                </a>
              </Typography>
            </motion.button>
            <motion.button
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
                width: "30px",
                height: "40px",
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Typography>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/tunahankuzucu/"
                  rel="noreferrer"
                >
                  <LinkedInIcon
                    className="text-black hover:text-orange-300"
                    fontSize="large"
                  />
                </a>
              </Typography>
            </motion.button>
            <motion.button
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
                width: "30px",
                height: "40px",
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Typography>
                <a
                  target="_blank"
                  href="https://www.twitter.com/tunahankuzucuu/"
                  rel="noreferrer"
                >
                  <Twitter
                    className="text-black hover:text-orange-300"
                    fontSize="large"
                  />
                </a>
              </Typography>
            </motion.button>
            <motion.button
              style={{
                backgroundColor: "transparent",
                border: "none",
                display: "flex",
                width: "30px",
                height: "40px",
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Typography>
                <a
                  href={MyPDF}
                  target="_blank"
                  download="CV.pdf"
                  rel="noreferrer"
                >
                  <PictureAsPdfIcon
                    fontSize="large"
                    className="text-black hover:text-orange-300"
                  />
                </a>
              </Typography>
            </motion.button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Paper className={classes.formContainer}>
            <form
              autoComplete="off"
              noValidate
              className="p-4 bg-transparent"
              onSubmit={handleSubmit}
            >
              <TextField
                className={classes.textField}
                name="email"
                variant="standard"
                label="Email"
                fullWidth
                value={contactFormData.email}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    email: e.target.value,
                  })
                }
              />
              <TextField
                className={classes.textField}
                name="fullName"
                variant="standard"
                label={t("contactPage.name")}
                fullWidth
                value={contactFormData.fullName}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    fullName: e.target.value,
                  })
                }
              />
              <TextField
                className={classes.textField}
                name="subject"
                variant="standard"
                label={t("contactPage.subject")}
                fullWidth
                value={contactFormData.subject}
                onChange={(e) =>
                  setContactFormData({
                    ...contactFormData,
                    subject: e.target.value,
                  })
                }
              />
              <div>
                <TextareaAutosize
                  style={{
                    background: "#11ffee00",
                    color: "black",
                    borderColor: "black",
                  }}
                  className={classes.textArea}
                  name="message"
                  minRows={10}
                  placeholder={t("contactPage.message")}
                  value={contactFormData.message}
                  onChange={(e) =>
                    setContactFormData({
                      ...contactFormData,
                      message: e.target.value,
                    })
                  }
                />
              </div>
              <Button
                style={{
                  fontFamily: "Droid Sans",
                  background: "#330033",
                  color: "beige",
                }}
                variant="contained"
                type="submit"
                className={classes.button}
              >
                {t("contactPage.button")}
              </Button>
            </form>
          </Paper>
        </motion.div>
        {status === "success" && (
          <Container>
            <Alert variant="filled" severity="success">
              Your message is successfully sent !
            </Alert>
          </Container>
        )}
        {status === "error" && (
          <Container fullWidth>
            <Alert variant="filled" severity="error">
              There has been a problem ! Please try again later.
            </Alert>
          </Container>
        )}
      </section>
    </Grow>
  );
};

export default Contact;
