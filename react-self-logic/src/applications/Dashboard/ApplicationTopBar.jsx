import React, { useState } from "react";
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ApplicationTopBar({ openMenu, onSearch, handleModelChange, selectedModel }) {
  const [changedIcon, setChangedIcon] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  const OnClickOpenMenunChangeIcons = () => {
    setChangedIcon(!changedIcon);
    openMenu();  // Toggle the menu open/close
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value); // Pass search term to parent
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={OnClickOpenMenunChangeIcons}
          >
            {changedIcon ? <MenuIcon /> : <CloseIcon />}
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {selectedModel}
            </Typography>

            {/* Select Dropdown */}
            <FormControl sx={{ minWidth: 120, mr: 2 }}>
              <InputLabel>Module</InputLabel>
              <Select
                value={selectedModel}
                onChange={handleModelChange}
                size="small"
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  "& .MuiSelect-icon": {
                    color: "black",
                  },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent",
                    },
                  },
                }}
              >
                <MenuItem value="Admin Module">Admin Module</MenuItem>
                <MenuItem value="User Module">User Module</MenuItem>
                <MenuItem value="Intregation Module">Integration Module</MenuItem>
              </Select>
            </FormControl>

            {/* Search TextField with Icon */}
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              sx={{
                backgroundColor: "white",
                borderRadius: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                },
                "& .MuiInputBase-input": {
                  color: "#000",
                },
                ml: 2,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* User Icon */}
          <IconButton color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
}
