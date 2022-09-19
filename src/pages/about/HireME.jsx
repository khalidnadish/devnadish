import React,{useContext} from "react";
import { MdWorkOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { Mycv } from "./Mycv";
import { ProfileDetail } from "../../helper/context";
import  Typography  from "@mui/material/Typography";
import { Button } from "@mui/material";


export const HireME = () => {
  const { t } = useTranslation();
  const {setActiveLink  } = useContext(ProfileDetail);

  return (
    <>
      <Box
        bgcolor={"secondary.light"}
        color={"primary.main"}
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          gap: 1,
          // width: { xs: "80%", md: "40%" },
          width: "fitcontent",
          justifyContent: "center",
          "&:hover": { bgcolor: "primary.main" },
        }}
>
<Button
          // href="/assets/mycv.pdf"
          // download
          startIcon={<MdWorkOutline color="white" className={"hireBtn"} />}
          onClick={() => setActiveLink("/hire")}
        >
           <Typography variant="btnFont" fontSize={"1rem"} color="common.black">{t("hiremeBtn")}</Typography>
        </Button>
      



{/* 
        <Typography variant="btnFont" fontSize={"1rem"} color="common.black">{t("hiremeBtn")}</Typography>
        <span className="cta"></span>

        <MdWorkOutline color="white" className={"hireBtn"} /> */}
      </Box>
      <Box
        sx={{
          bgcolor: "warning",
          // width: { xs: "80%", md: "40%" },
          width: "fitcontent",
          position: "relative",
        }}
      >
        <Box
          sx={{
            bgcolor: "warning",
            width: { xs: "50%", md: "50%" },
            position: "absolute",
            top: "-22%",
            left: "25%",
          }}
        >
          {/* <LinearProgress color="secondary" /> */}
        </Box>

        <Mycv />
      </Box>
    </>
  );
};
