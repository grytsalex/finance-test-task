import { useSelector } from "react-redux";
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

import { selectorGetFinanceData } from "../../selectors";
import nasdaq from "../../assets/nasdaq.png";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const FinanceTable = () => {
  const data = useSelector(selectorGetFinanceData);

  console.log(data);

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
            <TableCell align="right">Change&nbsp;(g)</TableCell>
            <TableCell align="right">change_percent&nbsp;(g)</TableCell>
            <TableCell align="right">dividend&nbsp;(g)</TableCell>
            <TableCell align="right">yield&nbsp;(g)</TableCell>
            <TableCell align="right">last_trade_time&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
                  Nasdaq
                </Typography>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.calories}
              </TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
