import { memo } from "react";
import { Chip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { arrowUp, arrowDown } from "./percentage.module.scss";

export const Percentage = memo(({ isNewPriceBigger, percent }) => {
  return (
    <Chip
      icon={
        isNewPriceBigger ? (
          <ArrowUpwardIcon className={arrowUp} />
        ) : (
          <ArrowDownwardIcon className={arrowDown} />
        )
      }
      label={`${percent}%`}
      sx={{
        backgroundColor: isNewPriceBigger ? "#e6f4ea" : "#fce8e6",
        color: isNewPriceBigger ? "green" : "red",
      }}
    />
  );
});
