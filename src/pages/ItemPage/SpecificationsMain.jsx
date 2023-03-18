import React from "react";
import Typography from "@mui/material/Typography";
import { Card, ListWrap, Specifications, Wrap } from "./styles";
import CustomDivider from "../../components/CustomDivider";
const SpecificationsMain = () => {
  return (
    <Specifications>
      <Typography
        variant="h5"
        fontWeight={600}
        fontSize={{ mobile_0: "16px", tablet_600: "20px", laptop_1024: "28px" }}
        sx={{ margin: "2% 0" }}
      >
        Specifications
      </Typography>
      <Wrap>
        <Card>
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={{
              mobile_0: "14px",
              tablet_600: "19px",
              laptop_1024: "24px",
            }}
          >
            Key features
          </Typography>
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
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={{
              mobile_0: "14px",
              tablet_600: "19px",
              laptop_1024: "24px",
            }}
          >
            What's in the box
          </Typography>
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
          <Typography
            variant="h6"
            fontWeight={700}
            fontSize={{
              mobile_0: "14px",
              tablet_600: "19px",
              laptop_1024: "24px",
            }}
          >
            Specifications
          </Typography>
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
