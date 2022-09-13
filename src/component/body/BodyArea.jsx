import { Button } from "@mui/material";
import { useContext,memo }  from "react";
import { ProfileDetail } from "../../helper/context";
import { BodyContainer } from "./TopRight";
 

function BodyArea ({ xcolor = "error.main" })  {
  console.count("BodyArea -render")
  const { activeLink} = useContext(ProfileDetail);
  return (
    <>
   
      <BodyContainer linkx={activeLink} />
    </>
  );
};
export default memo(BodyArea);