import React from "react";
import {
  Box,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import { useTranslation } from 'react-i18next';
import ps from "../../assets/expImage/ps.svg";
import ai from "../../assets/expImage/ai.svg";
import pr from "../../assets/expImage/pr.svg";
import ae from "../../assets/expImage/ae.svg";
import CircularProgress from "@mui/material/CircularProgress";
import "./sectionStyle.css"

import SectionTitle from "./SectionTitle";
function DesignSection() {
  const { t } = useTranslation();
  return (
    <>
          <SectionTitle title={t("designtitle")}/>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 1,
          backgroundColor: "#1f2235",

          width: "100%",
        }}
      >
        <ImageComp imgx={ps} prog={70} pres={"70%"} />
        <ImageComp imgx={ai} prog={65} pres={"60%"} />
        <ImageComp imgx={pr} prog={40} pres={"60%"} />
        <ImageComp imgx={ae} prog={53} pres={"50%"} />
      </Stack>
    </>
  );
}

export default DesignSection;

const ImageComp = ({ imgx, pres, prog }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", sm: "100%", md: "25%", lg: "25%" },
          
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
              sx={{ width: "64px", height: "62.5px" }}
            />
            <CircularProgress
              variant="determinate"
              value={prog}
              size={68}
              sx={{
                color: "warning.main",
                position: "absolute",
                top: -4,
                left: -4,
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
