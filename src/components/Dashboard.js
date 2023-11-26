import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import {
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TextField,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Toolbar,
    Grid,
    CardContent,
    Card,
    Typography,
    IconButton,
} from "@mui/material";
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AddchartIcon from '@mui/icons-material/Addchart';

const MyTable = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [openPopup, setOpenPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState({});

    // Dummy data for the table
    const dummyData = [
        {
            name: "John Doe",
            fatherName: "Michael Doe",
            khata: "K-001",
            totalAmount: "$5000",
            date: "2023-10-30",
            mode: "Cash",
            plot: "A-12",
            time: "10:30 AM",
            credit: "$2000",
            area: "1200 sq.ft",
            balance: "$3000",
        },
        {
            name: "Jane Smith",
            fatherName: "Robert Smith",
            khata: "K-002",
            totalAmount: "$8000",
            date: "2023-10-29",
            mode: "Online",
            plot: "B-15",
            time: "11:45 AM",
            credit: "$3000",
            area: "1500 sq.ft",
            balance: "$5000",
        },
        {
            name: "Alice Johnson",
            fatherName: "David Johnson",
            khata: "K-003",
            totalAmount: "$6500",
            date: "2023-10-28",
            mode: "Credit Card",
            plot: "C-22",
            time: "09:15 AM",
            credit: "$2500",
            area: "1100 sq.ft",
            balance: "$4000",
        },
        // Additional data - add more rows as needed
    ];

    useEffect(() => {
        setData(dummyData);
        setFilteredData(dummyData);
    }, []);

    const handleSearchChange = (event) => {
        const searchText = event.target.value.toLowerCase();
        setSearch(searchText);

        const filtered = data.filter(row =>
            Object.values(row).some(val => typeof val === 'string' && val.toLowerCase().includes(searchText))
        );
        setFilteredData(filtered);
    };

    const openDetailsPopup = (user) => {
        setSelectedUser(user);
        setOpenPopup(true);
    };

    const closeDetailsPopup = () => {
        setOpenPopup(false);
        setSelectedUser({});
    };


    const exportToPDF = async () => {
    };

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

            <Toolbar>
                <TextField
                    label="Search"
                    variant="outlined"
                    value={search}
                    onChange={handleSearchChange}
                    style={{ margin: '10px' }}
                />
                <Button variant="contained" onClick={exportToPDF}>Export to PDF</Button>
            </Toolbar>

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Father's Name</TableCell>
                        <TableCell>Khata</TableCell>
                        <TableCell>Total Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Mode</TableCell>
                        <TableCell>Plot</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Credit</TableCell>
                        <TableCell>Area</TableCell>
                        <TableCell>Balance</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {filteredData.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.fatherName}</TableCell>
                            <TableCell>{row.khata}</TableCell>
                            <TableCell>{row.totalAmount}</TableCell>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.mode}</TableCell>
                            <TableCell>{row.plot}</TableCell>
                            <TableCell>{row.time}</TableCell>
                            <TableCell>{row.credit}</TableCell>
                            <TableCell>{row.area}</TableCell>
                            <TableCell>{row.balance}</TableCell>
                            <TableCell>SOLD</TableCell>
                            <TableCell>
                                <Button onClick={() => openDetailsPopup(row)}>View Details</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Dialog open={openPopup} onClose={closeDetailsPopup}>
                <DialogTitle>User Details</DialogTitle>
                <DialogContent>
                    <p>Name: {selectedUser.name}</p>
                    <p>Father's Name: {selectedUser.fatherName}</p>
                    {/* Add more details as needed */}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeDetailsPopup}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default MyTable;
