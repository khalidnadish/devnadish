import { useContext } from "react";
import { MdLanguage } from "react-icons/md";
import { TbFreeRights } from "react-icons/tb";
import { CgDarkMode } from "react-icons/cg";
import { FaDonate } from "react-icons/fa";
import { ProfileDetail } from "../../helper/context";
import "./corner.css"
export const Coner = () => {
  const { setActiveLink, activeLang, setActiveLang } =
    useContext(ProfileDetail);
  const conerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",


  };
  const handleLanguage = () => {
    setActiveLang((pre) => !activeLang);
    if (activeLang) {
      document.dir = "ltr";
    } else {
      document.dir = "rtl";
    }
  };
  return (
    <>
      <div
        className="topleft"
        style={conerStyle}
        onClick={() => setActiveLink("/sendme")}
      >
        <TbFreeRights color="white" size={"1.5rem"} />
      </div>

      <div
        className="topright"
        style={conerStyle}
        onClick={() => handleLanguage()}
      >
        <MdLanguage color="white" size={"1.5rem"} />
        {activeLang}
      </div>

      <div className="buttomleft" style={conerStyle}>
        <CgDarkMode color="white" size={"1.5rem"} />
      </div>

      <div
        className="buttomright"
        style={conerStyle}
        onClick={() => setActiveLink("/paypal")}
      >
        <FaDonate color="white" size={"1.5rem"} />
      </div>
    </>
  );
};
