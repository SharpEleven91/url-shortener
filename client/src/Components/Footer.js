import React from "react";
import { Code } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
const Footer = () => {
  return (
    <IconButton
      data-testid="github-button"
      href="https://github.com/SharpEleven91/url-shortener"
      id="github-link"
    >
      <Code fontSize="large" />
    </IconButton>
  );
};

export default Footer;
