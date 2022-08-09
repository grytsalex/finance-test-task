import { memo } from "react";
import { Box, Chip, Divider } from "@mui/material";
import styles from "./expandedrow.module.scss";

export const ExpandedRow = memo(({ dividend, profitability }) => {
  return (
    <Box className={styles.rowContentWrapper}>
      <Chip label={`Dividend: ${dividend}`} />
      <Divider orientation="vertical" flexItem />

      <Chip label={`Yield: ${profitability}`} />
    </Box>
  );
});
