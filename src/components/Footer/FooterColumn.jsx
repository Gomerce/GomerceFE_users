import Typography from "@mui/material/Typography";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ColumnWrapper, CustomListItems } from "./styles";
const FooterColumn = ({ title, links }) => {
  const navigate = useNavigate();
  return (
    <ColumnWrapper>
      <Typography
        variant="h6"
        color={"#F4F5EF"}
        fontWeight={700}
        fontSize={18}
        sx={{ marginTop: { mobile_0: "3%", tablet_840: "0" } }}
      >
        {title}
      </Typography>
      {links.map((link, index) => {
        const { label, url } = link;
        return (
          <CustomListItems onClick={() => navigate(url)} key={index}>
            {label}
          </CustomListItems>
        );
      })}
    </ColumnWrapper>
  );
};

export default FooterColumn;
