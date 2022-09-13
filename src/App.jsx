import React, {
  memo,
  lazy,
  Suspense,
  useState,
  useEffect,
  useMemo,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
// import { Artheme, Entheme } from "./helper/Mytheme";
import Cookies from "js-cookie";
import { ProfileProvider } from "./helper/context";
import { Button, Container, createTheme, CssBaseline, Paper, ScopedCssBaseline } from "@mui/material";
import "./styles1.css";
import { dark } from "@mui/material/styles/createPalette";


const Footer = lazy(() => import("./component/footer/Footer"));
const Sidebar = lazy(() => import("./component/sidebar/Sidebar"));
const Loader = lazy(() => import("./component/loader/Loader"));
const BodyArea = lazy(() => import("./component/body/BodyArea"));
const Memo_footer = memo(Footer);
function App() {
  const [lang, setLang] = useState(Cookies.get("i18next"));
  const [langimg, setLangimage] = useState("");
  const [themeMode, setThemeMode] = useState(true);

  const Artheme = 
      createTheme({
       
        
        typography: {
          fontFamily: "Noto Sans Arabic",
          h4: {
            fontFamily: "Noto Sans Arabic",
          },
          h5: {
            fontFamily: "Noto Sans Arabic",
          },
          subtitle1: {
            fontFamily: "Noto Sans Arabic",
          },
          subtitle2: {
            fontFamily: "Noto Sans Arabic",
            fontSize: ".9rem",
            fontWeight: "800",
          },
          bigHi: {
            fontFamily: "Cairo",
            fontSize: "2.2rem",
            fontWeight: "600",
          },
          btnFont: {
            fontFamily: "Lemonada",
            fontSize: "2.2rem",
            fontWeight: "400",
          },
        },
      }) 

  const Entheme =  
     
      createTheme({
        
        // palette:{
        //  mode: themeMode ? "dark" : "light" ,
        // background: {
        //   default: "#222538",
        //   dark:"#222538",
        //   light:"#222458"
        // }},
        typography: {
          fontFamily: "lato",
          h4: {
            fontFamily: "Cairo",
          },
          h5: {
            fontFamily: "Cairo",
          },
          subtitle2: {
            fontFamily: "lato",
            fontSize: ".9rem",
            fontWeight: "400",
          },
          subtitle1: {
            fontFamily: "lato",
            fontSize: "1rem",
          },
          bigHi: {
            fontFamily: "Rubik Maze",
            fontSize: "3rem",
          },
        },
      }) 

      const handleChangeMode=()=>{
        setThemeMode(pre=>!themeMode)
      }
  useEffect(() => {
    if (Cookies.get("i18next") === "ar") {
      document.body.dir = "rtl";
      setLang("ar");
      setLangimage("/assets/locales/en/united-states.png");
      document.title = "خالد نديش";
    } else {
      document.body.dir = "ltr";
      setLang("en");

      setLangimage("/assets/locales/ar/saudi-arabia.png");
      document.title = "khalid nadish";
    }
  }, [Cookies.get("i18next")]);

  return (
    <>
      <ThemeProvider theme={lang === "ar" ? Artheme : Entheme}>
        <Suspense fallback={<Loader />}>
          <ProfileProvider>
    {/* <CssBaseline/> */}
           
     
            
            {/* <Paper color="background" sx={{width: "100%", height: "100%"}}> */}
            {/* <Button
              sx={{position: "absolute",top: "100px", left: "0", }}
              variant="contained"
              onClick={ handleChangeMode }
            >
              {themeMode ? "dark" : "light"}
            </Button> */}
      
              <div className="footer">
                <Memo_footer
                  setLang1={setLang}
                  langimg={langimg}
                  setLangimage={setLangimage}
                />
                {/* <Loader /> */}
              </div>
              <div className="page">
                <Sidebar />

                <div className="mainbody">
                  <BodyArea />
                </div>
              </div>
            {/* </Paper> */}
            
            
          </ProfileProvider>
        </Suspense>
      </ThemeProvider>
    </>
  );
}
export default App;
