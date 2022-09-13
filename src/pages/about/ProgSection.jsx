import React from "react";
import  Box from "@mui/material/Box";
import  Stack from "@mui/material/Stack";
import  Typography from "@mui/material/Typography";
import  Avatar from "@mui/material/Avatar";
 




import html from "../../assets/expImage/icons8-html-5.svg";
import css from "../../assets/expImage/icons8-css3.svg";
import js from "../../assets/expImage/icons8-javascript.svg";
import flask from "../../assets/expImage/icons8-flask.svg";
import paython from "../../assets/expImage/icons8-python.svg";
import rc from "../../assets/expImage/icons8-react.svg";
import njs from "../../assets/expImage/icons8-node-js.svg";
import CircularProgress from "@mui/material/CircularProgress";
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';

function ProgSection() {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle title={t("devlopingtitle")}/>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
         
          justifyContent:  "space-between",
          gap:1,
          backgroundColor: "#1f2235",
          width: "100%",
        }}
      >
        <ImageComp imgx={html} prog={70} pres={"70%"} />
        <ImageComp imgx={css} prog={65} pres={"60%"} />
        <ImageComp imgx={js} prog={40} pres={"60%"} />
        <ImageComp imgx={flask} prog={53} pres={"50%"} />
        <ImageComp imgx={paython} prog={53} pres={"50%"} />
        <ImageComp imgx={rc} prog={53} pres={"50%"} />
        <ImageComp imgx={njs} prog={53} pres={"50%"} />
      </Stack>
    </>
  );
}

export default ProgSection;

const ImageComp = ({ imgx, pres, prog }) => {
  const { t } = useTranslation();
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
