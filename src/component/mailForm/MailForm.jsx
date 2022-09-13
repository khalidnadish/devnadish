import React, { useRef,useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
 
import "./mailForm.css"
function MailForm() {
  const { t } = useTranslation();
   console.log("MailForm");
  const [mailCheck, setmailCheck] = useState("")  
  const [mailstute, setMailstute] = useState(false)  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_do64766",
        "template_eaxtuis",
        form.current,
        "7XfqPbNMPjfroy3ja"
      )
      .then(
        (result) => {
            setmailCheck(result.text)
            setMailstute(true)
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
      
  };

  return (
    <>
      <div className="formcontainer">
        <form ref={form} onSubmit={sendEmail}>
          <div className="formstyle">
          
            <div  className="phoneinfo">
              <label >{t("firstnameTitle")}</label>
              <input className="inputstyle" type="text" id="sendername" name="sender_name" />
              <label>{t("phoneTitle")}</label>
              <input  className="inputstyle" type="text" name="phone" />

            <label>{t("mailsubject")}</label>
            <input className="inputstyle" type="text" name="Subject" />

            <label>{t("emailTitle")}</label>
            <input className="inputstyle" type="email" name="sender_name" />

            <label>{t("messageTitle")}</label>
            <textarea  name="message" />
            <input className="css-button" type="submit" value={t("submitterTitle")}/>
            </div>
            
          </div>
        </form>
        
       
      </div>
    </>
  );
}

export default MailForm;
