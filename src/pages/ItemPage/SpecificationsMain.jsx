import React from "react";
import Typography from "@mui/material/Typography";
import { Card, ListWrap, Specifications, Wrap } from "./styles";
import CustomDivider from "../../components/CustomDivider";
const SpecificationsMain = () => {
  return (
    <Specifications>
      <Typography variant="h5" sx={{ margin: "2% 0" }}>
        Specifications
      </Typography>
      <Wrap>
        <Card>
          <Typography variant="h6">Key features</Typography>
          <CustomDivider />
          <ListWrap>
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "16px",
                    margin: "5% 0",
                  }}
                  gutterBottom
                >
                  Lorem Ipsum
                </Typography>
              </li>
            ))}
          </ListWrap>
        </Card>
        <Card>
          <Typography variant="h6">What's in the box</Typography>
          <CustomDivider />
          <ListWrap>
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "16px",
                    margin: "5% 0",
                  }}
                  gutterBottom
                >
                  Lorem Ipsum
                </Typography>
              </li>
            ))}
          </ListWrap>
        </Card>
        <Card>
          <Typography variant="h6">Specifications</Typography>
          <CustomDivider />
          <ListWrap>
            {[...Array(5)].map((_, index) => (
              <li key={index}>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "16px",
                    margin: "5% 0",
                  }}
                  gutterBottom
                >
                  Lorem Ipsum
                </Typography>
              </li>
            ))}
          </ListWrap>
        </Card>
      </Wrap>
    </Specifications>
  );
};

export default SpecificationsMain;
