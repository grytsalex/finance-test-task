import { memo } from "react";
import { Box, Chip, Divider } from "@mui/material";
import { rowContentWrapper } from "./expandedrow.module.scss";

export const ExpandedRow = memo(({ dividend, profitability }) => {
  return (
    <Box className={rowContentWrapper}>
      <Chip label={`Dividend: ${dividend}`} />
      <Divider orientation="vertical" flexItem />

      <Chip label={`Yield: ${profitability}`} />
    </Box>
  );
});
