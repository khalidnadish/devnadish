import { useContext,lazy,Suspense } from "react";
import { ProfileDetail } from "../../helper/context";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import { MdWorkOutline } from "react-icons/md";
import "./bouttonarea.css";
// import Btn from "../Btn";

const Btn=lazy(()=>import("../Btn"))

import { useTranslation } from "react-i18next";
import Loader from "../loader/Loader";

function BouttonArea  ()  {
  const { t } = useTranslation();

  const {
    setActiveColor,
    setActiveLink,
  } = useContext(ProfileDetail);


  const handleOnclick = (flag) => {
    switch (flag) {
      case "blue":
        setActiveColor((pre) => "primary.main");
        setActiveLink("/aboutme");

        break;
      case "red":
        setActiveColor((pre) => "error.main");
        setActiveLink("/exp");
        break;
      case "orange":
        setActiveColor((pre) => "warning.main");
        setActiveLink("/live");
        break;
      case "green":
        setActiveColor((pre) => "success.main");
        setActiveLink("/work");
        break;
      default:
        break;
    }
  };

  return (
    <>
    <Suspense fallback={<Loader/>}>
      <div className="btn_contaenr">
        
        
       
        <div className="about_btn" >
          <Btn
            title={t("aboutMeBtn")}
            xcolor={"primary.main"}
            onclick={() => handleOnclick("blue")}
            xicon={<BsFillPersonFill color={"white"} className="btn_class"/>}
          />
        </div>
        <div className="live_btn"  >
          <Btn
            title={t("livecalenderBtn")}
            xcolor={"warning.main"}
            onclick={() => handleOnclick("orange")}
            xicon={<BsFillCalendarCheckFill color={"white"} className="btn_class"/>}
          />
        </div>
        <div className="gallery_btn" >
          <Btn
            title={t("workgallaryBtn")}
            xcolor={"success.main"}
            onclick={() => handleOnclick("green")}
            xicon={<RiGalleryLine color={"white"} className="btn_class" />}
          />
        </div>
        <div className="contact_btn">
          <Btn
            title={t("hiremeBtn")}
            xcolor={"secondary.light"}
            xicon={<MdWorkOutline color={"white"} className="btn_class" />}
            onclick={() => setActiveLink("/hire")}
          />
        </div>
        

        {/* <div className="imgcontainer">
        <img src="/assets/logo.png" alt="khalidnadish" className="btn_contaenr_img" />
        </div> */}
      </div>
      </Suspense>
    </>
  );
};

export default BouttonArea;
