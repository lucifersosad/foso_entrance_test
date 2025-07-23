// material-ui
import {
  Box,
  CircularProgress,
  circularProgressClasses,
} from "@mui/material";
import Stack from "@mui/material/Stack";

// ==============================|| LOADER - CIRCULAR ||============================== //

export default function Spin() {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: "100%", width: '100%' }}>
      <Box sx={{ position: "relative", display: "inline-flex" }}>
        <CircularProgress
          variant="determinate"
          sx={{ color: "grey.200" }}
          value={100}
        />
        <CircularProgress
          sx={{
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
        />
      </Box>
    </Stack>
  );
}
