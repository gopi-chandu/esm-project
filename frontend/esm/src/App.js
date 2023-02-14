import "./App.css";
import Login from "./components/Pages/AuthorizationPages/Login";
import SignUp from "./components/Pages/AuthorizationPages/SignUp";
import EventsList from "./components/Pages/Events/EventsList";
import EventsPage from "./components/Pages/Events/EventsPage";
import EventPage from "./components/Pages/Events/EventPage";
import SideBar from "./components/Pages/headerAndFooter/SideBar";

import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <div className="App bg-blue-700">
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          <Route
            path="/events"
            element={
              <div className="flex flex-row">
                <SideBar></SideBar>
                <EventsPage></EventsPage>
              </div>
            }
          ></Route>
          <Route
            path="/events/:eventId"
            element={
              <div className="flex flex-row">
                <SideBar></SideBar>
                <EventPage ></EventPage>
              </div>
            }
          ></Route>
          {/* <Route path="/home">
            <div className="flex flex-row">
              <SideBar></SideBar>
              <EventsPage></EventsPage>
            </div>
          </Route>
          <Route path="/events/:eventId">
            <div className="flex flex-row">
              <SideBar></SideBar>
              <EventPage></EventPage>
            </div>
          </Route>
          <Route path="/">
            <SignUp />
          </Route> */}
        </Routes>
      </div>
    </div>
  );
}
// function App() {
//   return (
//     // bg-gradient-to-r from-blue-600 to-blue-400
//     <div className="App bg-blue-700">
//       <div className="flex flex-row">
//         <SideBar></SideBar>
//         {/* <EventPage></EventPage> */}
//         <EventsPage ></EventsPage>
//       </div>
//       {/* <SignUp /> */}
//       {/* <Login /> */}
//     </div>
//   );
// }
export default App;
