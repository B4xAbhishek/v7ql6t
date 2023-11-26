import React, { useState } from 'react';
import {
  Typography,
  Avatar,
  Paper,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Divider,
  Grid,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DialogRefreeDetails from './DialogRefreeDetails';
import { formatCurrency } from '../utils/utils';

const RefereeDetails = () => {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false); 
  const [editedReferredPerson, setEditedReferredPerson] = useState({
    name: 'Jane Smith',
    phoneNumber: '+91987654321',
    // Other basic details
    amountToBePaid: '',
    paidBy: '',
    mode: '',
    date: '',
  });

  // Example data for the referred person and their referrals
  const [referredPerson, setReferredPerson] = useState({
    name: 'Jane Smith',
    phoneNumber: '+91987654321',
    // Add other basic details for the referred person
  });

  const [referredPeople, setReferredPeople] = useState([
    {
        name: 'Referred Person 1',
        phoneNumber: '+91XXXXXXXXXX',
        commission: '₹2000',
        referralType: 'Primary Referral',
        amountPaidDetails: 'Details about payment',
        plot: 'Plot details',
        katha: 'Katha details',
        date: '2023-11-15',
        paymentCode: 'Payment code',
        paymentByReferee: '₹1500',
    },
    {
        name: 'Referred Person 2',
        phoneNumber: '+91XXXXXXXXXX',
        commission: '₹30000',
        referralType: 'Secondary Referral',
        amountPaidDetails: 'Details about payment',
        plot: 'Plot details',
        katha: 'Katha details',
        date: '2023-11-20',
        paymentCode: 'Payment code',
        paymentByReferee: '₹2500',
    },
    // Add more referred people as needed
]);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission and update the referred person's details
    // You can use setReferredPerson to update the state with the new details
    setOpen(false);
    setEditMode(false);
  };

  return (
    <div>
      <Grid container spacing={2} marginBottom={2}>
        <Grid item xs={12}>
          <Paper style={{ padding: '20px' }}>
            <Avatar alt={referredPerson.name} src={referredPerson?.photo} />
            <Typography variant="h4" >
              {referredPerson.name}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone Number: {referredPerson.phoneNumber}
            </Typography>
            <Typography variant="body1" gutterBottom>
              location: {referredPerson.phoneNumber}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Typography variant="h5" gutterBottom>
        People Referred by {referredPerson.name}
      </Typography>
      <Grid container spacing={2}>
        {referredPeople.map((person, index) => (
          <Grid key={index} item xs={6}>
            <Card style={{ marginBottom: '15px' }}>
              <CardHeader
                title={person.name}
                action={
                  <IconButton aria-label="edit" onClick={handleClickOpen}>
                    <EditIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Typography variant="body1" gutterBottom>
                  Commission to be Paid: {formatCurrency(person.commission)}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Referral Type: {person.referralType}
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Amount Paid Details: {(person.amountPaidDetails)}
                </Typography>
              <Typography variant="body1" gutterBottom>
                Phone Number: {person.phoneNumber}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Updated date: {person.date}
              </Typography>
                {/* Add more fields for details or actions */}
              </CardContent>
              <Divider />
              {/* Add other components or buttons as needed */}
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Dialog for editing referred person's details */}
      <DialogRefreeDetails
        open={open}
        handleClose={handleClose}
        referredPeople={referredPeople}
        setReferredPeople={setReferredPeople}
      />
    </div>
  );
};

export default RefereeDetails;
