import React from "react";
import { Container, Button } from "@mui/material";
import { Link } from "react-scroll";
import { ArrowUpCircle } from "lucide-react";

function ScrollToTop() {
  return (
    <Container
      className="fixed bottom-10 right-10 !w-9 flex justify-center items-center"
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
          className="border-2 border-black rounded"
        >
          <ArrowUpCircle className="text-black hidden md:block" size={36} />
        </Button>
      </Link>
    </Container>
  );
}

export default ScrollToTop;
