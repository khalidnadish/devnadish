import React from "react";

import { useTranslation } from 'react-i18next';
import { Box, Stack, Typography } from "@mui/material";
import Q from "../../assets/prevWorker/alguthi.png";
import S from "../../assets/prevWorker/alsuraia.png";
import SB from "../../assets/prevWorker/weeklyNews.png";
import "./LiveCalender.css";
function LiveCalender() {
  const { t } = useTranslation();
  return (
    <>
      <Typography
        variant="h2"
        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        textAlign="center"
        pl={2}
        mb={4}
      >
        {t("livecalenderTitle")}
      </Typography>

      <Stack sx={{ display: "flex",flexDirection:"row",flexFlow:"wrap", gap: 4, height: "100vh",justifyContent:"space-evenly" }}>
        <Boxstl w={"300px"} h={"auto"} range={"1998-2005"}>
         <div className="xdiv">
          <img src={Q} alt="" className="img_worker" />
          <Typography variant="subtitle1" mx={2}>{t("1998_2005")}</Typography>
          </div>
          
        </Boxstl>
        <Boxstl w={"300px"} h={"auto"} range={"2006-2008"}>
        <div className="xdiv">
          <img src={S}  alt="" className="img_worker" />
          <Typography  variant="subtitle1" mx={2}>{t("2006_2008")}</Typography>
          </div>
        </Boxstl>
        <Boxstl w={"99%"} h={"auto"} range={"2009-2010"}>
        <div className="xdiv">
          <img src={SB} alt="" className="img_worker" />
          <Typography  variant="subtitle1" mx={2}>{t("2009_2010")}</Typography>
          </div>
        </Boxstl>
        <Boxstl w={"99%"} h={"auto"} range={"2011-2014"}>
        <div className="xdiv">
          <img src={Q} alt="" className="img_worker" />
          <Typography  variant="subtitle1" mx={2}>{t("2011_2014")}</Typography>
        </div>
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={"2015-till Now"}>
         
          {/* <img src={Q} alt="" className="img_worker" /> */}
          <Typography  variant="subtitle1" mx={2}>{t("2005_tillNow")}</Typography>
        </Boxstl>
      </Stack>
    </>
  );
}

export default LiveCalender;

const Boxstl = ({ w, h, children, range }) => {
  return (
    <>
      <Box
        sx={{
          width: w,
          height: h,
          maxWidth:"280px",
          bgcolor: "#303453",
          display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          flexDirection: "row",
          alignItems:"flex-start",
          position: "relative",
          boxShadow:"9",
          gap: 2,
          p: 4,
          "&:hover": {
            border: "1px solid",
            borderColor: "primary.main",
            boxShadow:"13",
          },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: "45px",
            borderRadius: "50px",
            width: "120px",
            height: "30px",
            bgcolor: "#303453",
            // bgcolor: "#303413",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, .75)",
            gap: 2,
          }}
        >
          {range}
        </Box>
        {children}
      </Box>
    </>
  );
};
