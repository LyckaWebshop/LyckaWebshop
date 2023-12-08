import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ThankYou({ open, extrapayment, variablePayment, totalPayment, setOpen }) {
    function leaveSurvey() {
        window.open("https://app.prolific.co/submissions/complete?cc=7B356C5D", "_self");
    }

    return (
        <div>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Thanks for participation!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Your fixed payment is: {extrapayment} £ <br/>
                        Your variable payment is: {variablePayment} £ <br/>
                        Your total payment is: {totalPayment} £ <br/><br/>
                        <Button size="small" type="button" variant="contained" color="primary" onClick={() => { leaveSurvey(); setOpen(false); }}>Receive payment</Button><br/>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}
