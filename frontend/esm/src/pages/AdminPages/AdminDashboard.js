import React, { useRef, useState } from "react";
// Create Events ,delete events,update events,get events
// make a get request with current user and check is the user is either admin or Club owner, if admin justshow all events,if club owner then show only club events of that club that the owner belongs to

// name,description, photo,

import ClubPageAdmin from "./ClubPageAdmin";
import EventPageAdmin from "./EventPageAdmin";

const AdminDashboard = () => {
  const [page ,setPage]=useState(0);
  let tab1=(page===0) ? "bg-blue-500 w-20 md:w-40 h-10 rounded-lg text-xl py-1":"bg-blue-200 w-20 md:w-40 h-10 rounded-lg text-xl py-1"
  let tab2=(page===1) ? "bg-blue-500 w-20 md:w-40 h-10 rounded-lg text-xl py-1":"bg-blue-200 w-20 md:w-40 h-10 rounded-lg text-xl py-1"
  return (
    <div className="bg-blue-200 h-full p-3">
      <div className=" h-10 w-full flex flex-row justify-center gap-x-10 mb-4 ">
        <div className={tab1} onClick={()=>{setPage(0)}}>Clubs</div>
        <div className={tab2} onClick={()=>{setPage(1)}}>Events</div>
        {/* <div className="bg-blue-500 w-20 md:w-40 h-10 rounded-lg text-xl py-1" onClick={()=>{setPage(2)}}>Articles</div> */}
      </div>
      <div className="">
        {(page===0) && <ClubPageAdmin></ClubPageAdmin> }
        {/* {(page===0) && <ClubForm></ClubForm> } */}
        {(page===1) && <EventPageAdmin></EventPageAdmin> }
        {/* {(page===2) && <ArticleForm></ArticleForm> } */}
      </div>
    </div>
  );
};

export default AdminDashboard;


