import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";

function Loader() {
  return (

    <div style={{ alignItems: "center", display: "flex", justifyContent: "center", height: "100vh", width: "100vw" }}>
    <CircularProgress color="warning"/>
    <span style={{ justifyContent: "center", position: "fixed", top: "55%" ,color: "white" }}>Loading...please wait</span>
</div> 

    // <Stack alignItems="center" justifyContent="center">
    // <CircularProgress
    //   color="error"
    //   variant="indeterminate"
    //   size={60}
    //   thickness={15}
      
    //   sx={{
    //     animationDuration: '550ms',
    //     // position: 'absolute',
    //     // left: 10,
    //     display: "flex",
        
        
    //     // border: "8px solid ",
    //     borderRadius: "30px",
    //     bgcolor: "background.paper",
    //     width: "fitcontent",
    //     margin: "auto",
        
    //   }}
    // />
    // </Stack>
    
  );
}

export default Loader;
