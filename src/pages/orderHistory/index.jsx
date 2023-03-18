import React from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableHead from "@mui/material/TableHead";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Wrapper from "../../components/Wrapper/Wrapper";
import { PageHeader, StatusBadge } from "./styles";
import { Typography, useTheme } from "@mui/material";
import BreadCrumbs from "../../components/BreadCrumbs";
import MiniSearchInput from "../../components/MiniSearchInput";

const OrdersHistory = (props) => {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
};

function createData(ID, Customer, Email, Items, Price, Status, Date) {
  return { ID, Customer, Email, Items, Price, Status, Date };
}

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
    2,
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
    3,
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
    4,
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
    5,
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
  createData(
    6,
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
  createData(
    7,
    "John Doe",
    "johndoe@gmail.com",
    16.0,
    "$$$$",
    <StatusBadge color={"blue"}>
      <Typography variant="body2">
        <b>processing</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
  createData(
    8,
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
  createData(
    9,
    "John Doe",
    "johndoe@gmail.com",
    16.0,
    "$$$$",
    <StatusBadge color={"green"}>
      <Typography variant="body2">
        <b>delivered</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
  createData(
    10,
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
  createData(
    11,
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
  createData(
    12,
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
  createData(
    13,
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
    14,
    "John Doe",
    "johndoe@gmail.com",
    16.0,
    "$$$$",
    <StatusBadge color={"green"}>
      <Typography variant="body2">
        <b>delivered</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
  createData(
    15,
    "John Doe",
    "johndoe@gmail.com",
    16.0,
    "$$$$",
    <StatusBadge color={"yellow"}>
      <Typography variant="body2">
        <b>delayed</b>
      </Typography>
    </StatusBadge>,
    "17/09/2022"
  ),
];

const OrderHistory = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const navigation = [
    { label: "Home", link: "/" },
    { label: "History", link: "/" },
  ];
  return (
    <Wrapper>
      <Box
        sx={{
          background: "#FFFFFF",
          boxShadow: "0px 2px 2px rgba(142, 142, 142, 0.25)",
          padding: "1% 2%",
          margin: "2% 0",
        }}
      >
        <PageHeader mt={3}>
          <Typography variant="h6" component="p">
            Orders history
          </Typography>
          <BreadCrumbs navigation={navigation} />
        </PageHeader>
        <PageHeader sx={{ justifyContent: "flex-end" }}>
          <MiniSearchInput />
        </PageHeader>
        <TableContainer sx={{ marginTop: "25px", marginBottom: "25px" }}>
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
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
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
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
    </Wrapper>
  );
};

export default OrderHistory;
