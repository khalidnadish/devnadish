import React ,{lazy, Suspense} from "react";
import Box from "@mui/material/Box";


const Aboutme= lazy(()=> import("../../pages/about/Aboutme"));
const LiveCalender= lazy(()=> import("../../pages/livecalender/LiveCalender"));
const WorkGallery= lazy(()=> import( "../../pages/gallery/WorkGallery"));
const Hireme= lazy(()=> import("../../pages/hireme/Hireme"));
const Sendme= lazy(()=> import("../../component/navbar/Sendme"));
const Paypal= lazy(()=> import("../../component/navbar/Paypal"));
// const ToolsIuse= lazy(()=> import( "../../pages/exp/ToolsIuse"));
const Loader = lazy(() => import("../loader/Loader"));

 

 

export const BodyContainer = ({  linkx }) => {
 

  return (
    <>
    <Suspense fallback={<Loader />}>  
      <Box
        sx={{
          height: "100%",
          width: "100%",
          backgroundColor: "transparent",
          backgroundImage: 'url("/assets/bg1.png")',
          // 'url("/src/assets/bg.png")',
           
          p:1,
          overflow: "auto",
        }}
        >
        {linkx === "/aboutme" && <Aboutme />}
      
        {linkx === "/live" && <LiveCalender />}
        {linkx === "/work" && <WorkGallery />}
        {linkx === "/hire" && <Hireme />}
        {linkx === "/sendme" && <Sendme />}
        {linkx === "/paypal" && <Paypal />}
      </Box>
        </Suspense>
    </>
  );
};
