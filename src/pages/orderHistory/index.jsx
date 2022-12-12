import React from "react";
import AppPagination from "../../components/Pagination";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

import { PageHeader, StatusBadge } from "./styles";

import Wrapper from "../../components/Wrapper/Wrapper";
import BreadCrumbs from "../../components/BreadCrumbs";
import MiniSearchInput from "../../components/MiniSearchInput";
import CustomSelect from "../../components/CustomSelect";
function createData(ID, Customer, Email, Items, Price, Status, Date) {
  return { ID, Customer, Email, Items, Price, Status, Date };
}
const navigation = [
  { label: "Home", link: "/" },
  { label: "History", link: "/" },
];
const rows = [
  createData(
    1,
    "John Doe",
    "johndoe@gmail.com",
    6,
    "$$$$",
    <StatusBadge color={"green"}>
      <Typography variant="body2">
        <b>delivered</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
  createData(
    1,
    "John Doe",
    "johndoe@gmail.com",
    9,
    "$$$$",
    <StatusBadge color={"yellow"} sx={{ color: "#000" }}>
      <Typography variant="body2">
        <b>delayed</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
  createData(
    1,
    "John Doe",
    "johndoe@gmail.com",
    16.0,
    "$$$$",
    <StatusBadge color={"grey"}>
      <Typography variant="body2">
        <b>pending</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
  createData(
    1,
    "John Doe",
    "johndoe@gmail.com",
    3.7,
    "$$$$",
    <StatusBadge color={"blue"}>
      <Typography variant="body2">
        <b>processing</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
  createData(
    1,
    "John Doe",
    "johndoe@gmail.com",
    16.0,
    "$$$$",
    <StatusBadge color={"red"}>
      <Typography variant="body2">
        <b>cancelled</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
];
const options = [10, 20, 30];
const OrdersHistory = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const page = query.get("page") || 1;
  return (
    <Wrapper>
      <PageHeader mt={3}>
        <Typography variant="h6" component="p">
          Orders history
        </Typography>
        <BreadCrumbs navigation={navigation} />
      </PageHeader>
      <PageHeader>
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <Typography variant="body2">show</Typography>
          <CustomSelect
            showBorder={true}
            showBackground={false}
            width={"70px"}
            items={options}
            margin="0 5%"
          />{" "}
          <Typography variant="body2"> entries</Typography>
        </Box>
        <MiniSearchInput />
      </PageHeader>
      <TableContainer style={{ marginTop: "25px", marginBottom: "25px" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Customer</TableCell>
              <TableCell align="left">Email</TableCell>
              <TableCell align="left">Items</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Status</TableCell>
              <TableCell align="left">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.ID}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.ID}
                </TableCell>
                <TableCell align="left" padding="normal">
                  {row.Customer}
                </TableCell>
                <TableCell align="left" padding="normal">
                  {row.Email}
                </TableCell>
                <TableCell align="left" padding="normal">
                  {row.Items}
                </TableCell>
                <TableCell align="left" padding="normal">
                  {row.Price}
                </TableCell>
                <TableCell align="left" padding="normal">
                  {row.Status}
                </TableCell>
                <TableCell align="left" padding="normal">
                  {row.Date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <AppPagination count={10} page={page} />
      </TableContainer>
    </Wrapper>
  );
};

export default OrdersHistory;
