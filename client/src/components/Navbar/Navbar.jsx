import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  Container,
  AppBar,
  Typography,
  Button,
  Avatar,
  Toolbar,
  IconButton,
  SwipeableDrawer,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo12 from "../../images/logo12.png";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from "jwt-decode";
import WebFont from "webfontloader";
import BasicMenu from "../LanguageButton/LanguageButton";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const [show, setShow] = useState(true);

  const [underlineProjects, setUnderlineProjects] = useState(false);

  const handleMouseEnterUnderlineProjects = () => {
    setUnderlineProjects(true);
  };

  const handleMouseLeaveUnderlineProjects = () => {
    setUnderlineProjects(false);
  };

  const [underlineContact, setUnderlineContact] = useState(false);

  const handleMouseEnterUnderlineContact = () => {
    setUnderlineContact(true);
  };
  const handleMouseLeaveUnderlineContact = () => {
    setUnderlineContact(false);
  };

  const controlNavbar = () => {
    if (window.scrollY > 75) {
      setShow(false);
    } else if (window.scrollY < 75) {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  const handleMenuOpen = () => {
    setMenuOpen((prevValue) => {
      return !prevValue;
    });
  };
  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  const closeMenuOnClick = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Chilanka", "KoHo"],
      },
    });
  }, []);

  useEffect(() => {
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });
    navigate("/");
    setUser(null);
  };

  return (
    show && (
      <AppBar
        className={classes.appBar}
        style={{
          background: "transparent",
        }}
      >
        <Container className={classes.navbarContainer} maxWidth="md">
          <Typography component={Link} to="/">
            <img
              component={Link}
              to="/"
              src={logo12}
              alt="logo"
              width="100px"
              height="200px"
              className={classes.logo}
            />
          </Typography>
          <Toolbar disableGutters>
            <Container className={classes.mainContainer}>
              {user && (
                <div className={classes.userContainer}>
                  <Avatar
                    className={classes.usernameContainer}
                    alt={user.result.name}
                    src={user.result.imageURL}
                  >
                    {user.result.username.charAt(0)}
                  </Avatar>
                  <Typography variant="h6">{user.result.name}</Typography>
                  <Button
                    className={classes.logoutButton}
                    color="secondary"
                    variant="contained"
                    onClick={logout}
                  >
                    {t("navBar.logout")}
                  </Button>
                </div>
              )}

              <Button
                style={{
                  fontFamily: "Droid Sans",
                  textDecoration: `${underlineProjects ? "underline" : "none"}`,
                  transition: "0.8s",
                }}
                onMouseEnter={handleMouseEnterUnderlineProjects}
                onMouseLeave={handleMouseLeaveUnderlineProjects}
                component={Link}
                to="/projects"
                className={classes.navbarLinks}
                size={underlineProjects ? "large" : "medium"}
              >
                {t("navBar.link1")}
              </Button>
              <BasicMenu />
              <Button
                size={underlineContact ? "large" : "medium"}
                style={{
                  fontFamily: "Droid Sans",
                  textDecoration: `${underlineContact ? "underline" : "none"}`,
                  transition: "0.8s",
                }}
                onMouseEnter={handleMouseEnterUnderlineContact}
                onMouseLeave={handleMouseLeaveUnderlineContact}
                component={Link}
                to="/contact"
                className={classes.navbarLinks}
              >
                {t("navBar.link2")}
              </Button>
            </Container>
            <IconButton className={classes.hamburgerMenu}>
              <MenuIcon
                onClick={handleMenuOpen}
                className={classes.hamburgerMenuIcon}
              />
            </IconButton>
          </Toolbar>
        </Container>
        <SwipeableDrawer
          className={classes.SwipeableDrawer}
          open={menuOpen}
          anchor="right"
          onOpen={() => setMenuOpen(true)}
          onClose={() => setMenuOpen(false)}
        >
          <div
            className={classes.chevronIconDiv}
            style={{
              background: "black",
            }}
          >
            <IconButton className={classes.chevronIcon}>
              <ChevronRightIcon
                onClick={handleCloseMenu}
                style={{ color: "beige" }}
              />
            </IconButton>
          </div>
          <Container
            style={{
              background: "black",
            }}
            className={classes.hamburgerMenuContainer}
          >
            <Container className={classes.hmbrgMenuLinkContainer}>
              <BasicMenu />
              <Button
                style={{ fontFamily: "Droid Sans" }}
                component={Link}
                to="/projects"
                className={classes.navbarLinks}
                onClick={closeMenuOnClick}
              >
                {t("navBar.link1")}
              </Button>
              <Button
                style={{ fontFamily: "Droid Sans" }}
                component={Link}
                to="/contact"
                className={classes.navbarLinks}
                onClick={closeMenuOnClick}
              >
                {t("navBar.link2")}
              </Button>
            </Container>
            <Container className={classes.hmbrgMenuUserContainer}>
              {user && (
                <>
                  <Container className={classes.userContainer}>
                    <Avatar
                      className={classes.usernameContainer}
                      alt={user.result.name}
                      src={user.result.imageURL}
                    >
                      {user.result.username.charAt(0)}
                    </Avatar>
                    <Typography variant="h6">{user.result.name}</Typography>
                  </Container>
                  <Container>
                    <Button
                      className={classes.logoutButton}
                      color="secondary"
                      variant="contained"
                      onClick={logout}
                    >
                      {t("navBar.logout")}
                    </Button>
                  </Container>
                </>
              )}
            </Container>
          </Container>
        </SwipeableDrawer>
      </AppBar>
    )
  );
};

export default Navbar;
