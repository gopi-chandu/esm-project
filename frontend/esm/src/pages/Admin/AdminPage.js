// make clubs ,events is secondary

import React from "react";
import ClubForm from "./ClubForm";
import EventForm from "./ClubForm";
// Create a form to create club,
// form to create events,
//  form to assign users as club members
const AdminPage = () => {
  return (
    <div className="pt-10 h-screen bg-red-300">
      <div className="p-3 h-fit md:w-96 shadow w-1/2 mx-auto bg-blue-300 rounded-lg flex flex-col">
        <div className="m-2 border p-2">
          <ClubForm />
        </div>
      </div>
      <div className="mt-2 p-3 h-fit md:w-96 shadow w-1/2 mx-auto bg-blue-300 rounded-lg flex flex-col">
        <div className="m-2 border p-2">
          <EventForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
