import React, { useState } from "react";
import { Box, Drawer, Typography, IconButton } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function UserInformationDrawerRightSide() {
    const [open, setOpen] = useState(false); // State to control the drawer visibility

    const handleCloseDrawer = () => {
        setOpen(false);
      }
  // Dummy user data (replace this with actual data)
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    avatarUrl: "https://www.example.com/avatar.jpg" // Placeholder avatar URL
  };

  return (
    <Drawer
      sx={{
        width: "20%", // Adjust width as needed
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "20%",
          height: "100vh", // Full height of the screen
          borderRadius: "10px",
        },
      }}
      variant="permanent"
      anchor="right"
      open={open}
      onClose={handleCloseDrawer}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* User Info Section */}
        <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#1F75FE', color: '#fff' }}>
          <img 
            src={user.avatarUrl} 
            alt="User Avatar" 
            style={{ borderRadius: '50%', width: '80px', height: '80px', marginBottom: '10px' }} 
          />
          <Typography variant="h6">{user.name}</Typography>
          <Typography variant="body2">{user.role}</Typography>
          <Typography variant="body2">{user.email}</Typography>
        </Box>

        {/* Notifications Section */}
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', bgcolor: '#1F75FE', color: '#fff' }}>
          <Typography variant="body2" sx={{ marginRight: 2 }}>
            {`${new Date().toLocaleString('default', { weekday: 'long' })}, ${new Date().toLocaleDateString()}`}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              {new Date().toLocaleTimeString()}
            </Typography>
            <IconButton color="primary">
              <NotificationsIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
