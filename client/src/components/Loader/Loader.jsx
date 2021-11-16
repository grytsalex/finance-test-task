import { CircularProgress, Box } from "@mui/material";

export const Loader = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress thickness={5} size={100} />
    </Box>
  );
};
