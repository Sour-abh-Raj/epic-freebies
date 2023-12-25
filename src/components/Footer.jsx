import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";

const preventDefault = (event) => event.preventDefault();

const UnderlineLink = ({ linkText, linkURL }) => {
  const handleLinkClick = (event) => {
    event.preventDefault();
    window.open(linkURL, "_blank");
  };

  // const handleLinkClick = (event) => {
  //   event.preventDefault();
  //   const url = new URL(linkURL, window.location.href);
  //   window.open(url.href, "_blank");
  // };

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
      onClick={handleLinkClick}
    >
      <Link
        href={linkURL}
        target="_blank"
        rel="noopener noreferrer"
        underline="hover"
      >
        {linkText}
      </Link>
    </Box>
  );
};

const Footer = ({ footerText, footerLinks }) => {
  return (
    <Stack
      direction="row"
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        typography: "body1",
        "& > :not(style) ~ :not(style)": {
          ml: 2,
        },
      }}
      onClick={preventDefault}
    >
      {footerText}
      {footerLinks.map((footerLink, index) => (
        <UnderlineLink
          key={index}
          linkText={footerLink.linkText}
          linkURL={footerLink.linkURL}
        />
      ))}
    </Stack>
  );
};

export default Footer;
