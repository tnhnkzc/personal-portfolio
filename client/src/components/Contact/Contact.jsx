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

const Contact = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "Grape Nuts"],
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
      setTimeout(() => {
        navigate("/");
      }, 2000);
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
    <Grow in>
        <section className="h-screen flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Typography
              style={{ fontFamily: "Chilanka" }}
              className={classes.formTitle}
              variant="h2"
            >
              {t("contactPage.title")}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Paper className={classes.formContainer}>
              <form
                style={{
                  background:
                    "linear-gradient(90deg, rgba(255,255,255,0.6671043417366946) 31%, rgba(201,149,35,0.30015756302521013) 54%)",
                }}
                autoComplete="off"
                noValidate
                className={classes.form}
                onSubmit={handleSubmit}
              >
                <TextField
                  className={classes.textField}
                  name="email"
                  variant="outlined"
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
                  variant="outlined"
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
                  variant="outlined"
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
                  color="primary"
                  type="submit"
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
