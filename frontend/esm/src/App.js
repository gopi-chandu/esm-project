import { Navigate, Route, Routes } from "react-router-dom";
import { useContext, useState } from "react";
// import { Offline, Online } from "react-detect-offline";
import "./App.css";
// common page
import SideBar from "./components/bars/SideBar";
import SideBar2 from "./components/bars/SideBar2";
import BottomBar from "./components/bars/BottomBar";

// Auth Pages
import Login from "./pages/Authentication/Login";
import SignUp from "./pages/Authentication/SignUp";

// Event Pages
import EventsPage from "./pages/Events/EventsPage";
import EventPage from "./pages/Events/EventPage";
// Offline pages
import OfflinePage from "./pages/offlinepages/OfflinePage";

// User Pages
import ProfilePage from "./pages/profilepage/ProfilePage";
import ProfileForm from "./pages/profilepage/ProfileForm";
import { flash } from "react-universal-flash";
// Admin Page
import AdminDashboard from "./pages/AdminPages/AdminDashboard";

// Chat Page
import ChatPage from "./pages/ChatPages/ChatPage";
// Map Page
import MapPage from "./pages/MapPage/MapPage";

// State management context API
import AuthContext from "./store/auth-context";
// import AdminPage from "./pages/AdminObnselete/AdminPage";
import LoadingAnimation from "./components/UI/LoadingAnimation";
import { Flasher } from "react-universal-flash";
import { RenderFlash } from "react-universal-flash";
import Message from "./components/UI/Message";
import UserRegPage from "./pages/UserRegPage/UserRegPage";
function App() {
  const ctx = useContext(AuthContext);
  let eventsPage = <Login></Login>;
  let profilePage = <Login></Login>;
  if (ctx.isLoggedIn) {
    eventsPage = (
      <div className="flex flex-row">
        <SideBar></SideBar>
        <EventsPage></EventsPage>
        <BottomBar></BottomBar>
      </div>
    );

    profilePage = (
      <div className="">
        <div className="w-96 absolute">
          <SideBar2></SideBar2>
        </div>
        <ProfilePage></ProfilePage>
        <BottomBar></BottomBar>
      </div>
    );
  }

  return (
    <div>
      {/* <Offline>
        <div className="bg-yellow-300 rounded text-center">
          You are offline, you are being served cached content
        </div>
      </Offline> */}
      <Flasher position="top_left">
        <Message></Message>
      </Flasher>
      {/* <div onClick={() => flash(1000,"error","Try again")}>Error</div>
      <div onClick={() => flash(1000, "success", "Congrats")}>Success</div> */}
      <div className="App bg-blue-700">
        <Routes>
          {!ctx.isLoggedIn && (
            <Route path="/login" element={<Login></Login>}></Route>
          )}
          {!ctx.isLoggedIn && (
            <Route path="/" element={<Login></Login>}></Route>
          )}
          {ctx.isLoggedIn && ctx.isAdmin && (
            <Route
              path="/admin"
              element={<AdminDashboard></AdminDashboard>}
            ></Route>
          )}
          {ctx.isLoggedIn && <Route path="/" element={eventsPage}></Route>}
          {!ctx.isLoggedIn && (
            <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
          )}

          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          {/*  */}
          <Route
            path="/loading"
            element={<LoadingAnimation></LoadingAnimation>}
          ></Route>
          {ctx.isLoggedIn && (
            <Route path="/profile" element={profilePage}></Route>
          )}
          {/* {ctx.isLoggedIn &&  ctx.isAdmin && (
            <Route path="/admin" element={<AdminDashboard />}></Route>
          )} */}

          {ctx.isLoggedIn && (
            <Route path="/chat" element={<ChatPage />}></Route>
          )}
          {ctx.isLoggedIn && (
            <Route path="/map" element={<MapPage></MapPage>}></Route>
          )}
          {!ctx.isLoggedIn && <Route path="/map" element={<Login />}></Route>}

          <Route path="/events" element={eventsPage}></Route>

          <Route path="/offline" element={<OfflinePage></OfflinePage>}></Route>

          {ctx.isLoggedIn && (
            <Route
              path="/events/:eventId"
              element={
                <div className="flex">
                  <SideBar></SideBar>
                  <EventPage></EventPage>
                  <BottomBar></BottomBar>
                </div>
              }
            ></Route>
          )}
          {ctx.isLoggedIn && (
            <Route
              path="/events/:eventId/register"
              element={
                <div className="flex">
                  <SideBar></SideBar>
                  <UserRegPage></UserRegPage>
                  <BottomBar></BottomBar>
                </div>
              }
            ></Route>
          )}
          <Route
            path="/events/:eventId"
            element={<Navigate to="/" replace />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
