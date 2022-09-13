import React, { useContext,  lazy, Suspense } from "react";

import Box from "@mui/material/Box";
 
import { ProfileDetail } from "../../helper/context";
import "./about.css";

const LazyDBSection = lazy(() => import("./DBSection"));
const ProgSection = lazy(() => import("./ProgSection"));
const DesignSection = lazy(() => import("./DesignSection"));
const UiSection = lazy(() => import("./UiSection"));
const WillDo = lazy(() => import("./WillDo"));
const HeroBanner = lazy(() => import("./HeroBanner"));
const Loader = lazy(() => import("../../component/loader/Loader"));

function Aboutme() {
  const { activeLang } = useContext(ProfileDetail);
  
   
 

  return (
    <>
      <Box
        sx={{
          userSelect: "none",
          webkitOverflowScrolling: "touch",
          padding: ".5rem",
          margin: ".5rem",
          overflow: "none",
        }}
      >
        <Suspense fallback={<Loader />}>
          <HeroBanner activeLang={activeLang} />
          <WillDo activeLang={activeLang} />
          <ProgSection activeLang={activeLang} />
          <DesignSection activeLang={activeLang} />
          <UiSection activeLang={activeLang} />
          <Suspense fallback={<h1>loding....</h1>} />
          <LazyDBSection activeLang={activeLang} />
        </Suspense>
      </Box>
    </>
  );
}

export default Aboutme;
