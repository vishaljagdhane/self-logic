import React from "react";
import { Box, Drawer, List, ListItem, ListItemText, Typography, IconButton } from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function ApplicationLeftSideBar({ onMenuItemClick, selectedModel, searchTerm }) {
  const adminMenuItems = [
    { label: "Create User", value: "create-user" },
    { label: "Update User", value: "update-user" },
    { label: "Delete User", value: "delete-user" },
  ];

  const userMenuItems = [
    { label: "User Dashboard", value: "user-dashboard" },
    { label: "Profile", value: "profile" },
  ];

  const integrationMenuItems = [
    { label: "Create Database", value: "create-database" },
    { label: "Create Table", value: "create-table" },
    { label: "Edit Table", value: "edit-table" },
    { label: "Delete Table", value: "delete-table" },
    { label: "Create Dashboard", value: "create-dashboard" },
    { label: "Create User", value: "create-user" },
    { label: "Update User", value: "update-user" },
    { label: "Delete User", value: "delete-user" },
  ];

  // Filter the menu items based on the search term
  const filterMenuItems = (menuItems) => {
    if (!searchTerm) return menuItems;
    return menuItems.filter(item => item.label.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  const getMenuItemsForModule = () => {
    switch (selectedModel) {
      case "Intregation Module":
        return filterMenuItems(integrationMenuItems);
      case "User Module":
        return filterMenuItems(userMenuItems);
      case "Admin Module":
      default:
        return filterMenuItems(adminMenuItems);
    }
  };

  const menuItems = getMenuItemsForModule();

  return (
    <Drawer
      sx={{
        width: "14%",
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: "14%",
          height: "100vh", // Ensure the drawer height is 100vh
          borderRadius: "10px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        {/* Title and Logo Section */}
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', }}>
          <Typography variant="h6">Welcome To Data Store</Typography>
       
        </Box>

        {/* Menu Section */}
        <Box sx={{ flex: 1, overflowY: 'auto', paddingTop: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.value}
                onClick={() => onMenuItemClick(item.value)}
                sx={{
                  backgroundColor: selectedModel === item.value ? "#d1e7ff" : "transparent", // Active item styling
                  borderRadius: "5px",
                  marginBottom: "5px",
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    fontWeight: selectedModel === item.value ? 'bold' : 'normal', // Bold active item text
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Date, Time, and Notification Section */}
        <Box sx={{ padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2">{`${new Date().toLocaleString('default', { weekday: 'long' })}, ${new Date().toLocaleDateString()}`}</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>{new Date().toLocaleTimeString()}</Typography>
            <IconButton color="primary">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
