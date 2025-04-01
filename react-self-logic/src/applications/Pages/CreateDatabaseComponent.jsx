import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import React, { useState } from 'react';
import ApiServices from '../ApiServices/ApiServices';

export default function CreateDatabaseComponent() {
  const [createDatabase, setCreateDatabase] = useState('');
  const { postCreateDatabase } = ApiServices(); // Assuming ApiServices returns an object with postCreateDatabase function

  // Function to handle value change in the TextField
  const geTingValueTextFild = (e) => {
    setCreateDatabase(e.target.value);
  };

  const handleCreateDatabaseClick = async () => {
    if (createDatabase.trim() === '') {
      console.log('Please enter a database name.');
      return;
    }

    try {
      const response = await postCreateDatabase(createDatabase); // Assuming postCreateDatabase is correctly handling the request
      console.log(response.data);
      setCreateDatabase(''); // Clear the input field after submitting
    } catch (error) {
      console.log('Error creating database:', error);
    }
  };

  return (
    <Box sx={{ width: '100%', height: '100vh', padding: '10px' }}>
      <Box sx={{ boxShadow: 2, width: '700px', height: '400px', padding: '10px', margin: '0px auto', background: '#fff', borderRadius: 5 }}>
        <Box sx={{ position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ position: 'relative', width: '100%', padding: 2, borderBottom: '2px solid #ccc' }}>
            <Typography variant='h4' sx={{ textTransform: 'uppercase', textAlign: 'center', letterSpacing: 5 }}>
              Create DataBase
            </Typography>
          </Box>
          <Box sx={{ position: 'relative', padding: 2 }}>
            <TextField
              sx={{ width: '100%' }}
              label="Please Enter Your DataBase Name"
              variant="outlined"
              placeholder="Your Database"
              value={createDatabase} // Bind the value of the input field to the state
              onChange={geTingValueTextFild} // Update state on change
            />
          </Box>
          <Button variant="contained" onClick={handleCreateDatabaseClick}>Create DataBase</Button>
        </Box>
      </Box>
    </Box>
  );
}
