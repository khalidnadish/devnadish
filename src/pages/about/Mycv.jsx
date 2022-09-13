import React from "react";
import { FiDownload } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


export const Mycv = () => {
  const { t } = useTranslation();

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
          // width: { xs: "100%", md: "100%" },
          width: "fitcontent",
          justifyContent: "center",
          "&:hover": { bgcolor: "primary.main" },
        }}
      >
        <Button
          href="/assets/mycv.pdf"
          download
          startIcon={<FiDownload color="white" className={"hireBtn"} />}
        >
          <span className="cta">{t("cvbtn")}</span>
        </Button>
        {/* <span className="cta">{t("cvbtn")}</span> */}
      </Box>
    </>
  );
};
