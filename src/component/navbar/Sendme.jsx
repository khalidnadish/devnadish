import React from 'react'
import {experts} from "../../helper/en"
import { Typography } from '@mui/material'
function Sendme() {
  return (
    <>
      <Typography variant="h1" textAlign="left" pl={2} mt={2}>
      Sendme
      </Typography>
      <Typography variant="body1" textAlign="left" pl={2} mt={2}>
        {experts}
      </Typography>
    </>
  );
}

export default Sendme