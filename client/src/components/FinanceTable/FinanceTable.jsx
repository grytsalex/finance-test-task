import {
  TableContainer,
  Table,
  TableHead,
  Paper,
  TableRow,
  TableCell,
  TableBody,
  Avatar,
  Typography,
} from "@mui/material";
import nasdaq from "../../assets/nasdaq.png";
import { changeTimeView } from "../../utils";
import { Price, Percentage, ExpandableTableRow, ExpandedRow } from "./RowItems";

export const FinanceTable = ({ tickerData }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        boxShadow: "none",
        height: "100vh",
        display: "flex",
        alignItems: "center ",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          margin: "auto",
          maxWidth: 1000,
          borderSpacing: 0,
          boxShadow: "0px 1px 5px 5px rgba(204, 204, 204, 0.5)",
          borderRadius: "6px 6px 6px 6px",
        }}
        aria-label="finance table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Exchange</TableCell>
            <TableCell>Ticker</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Change&nbsp;</TableCell>
            <TableCell align="right">Change percent&nbsp;</TableCell>
            <TableCell align="right">Last trade time&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tickerData?.map((tickerItem) => (
            <ExpandableTableRow
              key={tickerItem.ticker}
              expandComponent={
                <TableCell colSpan="6">
                  <ExpandedRow
                    dividend={tickerItem?.dividend}
                    profitability={tickerItem?.yield}
                  />
                </TableCell>
              }
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Avatar src={nasdaq} />
                <Typography component="span" sx={{ ml: "5px" }}>
                  {tickerItem?.exchange}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                {tickerItem?.ticker}
              </TableCell>
              <TableCell align="right">
                <Price amount={tickerItem?.price} />
              </TableCell>
              <TableCell align="right">{tickerItem?.change}$</TableCell>
              <TableCell align="right">
                <Percentage
                  price={tickerItem?.price}
                  percent={tickerItem?.change_percent}
                />
              </TableCell>

              <TableCell align="right">
                {changeTimeView(tickerItem?.last_trade_time)}
              </TableCell>
            </ExpandableTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
