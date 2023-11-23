import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormDialog from "./FormDialog";

export default function Intro3({ open, setOpen }) {
  const [rOpen, rSetOpen] = useState(false);
  const randomizedGroups = ["FCON", "TACT", "SPAS", "FRET"];
  const [randomizedGroup, setRandomizedGroup] = useState(null);

  useEffect(() => {
    // Zufälligen Wert einmal beim ersten Rendern der Komponente setzen
    if (!randomizedGroup) {
      setRandomizedGroup(randomizedGroups[Math.floor(Math.random() * 4)]);
    }
  }, [randomizedGroup]);

  const handleClose = () => {
    setOpen(false);
    handleClickOpen();
  };

  const handleClickOpen = () => {
    rSetOpen(true);
  };

  return (
    <div>
      <FormDialog open={rOpen} setOpen={rSetOpen} />
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Introduction</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <p>
              This is the code for your webshop access:
              <b> {randomizedGroup}</b>
              <br />
              Please keep it in mind or write it down.
              You need the code to proceed.
              <br /> <br />
              Please keep in mind that the webshop takes a second to load.
              Press the following button, which leads to the webshop.
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Go to webshop
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
