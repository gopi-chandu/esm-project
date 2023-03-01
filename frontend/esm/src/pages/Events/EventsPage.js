import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import EventsList from "./EventsList";

const EventsPage = () => {
  const ctx = useContext(AuthContext);
  return (
    <div className="bg-blue-300 h-full w-full">
      
      <EventsList></EventsList>
    </div>
  );
};

export default EventsPage;
