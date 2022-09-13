import React from 'react'
import {experts} from "../../helper/en"
import { Typography } from '@mui/material'
function Paypal() {
  return (
    <>
      <Typography variant="h1" textAlign="left" pl={2} mt={2}>
      Paypal
      </Typography>
      <Typography variant="body1" textAlign="left" pl={2} mt={2}>
        {experts}
      </Typography>
    </>
  );
}

export default Paypal