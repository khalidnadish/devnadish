import { useContext } from "react";
import { ArrowShow } from "../arrowBox/ArrowShow";
import { BouttonArea } from "./BouttonArea";

import { Box } from "@mui/material";
import { ProfileDetail } from "../../helper/context";
import "./sidebararea.css";


export const SidebarArea = () => {
  const { activeColor } = useContext(ProfileDetail);
  const img__area = {
    position: "relative",
    height: "20%",
    width: "100%",
    backgroundColor: activeColor,
  };

  return (
    <>
     
      <Box
        sx={{
          backgroundColor: {
            xs: "transparent",
            sm: "transparent",
            md: "transparent",
          },
          border: { xs: 0, sm: 0, md: 0 },
        }}
         
      >
        <BouttonArea />
      </Box>
     
    </>
  );
};
