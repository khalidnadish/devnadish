import React from "react";
import { FiDownload } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import mycv from "../../assets/aboutimg/mycv.jpg"


export const Mycv = () => {
  const { t } = useTranslation();

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `mycv.jpg`;
    link.href = "/assets/mycv.jpg";
    link.click();
  };


  return (
    <>
      <Box
        bgcolor={"primary.light"}
        color={"primary.main"}
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1,
          gap: 1,
          mt: 1,
        
          width: "fitcontent",
          justifyContent: "center",
          "&:hover": { bgcolor: "primary.main" },
        }}
      >
        <Button
          href={mycv}
          // "/assets/MYCV.jpg"
          // onClick={onDownload}
          download="khalidnadish.jpg"
          startIcon={<FiDownload color="white" className={"hireBtn"} />}
        >


           <Typography variant="btnFont" fontSize={"1rem"} color="common.black">{t("cvbtn")}</Typography>
        </Button>
      
      </Box>
    </>
  );
};
