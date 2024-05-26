import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function CoinsTable({ coins, loading }) {
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
            {loading ? (
              <div className="100vw">Loading...</div>
            ) : (
              coins.map((coin, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{coin.rank}</TableCell>
                  <TableCell component="th" scope="row">
                    {coin.id}
                  </TableCell>
                  <TableCell align="center">
                    ${parseFloat(coin.priceUsd).toFixed(5)}
                  </TableCell>
                  <TableCell align="center">
                    ${parseFloat(coin.marketCapUsd).toFixed(5)}
                  </TableCell>
                  <TableCell align="center">
                    {parseFloat(coin.vwap24Hr).toFixed(5)}m
                  </TableCell>
                  <TableCell align="center">
                    ${parseFloat(coin.supply).toFixed(5)}b
                  </TableCell>
                  <TableCell align="center">
                    {parseFloat(coin.volumeUsd24Hr).toFixed(5)}%
                  </TableCell>
                  <TableCell align="center">
                    ${parseFloat(coin.changePercent24Hr).toFixed(5)}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
