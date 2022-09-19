import React, { useEffect, useContext } from "react";
import Cookies from "js-cookie";
import i18next from "i18next";
import { ProfileDetail } from "../../helper/context";
import { IconButton } from "@mui/material";
function Languagebtn({setLang1,langimg, setLangimage}) {


  const changeLang = () => {
    if (Cookies.get("i18next") === "ar") {
      i18next.changeLanguage("en");
      document.body.dir = "ltr";
      setLangimage("/assets/locales/en/united-states.png")
      setLang1("en")
      setActiveLang((prev) => "english");
    } else {
      i18next.changeLanguage("ar");
      document.body.dir = "rtl";
      setActiveLang((prev) => "arabic");
      setLangimage("/assets/locales/en/saudi-arabia.png")
      setLang1("ar")
    }
  };
  const { setActiveLang, activeLang } = useContext(ProfileDetail);

  return (
    <>
      <IconButton
        variant="outlined"
        sx={{
          border: 0,
          minWidth: 0,
          padding: "0px",
          height: "fit-content",
        }}
        onClick={changeLang}
      >
        <img
          src={langimg}
          alt="برمجة مواقع متاجر الكترونية  تصميم مواقع"
          className="langphoto"
        />
      </IconButton>
    </>
  );
}

export default Languagebtn;
