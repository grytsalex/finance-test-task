import { Chip } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { usePrevious } from "../../../utils";

export const Percentage = (props) => {
  const prevPrice = usePrevious(props.price);

  const isNewPriceBigger = prevPrice < props.price;

  return (
    <Chip
      icon={
        isNewPriceBigger ? (
          <ArrowUpwardIcon sx={{ color: "green !important" }} />
        ) : (
          <ArrowDownwardIcon sx={{ color: "red !important" }} />
        )
      }
      label={`${props.percent}%`}
      sx={{
        backgroundColor: isNewPriceBigger ? "#e6f4ea" : "#fce8e6",
        color: isNewPriceBigger ? "green" : "red",
      }}
    />
  );
};
