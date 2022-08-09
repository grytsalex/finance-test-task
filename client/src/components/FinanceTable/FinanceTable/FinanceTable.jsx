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
import nasdaq from "../../../assets/nasdaq.png";
import { changeTimeView } from "../../../utils";
import {
  Price,
  Percentage,
  ExpandableTableRow,
  ExpandedRow,
} from "../RowItems";
import styles from "./financetable.module.scss"

export const FinanceTable = ({ tickerData }) => {
  return (
    <TableContainer component={Paper} className={styles.tableContainer}>
      <Table className={styles.table} aria-label="finance table">
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
                className={styles.exchangeTableCell}
                component="th"
                scope="row"
              >
                <Avatar src={nasdaq} />
                <Typography component="span" className={styles.exchangeText}>
                  {tickerItem?.exchange}
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                {tickerItem?.ticker}
              </TableCell>
              <TableCell align="right">
                <Price
                  amount={tickerItem?.price}
                  isNewPriceBigger={tickerItem?.isNewPriceBigger}
                />
              </TableCell>
              <TableCell align="right">{tickerItem?.change}$</TableCell>
              <TableCell align="right">
                <Percentage
                  percent={tickerItem?.change_percent}
                  isNewPriceBigger={tickerItem?.isNewPriceBigger}
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
