import { memo } from "react";
import { Typography } from "@mui/material";

export const Price = memo(({ isNewPriceBigger, amount }) => {
  return (
    <Typography sx={{ color: isNewPriceBigger ? "green" : "red" }}>
      {amount}$
    </Typography>
  );
});
