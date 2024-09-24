import React from 'react';
import { Card, CardContent, Typography, Button, CardMedia, Box } from '@mui/material';


const EventCard = ({ imageUrl, status, title, date, buttonText}) => {
  return (
    <Card style={{ width: '354px', height: '473px', borderRadius: '12px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title="error"
      />
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',height: "247px",textAlign: 'center',justifyContent:"center",padding:"25px 50px" }} >
        <div style={{ backgroundColor: status === 'Active' ? '#A2F5A4' : '#FF3C002B', borderRadius: '5px', width: '87px',height: '21px', padding: '5px', marginBottom: '15px', alignContent:"center"}}>
          <Typography variant="subtitle1" sx={{ fontFamily: 'Inter',fontSize: '12px',fontWeight: 600,lineHeight: '16px',textAlign: 'center',color: '#666666',}}>
            {status}
          </Typography>
        </div>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{fontFamily: "Poppins",fontSize: '18px',fontWeight: '600',lineHeight: '28px',textAlign: 'left'}}>
          {date}
        </Typography>
        <Button variant="contained" color="success" style={{ marginTop: '20px', width: '100%' }}>
          {buttonText}
        </Button>
        </CardContent>
    </Card>
  );
};


export default EventCard