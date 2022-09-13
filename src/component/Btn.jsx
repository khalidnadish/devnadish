import React from "react";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";

function Btn({ title, xcolor = "inherit", onclick ,xicon}) {
  return (
    <>
      
        <IconButton
            variant="filled"
          sx={{
            borderColor: xcolor,
            width:"100%",
            height:"100%",
            color:'background.paper',
            bgcolor:xcolor,
            borderRadius:1,
            display:"flex",
            flexDirection:{xs:"column",md:"row"}
          }}
          disableRipple
          onClick={onclick}
        >
          <Typography variant="btnFont" sx={{
            // visibility:{xs:"hidden",sm:"hidden",md:"visible"},
            fontSize:{xs:".7rem",sm:"1rem",md:"1.1rem"},
            textAlign:"center",
            mx:{xs:0,md:1},
            textTransform:"capitalize"


          }}>{title}</Typography>
          
       
        {xicon}
        </IconButton>
       
    </>
  );
}

export default Btn;
