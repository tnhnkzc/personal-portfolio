import React, { useEffect, useState } from "react";
import { Container, Button } from "@mui/material";
import ArrowUpwardRoundedIcon from "@material-ui/icons/ArrowUpwardRounded";
import { Link } from "react-scroll";

function ScrollToTop() {
  return (
    <Container
      style={{
        transitionTimingFunction: "ease-in",
        transition: "1.2s",
        animationDelay: "1.2s",
      }}
    >
      <Link to="home" duration={750} smooth={true}>
        <Button
          style={{
            float: "right",
            color: "#ffcc00",
          }}
        >
          <ArrowUpwardRoundedIcon />
        </Button>
      </Link>
    </Container>
  );
}

export default ScrollToTop;
