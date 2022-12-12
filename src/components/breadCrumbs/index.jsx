import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Button from "@mui/material/Button";
function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

const BreadCrumbs = (props) => {
  const { navigation } = props;
  const breadcrumbs = [
    navigation.length > 0 &&
      navigation.map((item, index) => {
        const { label, link } = item;
        return index === navigation.length - 1 ? (
          <Button variant="text">{label}</Button>
        ) : (
          <Button variant="outlined" size="medium" key={index}>
            <Link underline="hover" key="1" href={link} onClick={handleClick}>
              {label}
            </Link>
          </Button>
        );
      }),
  ];

  return (
    <Stack spacing={2} mt={3} mb={3}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default BreadCrumbs;
