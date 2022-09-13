import React from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as Uiux } from "../../assets/aboutimg/uiicon.svg";
import { ReactComponent as MySdiogram } from "../../assets/aboutimg/website-structure-icon.svg";
import { ReactComponent as Mybrush } from "../../assets/aboutimg/web-design-brush-icon.svg";


function  WillDo({ activeLang })  {
  const { t } = useTranslation();
  return (
    <>
      <Stack
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          backgroundColor: "#1f2235",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
            height: "160px",
            borderRadius: "0 0px 0 0",
            mt: { xs: 1 },
            backgroundColor: "#303453",
            "&:hover": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          }}
        >
          <SvgIcon
            sx={{ width: "30%", height: "30%", mt: 1, color: "warning.main" }}
          >
            <Uiux />
          </SvgIcon>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: "200",
              textTransform: "capitalize",
              fontSize: { xs: ".6rem", sm: "1rem", md: ".9rem" },
            }}
            p={2}
            mb={2}
          >
            {t("Uiux")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
            height: "160px",
            backgroundColor: "#303453",
            mt: { xs: 1 },
            "&:hover": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          }}
        >
          <SvgIcon color="warning" sx={{ width: "30%", height: "30%", mt: 1 }}>
            <MySdiogram />
          </SvgIcon>
          <Typography
            sx={{
              fontSize: { xs: ".6rem", sm: ".7rem", md: ".9rem" },
              fontWeight: "200",
              textTransform: "capitalize",
            }}
            variant="subtitle2"
            p={2}
            mb={2}
          >
            {t("Analyst")}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            width: { xs: "100%", sm: "100%", md: "30%", lg: "30%" },
            height: "160px",
            backgroundColor: "#303453",
            mt: { xs: 1 },
            "&:hover": {
              border: "1px solid",
              borderColor: "primary.main",
            },
          }}
        >
          <SvgIcon color="warning" sx={{ width: "30%", height: "30%", mt: 1 }}>
            <Mybrush />
          </SvgIcon>
          <Typography
            sx={{
              fontSize: { xs: ".6rem", sm: ".8rem", md: ".9rem" },
              fontWeight: "200",
              textTransform: "capitalize",
            }}
            p={2}
            mb={2}
            variant="subtitle2"
          >
            {t("Design")}
          </Typography>
        </Box>
      </Stack>
    </>
  );
};
export default WillDo
