import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { Box, Button, Collapse, Paper, Stack, Typography } from "@mui/material";
import leno  from "/assets/gallery/website/leno.jpg"
import welldone  from "/assets/gallery/website/welldone.jpg"
import faq  from "/assets/gallery/website/faq.jpg"
import ecomm  from "/assets/gallery/website/ecomm.jpg"
import "./workgallery.css";

import Modalme from "../../component/modal/Modalme";
import { borderBottom } from "@mui/system";

function WorkGallery() {
  const { t } = useTranslation();
  const uiArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43,
  ];

  const logoAarray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27,
  ];
  const menuAarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const pakageAarray = [1, 2, 3, 4, 5];

  const posterAarray = [1, 2, 3, 4];
  const signBordAarray = [1, 2, 3, 4, 5, 6];
  const smAarray = [
    10, 2, 3, 4, 5, 6, 7, 8, 9, 1, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
    42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
    61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
  ];

  const cncArray = [1, 2, 3, 4, 5, 6];
  const coverageArray = [1, 2];
  const designArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 15];
  const flyerArray = [
    2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const identityArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const infographArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const characterArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <Typography
        sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
        variant="h1"
        textAlign="center"
        pl={2}
        mt={2}
      >
        {t("workgallaryTitle")}
      </Typography>

      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          flexFlow: "wrap",
          gap: 4,
          height: "100vh",
          mt: 4,
        }}
      >
        <Boxstl w={"98%"} h={"auto"} range={t("webWork")}>
          <Box sx={{display: "flex", flexDirection:{xs:"column",md:"row"} ,justifyContent: "center",alignItems: "center"}}>
            <WebsiteCard imgx={leno} linkme={"https://lenoresturant.netlify.app/"} stuts={"Done"}/>
            <WebsiteCard imgx={welldone} linkme={"https://welldonesite.netlify.app/"} stuts={"Done"} />
            <WebsiteCard imgx={faq} linkme={"https://faqlive.netlify.app/"} stuts={"UC"} stcolor={"error.main"}/>
            <WebsiteCard imgx={ecomm} linkme={"https://nadecom.netlify.app/"} stuts={"UC"} stcolor={"error.main"}/>
          </Box>
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("smWork")}>
          <ShowImagework
            imageArray={smAarray}
            baseulr={`/assets/gallery/sm/`}
            typex={t("smWork")}
          />
        </Boxstl>

        <Boxstl w={"98%"} h={"auto"} range={t("uiuxWork")}>
          <ShowImagework
            imageArray={uiArray}
            baseulr={`/assets/gallery/ui/`}
            typex={t("uiuxWork")}
          />
        </Boxstl>

        <Boxstl w={"98%"} h={"auto"} range={t("logoWork")}>
          <ShowImagework
            imageArray={logoAarray}
            baseulr={`/assets/gallery/logo/`}
            typex={t("logoWork")}
          />
        </Boxstl>

        <Boxstl w={"98%"} h={"auto"} range={t("menuWork")}>
          <ShowImagework
            imageArray={menuAarray}
            baseulr={`/assets/gallery/menu/`}
            typex={t("menuWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("charachterWork")}>
          <ShowImagework
            imageArray={characterArray}
            baseulr={`/assets/gallery/character/`}
            typex={t("charachterWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("pakageWork")}>
          <ShowImagework
            imageArray={pakageAarray}
            baseulr={`/assets/gallery/package/`}
            typex={t("pakageWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("posterWork")}>
          <ShowImagework
            imageArray={posterAarray}
            baseulr={`/assets/gallery/poster/`}
            typex={t("posterWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("singboardWork")}>
          <ShowImagework
            imageArray={signBordAarray}
            baseulr={`/assets/gallery/sinboard/`}
            typex={t("singboardWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("cncWork")}>
          <ShowImagework
            imageArray={cncArray}
            baseulr={`/assets/gallery/cnc/`}
            typex={t("cncWork")}
          />
        </Boxstl>

        <Boxstl w={"98%"} h={"auto"} range={t("coverWork")}>
          <ShowImagework
            imageArray={coverageArray}
            baseulr={`/assets/gallery/coverage/`}
            typex={t("coverWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("desginWork")}>
          <ShowImagework
            imageArray={designArray}
            baseulr={`/assets/gallery/desgin/`}
            typex={t("desginWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("flyerWork")}>
          <ShowImagework
            imageArray={flyerArray}
            baseulr={`/assets/gallery/flyer/`}
            typex={t("flyerWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("IdentitiyWork")}>
          <ShowImagework
            imageArray={identityArray}
            baseulr={`/assets/gallery/identity/`}
            typex={t("IdentitiyWork")}
          />
        </Boxstl>
        <Boxstl w={"98%"} h={"auto"} range={t("InfograghWork")}>
          <ShowImagework
            imageArray={infographArray}
            baseulr={`/assets/gallery/infograph/`}
            typex={t("InfograghWork")}
          />
        </Boxstl>
      </Stack>
    </>
  );
}

export default WorkGallery;

const Boxstl = ({ w, h, children, range }) => {
  return (
    <>
      <Box
        sx={{
          width: w,
          height: h,
          bgcolor: "#303453",
          display: "flex",

          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
          gap: 2,
          p: 4,
          mb: 4,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "-20px",
            left: { xs: ".1rem", md: "45px" },
            borderRadius: "50px",
            width: "auto",
            height: "30px",
            bgcolor: "lighyellow",
            border: "1px solid",
            borderColor: "primary.light",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            boxShadow: "2px 2px 2px 0px rgba(0, 0, 0, .75)",
            px: 2,
            gap: 2,
          }}
        >
          <Typography sx={{ fontSize: { xs: ".55rem", md: "1rem" } }}>
            {range}
          </Typography>
        </Box>
        {children}
      </Box>
    </>
  );
};

const WebsiteCard = ({ imgx ,linkme,stuts,stcolor="primary.main"}) => {
  return (
    <>
      <div className="card">
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 180,
              height: 250,
            },
          }}
        >
          <Paper elevation={3} sx={{ position: "relative" }}>
            <LazyLoadImage
              alt={"برمجة مواقع متاجر الكترونية  تصميم مواقع"}
              effect="blur"
              src={imgx}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "30px",
                bgcolor: "warning.main",
                zIndex: "100",
                // opacity:.5,
                p: 1,
              }}
            >
              <Box   sx={{
                color:"background.paper",
                //  bgcolor:stcolor,
                 borderRadius:1,
                 px:1,
                 boxShadow:1,
                 borderBottom:"3px solid"



              }}>

              <a href={linkme} target="_blank" style={{textDecoration:"none",color:"white"}}>Visit</a>
              </Box>
              <Box   sx={{
                 bgcolor:stcolor,
                 borderRadius:1,
                 px:1,
                 boxShadow:1



              }}>
                <Typography sx={{color:"background.paper"}}>{stuts}</Typography>
              </Box>
              </Box>
          </Paper>
        </Box>
      </div>
    </>
  );
};

const ShowImagework = ({ imageArray, baseulr, typex }) => {
  const [open, setOpen] = useState(false);
  const [openimage, setOpenimage] = useState(false);
  const [bigimage, setBigimage] = useState("");
  console.log("gallary render");
  const handleChange = () => {
    setOpen((prev) => !prev);
  };

  const handleShowImageDialog = (srcimg) => {
    setBigimage((presrc) => srcimg);
    setOpenimage((prev) => true);
    console.log(bigimage);
  };

  return (
    <>
      <Button
        variant="contained"
        size="small"
        color={open ? "warning" : "primary"}
        sx={{
          borderRadius: "50px",
          position: "absolute",
          top: "-20px",
          right: "10px",
        }}
        onClick={handleChange}
      >
        {!open ? (
          <AiOutlineEye size={"1.5rem"} />
        ) : (
          <AiOutlineEyeInvisible size={"1.5rem"} />
        )}
      </Button>

      <Collapse orientation="vertical" in={open} collapsedSize={40}>
        <ImageList variant="masonry" cols={4} gap={18} mt={3}>
          {imageArray.map((item, index) => {
            const src1 = `${baseulr}${item}.jpg`;

            return (
              <ImageListItem key={src1}>
                <img
                  src={`${src1}?w=248&fit=crop&auto=format`}
                  srcSet={`${src1}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={"برمجة مواقع متاجر الكترونية  تصميم مواقع"}
                  loading="lazy"
                  onError={() => {
                    // console.log("Not exist");
                  }}
                  onClick={() => handleShowImageDialog(src1)}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Collapse>
      {/* </Box> */}
      {openimage && (
        <Modalme open={openimage} setOpen={setOpenimage} title={typex}>
          <img
            src={bigimage}
            srcSet={bigimage}
            alt={"برمجة مواقع متاجر الكترونية  تصميم مواقع"}
            loading="lazy"
            onError={() => {
              // console.log("Not exist");
            }}
            onClick={() => handleShowImageDialog(src1)}
          />
        </Modalme>
      )}
    </>
  );
};

