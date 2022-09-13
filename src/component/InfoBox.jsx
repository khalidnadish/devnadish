import React from "react";

import { Box, Stack, Typography, SvgIcon, Paper, Button,Avatar } from "@mui/material";
import ps from "../assets/1x/ps.png";
import CircularProgress from '@mui/material/CircularProgress';
function InfoBox({ svgicon,activeLang, xcolor = "inherit", onclick ,xicon}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", sm: "100%", md: "25%", lg: "25%" },
          height: "auto",
          // borderRadius: "0 50px 0 0",
          mt: { xs: 1 },

          backgroundColor: "#303453",
          "&:hover": {
            border: "1px solid",
            borderColor: "primary.main",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ m: 1, position: "relative" }}>
            <Avatar alt="Remy Sharp" src={ps} sx={{ width: 60, height: 60 }} />
            <CircularProgress variant="determinate" value={78}
              size={68}
              sx={{
                color: "warning.main",
                position: 'absolute',
                top: -6,
                left: -6,
                zIndex: 1,
              }} />
          </Box>
        </Box>

        <Typography
          variant="subtitle2"
          sx={{
            // textAlign: activeLang ? "center" : "center",
            fontWeight: "200",
            textTransform: "capitalize",
          }}
          
        >
         60%
        </Typography>
      </Box>
    </>
  );
}

export default InfoBox;
