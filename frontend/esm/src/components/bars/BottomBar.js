import React, { useState, useEffect } from "react";

import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import Home from "@mui/icons-material/Home";
import AccountCircle from "@mui/icons-material/AccountCircle";
import QuestionAnswer from "@mui/icons-material/QuestionAnswer";
import AdminPanelSettings from "@mui/icons-material/AdminPanelSettings";
import Map from "@mui/icons-material/Map";
import ChatBubble from "@mui/icons-material/ChatBubble";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  let admin = false;
  let f = localStorage.getItem("admin");
  if (f == "true") {
    admin = true;
  }
  const [value, setValue] = React.useState(0);
  return (
    <div className="w-full fixed bottom-0 md:hidden">
      <BottomNavigation
        sx={{
          width: "100%",
          color: "text.primary",
          fontSize: 34,
          fontWeight: "medium",
          backgroundColor: "white",
          boxShadow: 2,
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<Home />}
          component={NavLink}
          to="/"
        />
        <BottomNavigationAction
          label="Chat"
          icon={<ChatBubble />}
          component={NavLink}
          to="/chat"
        />
        <BottomNavigationAction
          label="Map"
          icon={<Map />}
          component={NavLink}
          to="/map"
        />
        {admin && (
          <BottomNavigationAction
            label="Admin"
            icon={<AdminPanelSettings />}
            component={NavLink}
            to="/admin"
          />
        )}
        <BottomNavigationAction
          label="Profile"
          icon={<AccountCircle />}
          component={NavLink}
          to="/profile"
        />
      </BottomNavigation>
    </div>
  );
};

export default BottomBar;
