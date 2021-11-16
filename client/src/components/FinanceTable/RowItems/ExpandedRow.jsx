import { memo } from "react";
import { Box, Chip, Divider } from "@mui/material";

export const ExpandedRow = memo((props) => {
  const { dividend, profitability } = props;

  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Chip label={`Dividend: ${dividend}`} />
      <Divider orientation="vertical" flexItem />

      <Chip label={`Yield: ${profitability}`} />
    </Box>
  );
});
