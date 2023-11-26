import React from 'react';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
} from '@mui/material';
import { Link } from 'react-router-dom';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddchartIcon from '@mui/icons-material/Addchart';
import { Add } from '@mui/icons-material'

const Referrals = () => {
  // Example data for referrals
  const referrals = [
    {
      name: 'John Doe',
      phoneNumber: '+1234567890',
      referredPerson: 'Jane Smith',
      date: '2023-10-30',
      status: 'Completed',
      amountAwarded: '$50',
      additionalDetails: 'Client signed up for premium plan',
      totalReferrals: 2
    },
    // Add more referral entries as needed
  ];

  return (
    <div>
      <Grid container spacing={2}>
                {[1, 2, 3, 4].map((row, index) => (
                    <Grid key={index} item xs={12} sm={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" style={{ color: '#4CAF50' }}>Registered Plots</Typography>
                                <Typography variant="body2" color="textSecondary">Earn with our referral program</Typography>
                                
                                <Grid container spacing={1} style={{ marginTop: '10px' }}>
                                    <Grid item xs={4}>
                                        <IconButton color="primary" onClick={() => {/* Handle location icon click */}}>
                                            <AddLocationIcon /> Patna
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton color="primary" onClick={() => {/* Handle money icon click */}}>
                                            <CurrencyRupeeIcon /> 300
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <IconButton color="primary" onClick={() => {/* Handle chart icon click */}}>
                                            <AddchartIcon /> 300
                                        </IconButton>
                                    </Grid>
                                </Grid>

                                <Button 
                                    variant="contained" 
                                    color="primary"
                                    style={{ marginTop: '10px' }}
                                >
                                    View Details
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Referral Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Referred Person</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Amount Awarded</TableCell>
              <TableCell>Additional Details</TableCell>
              <TableCell>Total Referrals</TableCell>
              <TableCell>View Details</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {referrals.map((referral, index) => (
              <TableRow key={index}>
                <TableCell>{referral.name}</TableCell>
                <TableCell>{referral.phoneNumber}</TableCell>
                <TableCell>{referral.referredPerson}</TableCell>
                <TableCell>{referral.date}</TableCell>
                <TableCell>{referral.status}</TableCell>
                <TableCell>{referral.amountAwarded}</TableCell>
                <TableCell>{referral.additionalDetails}</TableCell>
                <TableCell>{referral.totalReferrals}</TableCell>
                <TableCell>
                  <Link to={`/referrals/${referral.referredPerson}`} style={{ textDecoration: 'none' }}>
                    <Button variant="contained" color="primary">View Details</Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default Referrals;
