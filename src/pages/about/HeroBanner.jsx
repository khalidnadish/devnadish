import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import me from "../../assets/expImage/meOnly2.png";
import meAvatar from "/src/assets/expImage/avatar.png";
import { HireME } from "./HireME";

function HeroBanner({ activeLang }) {
  const { t } = useTranslation();

  // console.log("activeLang :" + activeLang);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", md: "row" },
          gap: 1,
        }}
      >
        {/* About Area */}
        <Box
          sx={{
            width: { xs: "100px", md: "100%" },
            display: { xs: "block", md: "none" },
            height: "100%",
          }}
        >
          <LazyLoadImage
            alt={meAvatar}
            effect="blur"
            src={meAvatar}
            className="smallscreen"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", md: "row" },
            width: { xs: "100%", md: "100%" },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: { xs: "column", md: "column" },
              alignItems: "center",
              width: "100%",
              gap: 1,
              mb: 2,
              mt: 2,
            }}
          >
            <Box display="flex" alignItems={"center"}>
              <Typography
                color="warning.main"
                variant={"bigHi"}
                sx={{
                  display: "inline",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
              >
                {t("himsg")}
              </Typography>

              <Typography
                sx={{
                  display: "inline",
                  fontSize: { xs: "2rem", md: "3rem" },
                }}
                variant={"h3"}
              >
                {t("iamKhalid")}
              </Typography>
            </Box>

            <Box display="flex"  alignItems={"center"} justifyContent="center">
              <Typography
                color="background.paper"
                sx={{
                  display: "inline",
                  fontSize: { xs: ".8rem", md: "1rem" },
                  mr:1,
                  ml:1
                }}
              >
                {t("develpoer")}
              </Typography>
              <Typography
              color="warning.main"
                sx={{
                  display: "inline",
                  fontSize: { xs: ".7rem", md: "1rem" },
                }}
              >
                {" "}
                {t("develpoerSince")}
              </Typography>
            </Box>

            {/* Butoon area */}
            <HireME />
          </Box>
        </Box>
        {/* medea area */}
        <Box
          sx={{
            width: { xs: "50%", md: "100%" },
            display: { xs: "none", md: "block" },
            height: "100%",
          }}
        >
          <LazyLoadImage alt={me} effect="blur" src={me} />
          {/* <img src={me} className="heroImage"/> */}
        </Box>
      </Box>
    </>
  );
}
export default HeroBanner;
