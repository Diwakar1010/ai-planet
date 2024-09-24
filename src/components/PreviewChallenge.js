import React from 'react';
import { Box, Typography, Chip, Button, Divider } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link, useLocation } from 'react-router-dom';

const PreviewChallenge = () => {
    const location = useLocation();
    const event = location.state;

    return (
        <>
            <Box sx={{ width: '1442px',height:"419px", backgroundColor: '#004455', }}>
                <Box
                    sx={{
                        padding:"100px",
                        color: 'white',
                        textAlign: 'center',
                        width: '818px',
                        height:"228px"
                    }}
                >
                    <Box display="flex" justifyContent="center" alignItems="center" mb={2} sx={{ backgroundColor: "#FFCE5C" , borderRadius:"10px", width:"464px", marginLeft:'60px' }}>
                        <AccessTimeIcon sx={{ mr: 1,color:"black" }} />
                        <Typography variant="body2" sx={{color:'black'}}>
                            Starts on {event.date}
                        </Typography>
                    </Box>

                    <Typography variant="h4" component="div" fontWeight="bold">
                        {event.title}
                    </Typography>

                    <Typography variant="body1" color="whitesmoke" sx={{ mt: 1, mb: 3 }}>
                        {event.des}
                    </Typography>

                    <Chip label={event.level} color="primary" sx={{ backgroundColor: '#ddd', color: '#333',width:"102px" }} />
                </Box>
            </Box>
            <Box
                sx={{
                    backgroundColor: '#f9f9f9',
                    padding: '20px',
                    borderRadius: '8px',
                    marginTop: '20px',
                }}
            >
                <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                    <Typography variant="h6" component="div" fontWeight="bold" color="textPrimary">
                        Overview
                    </Typography>
                    <Box>
                        <Link to='/create-challenge' state={event} style={{ textDecoration: 'none' }} >
                            <Button variant="contained" color="success" sx={{ mr: 2 }}>
                                Edit
                            </Button>
                        </Link>
                        <Button variant="outlined" color="error">
                            Delete
                        </Button>
                    </Box>
                </Box>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body1" color="textSecondary">
                    {event.des}
                </Typography>
            </Box>
        </>


    );
};


export default PreviewChallenge;
