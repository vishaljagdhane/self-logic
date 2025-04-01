import React, { useState } from "react";
import ApplicationTopBar from "./ApplicationTopBar";
import ApplicationLeftSideBar from "./ApplicationLeftSideBar";
import CreateDatabaseComponent from "../Pages/CreateDatabaseComponent";
import {Box} from '@mui/material'

export default function ApplicationDashbaord() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedModel, setSelectedModel] = useState('Intregation Module');
  const [contentAdmin, setContentAdmin] = useState("home");
  const [searchTerm, setSearchTerm] = useState('');

  const MenuBarOpen = () => {
    setOpenMenu(!openMenu);
  };

  const RenderContentAdminMoudel = () => {
    switch (contentAdmin) {
      case "home":
        return <h1>Home</h1>;
      case "create-datbase":
        return <CreateDatabaseComponent />;
      case "create-user":
        return <h1>Create User</h1>;
      case "update-user":
        return <h1>Update User</h1>;
      case "delete-user":
        return <h1>Delete User</h1>;
      case "create-table":
        return <h1>Create Table</h1>;
      case "edit-table":
        return <h1>Edit Table</h1>;
      case "delete-table":
        return <h1>Delete Table</h1>;
      case "create-dashboard":
        return <h1>Create Dashboard</h1>;
      case "user-dashboard":
        return <h1>User Dashboard</h1>;
      case "profile":
        return <h1>Profile</h1>;
      default:
        return <h1>Page Not Found</h1>;
    }
  };
  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Update the search term
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {openMenu && (
          <ApplicationLeftSideBar
            onMenuItemClick={setContentAdmin}
            selectedModel={selectedModel}
            searchTerm={searchTerm} // Pass searchTerm to filter menu
          />
        )}

        <Box
          sx={{
            flexGrow: 1,
            marginLeft: openMenu ? "5px" : "0",
            width: openMenu ? "100%" : "100%",
            transition: "margin 0.3s ease, width 0.3s ease",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ApplicationTopBar
            openMenu={MenuBarOpen}
            selectedModel={selectedModel}
            handleModelChange={handleModelChange}
            onSearch={handleSearch} // Pass search handler to top bar
          />
          <Box sx={{ background: "#EFF3F8", padding: "20px" }}>
            {RenderContentAdminMoudel()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
