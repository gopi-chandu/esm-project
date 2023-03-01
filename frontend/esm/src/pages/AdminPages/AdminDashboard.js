import React, { useRef, useState } from "react";
import EventForm from "./EventForm";
// Create Events ,delete events,update events,get events
// make a get request with current user and check is the user is either admin or Club owner, if admin justshow all events,if club owner then show only club events of that club that the owner belongs to

// name,description, photo,
import ClubForm from "./ClubForm";
import ArticleForm from "./ArticleForm";

const AdminDashboard = () => {
  return (
    <div className="bg-blue-200 h-fit p-3">
      <div className="flex flex-col md:flex-row gap-y-2">
        <ClubForm></ClubForm>
        <EventForm></EventForm>
        <ArticleForm></ArticleForm>
      </div>
    </div>
  );
};

export default AdminDashboard;
