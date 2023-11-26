import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from '@mui/material';

const DialogRefreeDetails = ({ open, handleClose, referredPeople, setReferredPeople }) => {
    const [editMode, setEditMode] = useState(false);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // Logic to handle form submission and update the referred person's details
        // Use setReferredPeople to update the state with the new details
        handleClose();
    };

    const toggleEditMode = () => {
        setEditMode(!editMode);
    };

    return (
        <Dialog open={open} onClose={handleClose} scroll="paper" disableEscapeKeyDown={true}>
            <DialogTitle>Edit Details</DialogTitle>
            <DialogContent>
                <form onSubmit={handleFormSubmit}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div style={{ width: '45%' }}>
                            <TextField
                                label="Name"
                                value={referredPeople.name}
                                InputProps={{ readOnly: true }}
                                fullWidth
                                margin="normal"
                                disabled={!editMode}
                            />
                            <TextField
                                label="Phone Number"
                                value={referredPeople.phoneNumber}
                                InputProps={{ readOnly: true }}
                                fullWidth
                                margin="normal"
                                disabled={!editMode}
                            />
                        </div>
                        <div style={{ width: '45%' }}>
                            <TextField
                                label="Amount to be Paid"
                                value={referredPeople.amountToBePaid}
                                onChange={(e) => setReferredPeople({ ...referredPeople, amountToBePaid: e.target.value })}
                                fullWidth
                                margin="normal"
                                disabled={!editMode}
                            />
                            <TextField
                                label="Paid By"
                                value={referredPeople.paidBy}
                                onChange={(e) => setReferredPeople({ ...referredPeople, paidBy: e.target.value })}
                                fullWidth
                                margin="normal"
                                disabled={!editMode}
                            />
                            <TextField
                                label="Mode"
                                value={referredPeople.mode}
                                onChange={(e) => setReferredPeople({ ...referredPeople, mode: e.target.value })}
                                fullWidth
                                margin="normal"
                                disabled={!editMode}
                            />
                            <TextField
                                type="date"
                                value={referredPeople.date}
                                onChange={(e) => setReferredPeople({ ...referredPeople, date: e.target.value })}
                                fullWidth
                                margin="normal"
                                disabled={!editMode}
                            />
                        </div>
                    </div>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={toggleEditMode} color="primary">
                            {editMode ? 'Save' : 'Edit'}
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default DialogRefreeDetails;
