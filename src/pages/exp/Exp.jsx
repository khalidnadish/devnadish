import React from 'react'
import {experts} from "../helper/en"
import { Typography } from '@mui/material'
import "./exp.css";
function Exp() {
  return (
   <>
   <div className="exp_chractor"></div>
 <Typography variant='h1' textAlign="left" pl={2} mt={2}>
       Experince
        </Typography>
        <Typography variant='body1' textAlign="left" pl={2} mt={2}>
        {experts}
        </Typography>


   </>
  )
}

export default Exp