import { useContext } from "react";
import { ProfileDetail } from "../../helper/context";
import ArrowDiv from "./ArrowDiv";


export const ArrowShow = () => {
  const { blueSize, redSize, orangeSize, greenSize } = useContext(ProfileDetail);
  return (
    <>
      <div className="about_arw">
        <ArrowDiv xh={blueSize} xcolor={"primary.main"} />
      </div>
      <div className="exp_arw">
        <ArrowDiv xh={redSize} xcolor={"error.main"} />
      </div>

      <div className="live_arw">
        <ArrowDiv xh={orangeSize} xcolor={"warning.main"} />
      </div>
      <div className="gallery_arw">
        <ArrowDiv xh={greenSize} xcolor={"success.main"} />
      </div>
    </>
  );
};
