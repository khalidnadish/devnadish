import React from 'react'
import Box from '@mui/material/Box'

function Btn({title,xcolor="inherit",xh}) {
  return (
    <Box sx={{
        // borderLeft:"15px solid",
        borderColor:xcolor,
        bgcolor:xcolor,
        width:"100%",
        height:xh,
        borderRadius:0

    }}></Box>
  )
}

export default Btn