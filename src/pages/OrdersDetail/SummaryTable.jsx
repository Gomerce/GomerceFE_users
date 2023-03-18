import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
function createData(id, item, quantity, unitCost, subTotal) {
  return { id, item, quantity, unitCost, subTotal };
}

const rows = [
  createData(
    "1",
    ["Laptop Bag", "USB Back Pack", "Antitheft Bag"],
    1,
    "$$$$",
    "$$$$"
  ),
  createData(
    "2",
    ["Laptop Bag", "USB Back Pack", "Antitheft Bag"],
    1,
    "$$$$",
    "$$$$"
  ),
  createData(
    "3",
    ["Laptop Bag", "USB Back Pack", "Antitheft Bag"],
    1,
    "$$$$",
    "$$$$"
  ),
];
const SummaryTable = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <TableContainer sx={{ marginTop: "25px", marginBottom: "25px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="none">
                <b>#</b>
              </TableCell>
              <TableCell align="left">
                <b>Item</b>
              </TableCell>
              <TableCell align="center">
                <b>Quantity</b>
              </TableCell>
              <TableCell align="center">
                <b>Unit cost</b>
              </TableCell>
              <TableCell align="right" padding="none">
                <b>Subtotal</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ paddingLeft: "0px" }}
                >
                  {row.id}
                </TableCell>
                <TableCell
                  align="left"
                  sx={{ width: "168px" }}
                  padding="normal"
                >
                  {row.item.map((item, index) => {
                    return (
                      <Typography variant="caption" key={index}>{`${item +
                        " "}`}</Typography>
                    );
                  })}
                </TableCell>
                <TableCell align="center">{row.quantity}</TableCell>
                <TableCell align="center">{row.unitCost}</TableCell>
                <TableCell align="right" padding="none">
                  {row.subTotal}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box display={"flex"} flexDirection={"column"} mt={3}>
          <Typography
            variant="caption"
            sx={{ textTransform: "uppercase" }}
            align={"right"}
          >
            <b>Taxes &emsp;&ensp; {"N/A"}</b>
          </Typography>
          <Typography
            variant="caption"
            sx={{ textTransform: "uppercase", margin: "1% 0" }}
            align={"right"}
          >
            <b>total &emsp;&ensp; {"$$$$"}</b>
          </Typography>
          <Typography
            variant="caption"
            sx={{ textTransform: "uppercase" }}
            align={"right"}
          >
            <b>payment status &emsp;&ensp; {"paid"}</b>
          </Typography>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default SummaryTable;
