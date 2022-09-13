import React from "react";
import { MdWorkOutline } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import { Mycv } from "./Mycv";


export const HireME = () => {
  const { t } = useTranslation();
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
        <span className="cta">{t("hiremeBtn")}</span>

        <MdWorkOutline color="white" className={"hireBtn"} />
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
