import React from 'react'
import { Box } from '@mui/material'
import me from "../../assets/me-transpernt.png";
import "./image.css"
const Image = ({activeColor}) => {
  return (
    <>
     <Box
        sx={{
          // display:{sx:"none"}
          position: "relative",
          height: "10%",
          width: "100%",
          backgroundColor:activeColor,
          // borderRadius:{xs:'60%',md:"0"},
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
          
        }}
      >
        <img src={me} alt="برمجة مواقع متاجر الكترونية  تصميم مواقع" className="img__area_cont" />
      </Box>
    </>
  )
}

export default Image
