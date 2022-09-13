import { Box, Typography } from "@mui/material";
import React from "react";
 

function SectionTitle({ title }) {
 
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: { sx: "100%", md: "100%" },
        bgcolor: "warning.dark",
        overflowWrap: "break-word",
        mt: { xs: 1 },
        p: 1,
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "capitalize",
          width: "100%",
          color: "background.paper",
          textAlign: "center",
          p:0
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}

export default SectionTitle;
