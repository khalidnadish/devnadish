import React from 'react'
import Button from '@mui/material/Button';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@mui/material';

function Modalme({open,setOpen,title,children}) {
    const handleClose = () => setOpen(false);
    console.log('Modal render')
  

  return (
    <div>
      
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        keepMounted 
      >
         <DialogActions sx={{padding: "5px",justifyContent: "space-between"}}>
          <Typography sx={{margin: "5px",fontWeight: "bold"}}> {title}</Typography>
          <Button size="small" variant="outlined" onClick={handleClose} color="primary" autoFocus sx={{minWidth:0}}>
            X
          </Button>
        </DialogActions>
        {/* <DialogTitle sx={{paddingBottom: "10px"}}>
        

         {title}
           
        </DialogTitle> */}
        <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
           
        </DialogContentText>


         {children}
           
        </DialogContent>
       
        
      </Dialog>
    </div>
  );
}



export default Modalme
