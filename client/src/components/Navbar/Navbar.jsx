import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LOGOUT } from "../../constants/actionTypes";
import decode from "jwt-decode";
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
} from "@mui/material";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import logo from "../../images/logo.png";
import useStyles from "./styles";
import WebFont from "webfontloader";
import BasicMenu from "../LanguageButton/LanguageButton";
import { Link } from "react-scroll";

function Navbar() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  // User Fetch
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

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

  // Font Style

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Droid Sans", "Comfortaa"],
      },
    });
  }, []);

  // Mouse hover effects for navbar links
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

  // Swipeable Menu for Mobile
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <AppBar className={classes.appBar}>
      <Toolbar disableGutters className={classes.toolBar}>
        <Container className={classes.logoContainer}>
          <Link
            to="home"
            duration={750}
            smooth={true}
            className="cursor-pointer"
          >
            <Typography>
              <img src={logo} alt="logo" className={classes.logo} />
            </Typography>
          </Link>
        </Container>
        <Container className={classes.navbarLinksContainer}>
          <Container className={classes.buttonContainers}>
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={750}
            >
              <Button
                style={{
                  fontFamily: "Comfortaa",
                  textDecoration: `${underlineProjects ? "underline" : "none"}`,
                  transition: "0.8s",
                }}
                onMouseEnter={handleMouseEnterUnderlineProjects}
                onMouseLeave={handleMouseLeaveUnderlineProjects}
                className={classes.navbarLinks}
                size={underlineProjects ? "large" : "medium"}
              >
                {t("navBar.link1")}
              </Button>
            </Link>
          </Container>
          <Container className={classes.buttonContainers}>
            <Link to="contact" spy={true} smooth={true} duration={750}>
              <Button
                size={underlineContact ? "large" : "medium"}
                style={{
                  fontFamily: "Comfortaa",
                  textDecoration: `${underlineContact ? "underline" : "none"}`,
                  transition: "0.8s",
                }}
                onMouseEnter={handleMouseEnterUnderlineContact}
                onMouseLeave={handleMouseLeaveUnderlineContact}
                className={classes.navbarLinks}
              >
                {t("navBar.link2")}
              </Button>
            </Link>
          </Container>
          {user && (
            <div className={classes.buttonContainers}>
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
          <Container className={classes.buttonContainers}>
            <BasicMenu />
          </Container>
        </Container>
        <IconButton className={classes.hamburgerMenu}>
          <MenuIcon
            onClick={handleMenuOpen}
            className={classes.hamburgerMenuIcon}
          />
        </IconButton>
      </Toolbar>

      {/* Hamburger Menu */}

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
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-200}
              duration={750}
            >
              <Button
                style={{ fontFamily: "Comfortaa" }}
                className={classes.navbarLinks}
                onClick={closeMenuOnClick}
              >
                {t("navBar.link1")}
              </Button>
            </Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={750}
            >
              <Button
                style={{ fontFamily: "Comfortaa" }}
                className={classes.navbarLinks}
                onClick={closeMenuOnClick}
              >
                {t("navBar.link2")}
              </Button>
            </Link>
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
  );
}

export default Navbar;
