import React, { lazy, Suspense } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaBehance } from "react-icons/fa";
import Button from "@mui/material/Button";
 
import { useTranslation } from "react-i18next";

import "./footer.css";

const Loader =lazy(()=>import("../loader/Loader"));
const Modalme= lazy(() => import("../modal/Modalme"));
const Languagebtn = lazy(() => import("./Languagebtn"));
const MainMailForm = lazy(() => import("../mailForm/MailForm"));


const Footer = ({ setLang1 ,langimg, setLangimage}) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(false);
  

  console.count("comp: Footer");

  return (
    <>
      <div className="footercontiner">
        <Languagebtn
          setLang1={setLang1}
          langimg={langimg}
          setLangimage={setLangimage}
        />
        <Button
          variant="contained"
          color="error"
          sx={{
            borderRadius: "50%",
            minWidth: 0,
            padding: "6px",
            height: "fit-content",
          }}
          onClick={() => {
            setOpen(true);
          }}
        >
          <MdAlternateEmail color="white" />
        </Button>

        <Button
          variant="contained"
          color="success"
          sx={{
            borderRadius: "50%",
            minWidth: 0,
            padding: "6px",
            height: "fit-content",
          }}
        >
          <BsWhatsapp color="white" />
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50%",
            minWidth: 0,
            padding: "6px",
            height: "fit-content",
          }}
          href="https://www.linkedin.com/in/khalidnadish/"
          target="_blank"
        >
          <FaLinkedin color="white" />
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50%",
            minWidth: 0,
            padding: "6px",
            height: "fit-content",
          }}
          href="https://www.behance.net/khalidnadish"
          target="_blank"
        >
          <FaBehance color="white" size={"1rem"} />
        </Button>

        <Button
          variant="contained"
          color="primary"
          sx={{
            borderRadius: "50%",
            minWidth: 0,
            padding: "6px",
            height: "fit-content",
          }}
        >
          <FiTwitter color="white" />
        </Button>
      </div>
      {open && (
        <Suspense fallback={<Loader />}>
          <Modalme open={open} setOpen={setOpen} title={t("sendMeEmail")}>
            <MainMailForm />
          </Modalme>
        </Suspense>
      )}
    </>
  );
};
export default Footer;
