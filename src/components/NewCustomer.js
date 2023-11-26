import React, { useState } from 'react';
import { Grid, Typography, TextField, Box, Button, Dialog, DialogTitle, DialogContent, DialogActions, TableContainer, Paper, Table, TableBody, TableCell, TableRow } from '@mui/material';

const NewCustomer = () => {
    const [openPreview, setOpenPreview] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phoneNumber: '',
        address: '',
        city: '',
        state: 'Bihar',
        country: '',
        postalCode: '',
        plotId: '',
        dateOfPurchase: '',
        purchaseAmount: '',
        paymentMode: '',
        propertyType: '',
        additionalNotes: '',
        subscribeUpdates: false,
    });

    const handlePreviewOpen = () => {
        setOpenPreview(true);
    };

    const handlePreviewClose = () => {
        setOpenPreview(false);
    };

    const handleFormSubmit = () => {
        handlePreviewOpen();
    };

    return (
        <Box sx={{ margin: '20px' }}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Typography variant="h6">Customer Details</Typography>
                    <TextField label="Full Name" fullWidth margin="normal" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} />
                    <TextField label="Email" fullWidth margin="normal" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    <TextField label="Phone Number" fullWidth margin="normal" value={formData.phoneNumber} onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} />
                    <TextField label="Address" fullWidth margin="normal" value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} />
                    <TextField label="City" fullWidth margin="normal" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} />
                    <TextField label="Country" fullWidth margin="normal" value={formData.country} onChange={(e) => setFormData({ ...formData, country: e.target.value })} />
                    <TextField label="Postal Code" fullWidth margin="normal" value={formData.postalCode} onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })} />
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="h6">Purchase Information</Typography>
                    <TextField label="Plot ID" fullWidth margin="normal" value={formData.plotId} onChange={(e) => setFormData({ ...formData, plotId: e.target.value })} />
                    <TextField label="Date of Purchase" fullWidth margin="normal" value={formData.dateOfPurchase} onChange={(e) => setFormData({ ...formData, dateOfPurchase: e.target.value })} />
                    <TextField label="Purchase Amount" fullWidth margin="normal" value={formData.purchaseAmount} onChange={(e) => setFormData({ ...formData, purchaseAmount: e.target.value })} />
                    <TextField label="Payment Mode" fullWidth margin="normal" value={formData.paymentMode} onChange={(e) => setFormData({ ...formData, paymentMode: e.target.value })} />
                    <TextField label="Property Type" fullWidth margin="normal" value={formData.propertyType} onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })} />
                    <TextField label="Additional Notes" fullWidth margin="normal" value={formData.additionalNotes} onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })} />
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" onClick={handleFormSubmit}>Preview</Button>
            <Dialog open={openPreview} onClose={handlePreviewClose} fullScreen>
                <DialogTitle>Invoice Preview</DialogTitle>
                <DialogContent>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableBody>
                                {Object.entries(formData).map(([key, value]) => (
                                    <TableRow key={key}>
                                        <TableCell><strong>{key}</strong></TableCell>
                                        <TableCell>{value}</TableCell>
                                    </TableRow> 
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handlePreviewClose} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default NewCustomer;
