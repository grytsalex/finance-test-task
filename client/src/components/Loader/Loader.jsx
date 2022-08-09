import { CircularProgress, Box } from "@mui/material";
import styles from "./loader.module.scss";

export const Loader = () => {
  return (
    <Box className={styles.loader}>
      <CircularProgress thickness={5} size={100} />
    </Box>
  );
};
