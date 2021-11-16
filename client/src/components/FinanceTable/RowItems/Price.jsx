import { Typography } from "@mui/material";
import { usePrevious } from "../../../utils";

export const Price = (props) => {
  const prevPrice = usePrevious(props.amount);

  const isNewPriceBigger = prevPrice < props.amount;

  return (
    <Typography sx={{ color: isNewPriceBigger ? "green" : "red" }}>
      {props.amount}$
    </Typography>
  );
};
