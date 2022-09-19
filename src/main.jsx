import React,{Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
 
import './i18n';
// import './index.css'
 
// import {ProfileProvider } from "./helper/context"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
{/* <Suspense fallback={<h1>loding.....</h1>}> */}
    <>
    <p> loadin.. </p>
        <App />
    </>
    
      
   
    {/* </Suspense>  */}
  </React.StrictMode>
);
