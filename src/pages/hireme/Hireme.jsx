
import React, { useRef } from "react";


import  Grid  from "@mui/material/Grid";
import  TextField from "@mui/material/TextField";
import  Button from "@mui/material/Button";
import  Card from "@mui/material/Card";
import  CardContent from "@mui/material/CardContent";
import  Typography from "@mui/material/Typography";
import { useTranslation } from "react-i18next";





import emailjs from "@emailjs/browser";
function Hireme() {
  const { t } = useTranslation();


  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_do64766",
        "template_hireme",
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
     
      <div className="App">
        <Typography gutterBottom variant="h5" align="center">
         {t("hiremeTitle")}
        </Typography>
        <Grid>
          <Card
            style={{ padding: "20px 5px", margin: "0 auto",maxWidth: "90%" }}
          >
            <CardContent>
              
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                
                {t("hiremelongTitle")}
              </Typography>
              <form ref={form} onSubmit={sendEmail}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      // placeholder="Enter first name"
                      label=   {t("firstnameTitle")}
                      variant="outlined"
                      fullWidth
                      required
                      name="sender_name"
                      size="small"                    />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      // placeholder="Enter last name"
                      label={t("lastnameTitle")}
                      variant="outlined"
                      fullWidth
                      required
                      size="small"  
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      type="email"
                      // placeholder="Enter email"
                      label={t("emailTitle")}
                      variant="outlined"
                      fullWidth
                      required
                      name="sender_name"
                      size="small"  
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      // type="number"
                      // placeholder="Enter phone number"
                      label={t("phoneTitle")}
                      variant="outlined"
                      fullWidth
                      required
                      name="phone" 
                      size="small"  
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label={t("messageTitle")}
                      multiline
                      rows={4}
                      placeholder={t("msgplaceholder")}
                      variant="outlined"
                      fullWidth
                      required
                      size="small"  
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      value="Send"
                      fullWidth
                      // size="small"  
                    >
                      {t("submitterTitle")}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </div>
     
    </>
  );
}

export default Hireme;
