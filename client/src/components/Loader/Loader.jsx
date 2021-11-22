import { CircularProgress, Box } from "@mui/material";
import { loader } from "./loader.module.scss";

export const Loader = () => {
  return (
    <Box className={loader}>
      <CircularProgress thickness={5} size={100} />
    </Box>
  );
};
