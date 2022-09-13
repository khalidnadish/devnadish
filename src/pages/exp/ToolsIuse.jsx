import * as React from "react";
import "./exp.css";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import CircularProgress from '@mui/material/CircularProgress';

import { Button, Fab, Typography } from "@mui/material";
import ps from "../../assets/1x/ps.png";
import ai from "../../assets/1x/ai.png";
import pr from "../../assets/1x/pr.png";
import ae from "../../assets/1x/ae.png";

import html from "../../assets/1x/HTML.png";
import css from "../../assets/1x/CSS.png";
import js from "../../assets/1x/Js1.png";
import flask from "../../assets/1x/flask.png";
import paython from "../../assets/1x/python-48.png";
import rc from "../../assets/1x/react.png";
import njs from "../../assets/1x/nodejs.png";

import msql from "../../assets/1x/mysql-logo-48.png";
import fire from "../../assets/1x/firebase-48.png";

import xd from "../../assets/1x/xd.png";
import figma from "../../assets/1x/figma.png";


const styleDvider = {
  textAlign: "right",
};

export default function ToolsIuse() {
 
  return (
    <>
       <CircularProgress variant="determinate" value={50} />
      <div className="exp_chractor"></div>
      {/* <CircularProgress skill={"phtoshp"} value={60} icon={ps} /> */}
      <Typography
        variant="h3"
        textAlign="left"
        pl={2}
        mt={1}
        sx={{
          fontWeight: "400",
          fontSize: { xs: "2.5rem", sm: "4rem", md: "5.5rem" },
        }}
      >
        Experince
      </Typography>
      <Grid container spacing={2} justify="center" pl={2} pr={2}>
        <Grid item ml={"0px"} align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left" sx={styleDvider}>
            <Typography>Desinging & Motion</Typography>
          </Divider>
          <br />
          <Box sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
            {/* <CircularProgress skill={"phtoshp"} value={60} icon={ps} /> */}
            <InputSlider skill={"Illastrato"} value={75} icon={ai} />
            <InputSlider skill={"Illastrato"} value={40} icon={pr} />
            <InputSlider skill={"Illastrato"} value={55} icon={ae} />
          </Box>
        </Grid>

        <Grid item align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left">
            <Typography> P.Lang & FrameWork </Typography>
          </Divider>
          <br />
          <InputSlider skill={"Illastrato"} value={80} icon={html} />
          <InputSlider skill={"Illastrato"} value={75} icon={css} />
          <InputSlider skill={"Illastrato"} value={60} icon={js} />
          <InputSlider skill={"Illastrato"} value={75} icon={rc} />
          <InputSlider skill={"Illastrato"} value={47} icon={njs} />
          <InputSlider skill={"Illastrato"} value={47} icon={paython} />

          <InputSlider skill={"Illastrato"} value={40} icon={flask} />
        </Grid>

        <Grid item align="center" xs={12} sm={12} md={4} lg={4}>
          <Divider textAlign="left">
            <Typography>DataBase</Typography>
          </Divider>
          <br />
          <InputSlider skill={"Illastrato"} value={85} icon={msql} />
          <InputSlider skill={"Illastrato"} value={50} icon={fire} />
          <br />
          <Divider textAlign="left">
            <Typography>UI & UX</Typography>
          </Divider>
          <br />
          <InputSlider skill={"Illastrato"} value={80} icon={xd} />
          <InputSlider skill={"Illastrato"} value={70} icon={figma} />
        </Grid>
      </Grid>
    </>
  );
}

const InputSlider = ({ skill, value, icon }) => {
  

  return (
    <>
     

     

        {/* <Typography variant='H9'  > {skill}  </Typography> */}
       
        <Slider
          value={value}
          // size="small"
          sx={{
            '& input[type="range"]': {
              WebkitAppearance: 'slider-vertical',
            },
          }}
          orientation="vertical"
          aria-labelledby="input-slider"
          // marks={marks}
          defaultValue={80}
          // disabled

          valueLabelDisplay="auto"
          color="secondary"
        />
      <Avatar alt="Remy Sharp" src={icon} sx={{ width: 24, height: 24 }} />
      
    </>    
  );
};
 



const CirculeSlider = ({ skill, value, icon }) => {
  

  return (
    <>
    <Stack spacing={2} direction="row">
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
      
    </Stack>
        {/* <CircularProgress   variant="determinate" value={25}/> */}
       {/* <Avatar alt="Remy Sharp" src={icon} sx={{ width: 24, height: 24 }} />  */}
      
    </>    
  );
};
 

