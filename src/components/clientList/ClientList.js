import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./ClientList.scss";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";

const ClientList = ({ rows }) => {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableHead">CLIENT PROFILE</TableCell>
            <TableCell className="tableHead">CLIENT NAME</TableCell>
            <TableCell className="tableHead">REP</TableCell>
            <TableCell className="tableHead flex">
              <span>ONBOARD DATE</span>{" "}
            </TableCell>
            <TableCell className="tableHead">STATUS</TableCell>
            <TableCell className="tableHead">AVG PURCHASE</TableCell>
            <TableCell className="tableHead">CLIENT FULFILMENT</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow
              key={row.id}
              className="tableRow"
              onClick={() => navigate(`/clients/${row.id}`)}
            >
              <TableCell className="tableCell"><img src={row.img} alt="client-profile" style={{width: '25px', height: "25px", borderRadius: '50%', marginLeft: '25px'}} /></TableCell>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.rep}</TableCell>
              <TableCell className="tableCell">{row.onboardDate}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell wallet">
                {row.avgPurchase}
              </TableCell>
              <TableCell className="tableCell fulfil">
                <span>{row.fulfilment}%</span>
                {row.fulfilment > 70 ? (
                  <ArrowUpwardOutlinedIcon className="icon up" />
                ) : (
                  <ArrowDownwardOutlinedIcon className="icon down" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default ClientList;
