import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CoinsTable() {
  return (
    <div className="py-[3rem]">
      <h1 className="text-center text-3xl mb-5">Crypto App </h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="">
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">MarketCap&nbsp;(g)</TableCell>
              <TableCell align="center">WVAP(24Hr)&nbsp;(g)</TableCell>
              <TableCell align="center">Supply&nbsp;(g)</TableCell>
              <TableCell align="center">Volume(24Hr)&nbsp;(g)</TableCell>
              <TableCell align="center">Change(24Hr)&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              key={1}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{1}</TableCell>
              <TableCell component="th" scope="row">
                bit
              </TableCell>
              <TableCell align="center">$69,000</TableCell>
              <TableCell align="center">$1.36t</TableCell>
              <TableCell align="center">$68.000</TableCell>
              <TableCell align="center">19.20m</TableCell>
              <TableCell align="center">$4.25b</TableCell>
              <TableCell align="center">0.09%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
