import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search"; // Import SearchIcon

export default function ApplicationLeftSideBar({
  onMenuItemClick,
  selectedModel,
}) {
  // Local state for search term
  const [searchTerm, setSearchTerm] = useState("");

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
    { label: "Create Vendor", value: "create-vendor" },
  ];

  // Filter the menu items based on the search term
  const filterMenuItems = (menuItems) => {
    if (!searchTerm) return menuItems;
    return menuItems.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getMenuItemsForModule = () => {
    switch (selectedModel) {
      case "Integration Module":
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
        width: 240, // Standard width for Material UI Drawer
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240, // Matching width for the paper
          height: "100vh",
          backgroundColor: "#fff", // Keeping a neutral background color
          borderRight: "1px solid #ddd", // Subtle border for separation
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* Title and Logo Section */}
        <Box
          sx={{
            padding: "14px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1976d2", // Material UI primary blue color
            color: "#fff",
          }}
        >
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: "center" }}>
            Welcome to Data Store
          </Typography>
        </Box>

        {/* Search Input */}
        <TextField
          variant="outlined"
          size="small"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Set the search term locally
          sx={{
            backgroundColor: "white",
            borderRadius: 1,
            margin: "16px",
            width: "80%",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />

        {/* Menu Section */}
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.value}
                onClick={() => onMenuItemClick(item.value)} // Keep this for selecting menu item
                sx={{
                  backgroundColor:
                    selectedModel === item.value ? "#e3f2fd" : "transparent", // Active item background color
                  "&:hover": {
                    backgroundColor: "#e3f2fd", // Subtle hover effect
                  },
                  borderRadius: 1,
                  marginBottom: 1,
                }}
              >
                <ListItemText
                  primary={item.label}
                  sx={{
                    cursor:'pointer',
                    boxShadow:1,
                    padding:2,
                    borderRadius:2,
                    textAlign:'center',
                 
                    fontWeight: selectedModel === item.value ? "bold" : "normal",
                    color: selectedModel === item.value ? "#1976d2" : "inherit", // Change text color for active state
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Date, Time, and Notification Section */}
        <Box
          sx={{
            padding: 2,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#1976d2",
            color: "#fff",
            borderTop: "1px solid #ddd",
          }}
        >
          <Typography variant="body2" sx={{ flexGrow: 1 }}>
            {`${new Date().toLocaleString("default", {
              weekday: "long",
            })}, ${new Date().toLocaleDateString()}`}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="body2" sx={{ marginRight: 1 }}>
              {new Date().toLocaleTimeString()}
            </Typography>
            <IconButton
              color="primary"
              sx={{ "&:hover": { backgroundColor: "transparent" } }}
            >
              <NotificationsIcon sx={{ color: "#fff" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
