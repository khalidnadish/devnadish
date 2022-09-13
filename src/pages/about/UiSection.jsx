import React from "react";
import {
  Box,
  Stack,
  Typography,
  SvgIcon,
  Paper,
  Button,
  Avatar,
} from "@mui/material";

import xd from "../../assets/expImage/xd.svg";
import figma from "../../assets/expImage/icons8-figma.svg";
import CircularProgress from "@mui/material/CircularProgress";
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';



function UiSection() {
  const { t } = useTranslation();
  return (
    <>
          <SectionTitle title={t("uiux")}/>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent:  "space-between",
          backgroundColor: "#1f2235",
          gap:1,
          width: "100%",
        }}
      >
        <ImageComp imgx={xd} prog={70} pres={"70%"} />
        <ImageComp imgx={figma} prog={65} pres={"60%"} />
        
      </Stack>
    </>
  );
}

export default UiSection;

const ImageComp = ({ imgx, pres, prog }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          width: { xs: "100%", sm: "100%", md: "50%", lg: "50%" },
          height: "auto",
          // borderRadius: "0 50px 0 0",
          mt: { xs: 1 },
          p: 1,
          backgroundColor: "#303453",
          "&:hover": {
            border: "1px solid",
            borderColor: "primary.main",
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ m: 1, position: "relative" }}>
            <Avatar
              alt="Remy Sharp"
              src={imgx}
              sx={{ width: 60, height: 60 }}
            />
            <CircularProgress
              variant="determinate"
              value={prog}
              size={68}
              sx={{
                color: "warning.main",
                position: "absolute",
                top: -6,
                left: -6,
                zIndex: 1,
              }}
            />
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
          {pres}
        </Typography>
      </Box>
    </>
  );
};
