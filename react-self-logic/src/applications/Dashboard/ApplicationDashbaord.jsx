import React, { useState } from "react";
import ApplicationTopBar from "./ApplicationTopBar";
import ApplicationLeftSideBar from "./ApplicationLeftSideBar";
import CreateDatabaseComponent from "../Pages/CreateDatabaseComponent";
import { Box } from '@mui/material';
import UserInfromationDrawerRightSide from "./UserInfromationDrawerRightSide";
import CreateVendor from "../Pages/CreateVendor";

export default function ApplicationDashboard() {
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedModel, setSelectedModel] = useState("Integration Module");
  const [contentAdmin, setContentAdmin] = useState("home");
  const [searchTerm, setSearchTerm] = useState("");
  const [rightOpen, setRightOpen] = useState(false);

  const MenuBarOpen = () => {
    setOpenMenu(!openMenu);
  };

  const RenderContentAdminModule = () => {
    switch (contentAdmin) {
      case "home":
        return <h1>Home</h1>;
      case "create-database":
        return <CreateDatabaseComponent />;
      case "create-vendor":
        return <CreateVendor />;
      // Add other cases as required
      default:
        return <h1>Page Not Found</h1>;
    }
  };

  const handleModelChange = (newModel) => {
    setSelectedModel(newModel); // Update selected model
  };

  const rightSideDrawer = () => {
    setRightOpen(!rightOpen);
  };

  const handleSearch = (searchTerm) => {
    const menuItem = searchTerm.toLowerCase();
    setContentAdmin(menuItem);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "auto" }}>
      <Box sx={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* Left sidebar */}
        {openMenu && (
          <ApplicationLeftSideBar
            onMenuItemClick={setContentAdmin}
            selectedModel={selectedModel}
            searchTerm={searchTerm} // Pass searchTerm to filter menu
          />
        )}

        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            flexGrow: 1, // Main content takes up the remaining space
            marginLeft: openMenu ? "10px" : "0", // Left sidebar margin
            transition: "margin 0.3s ease", // Smooth transition for layout changes
            width: "100%", // Ensure content area always spans full width
          }}
        >
          <ApplicationTopBar
            openMenu={MenuBarOpen}
            selectedModel={selectedModel}
            handleModelChange={handleModelChange}
            onSearch={handleSearch} // Pass search handler to top bar
            rightSideDrawer={rightSideDrawer}
            
          />
          {rightOpen && <UserInfromationDrawerRightSide />}
          <Box sx={{ background: "#EFF3F8", padding: "20px", flexGrow: 1 }}>
            {RenderContentAdminModule()}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
