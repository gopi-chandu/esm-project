import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";
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

// User Pages
import ProfilePage from "./pages/profilepage/ProfilePage";
import ProfileForm from "./pages/profilepage/ProfileForm";

// State management context API
import AuthContext from "./store/auth-context";
import AdminPage from "./pages/Admin/AdminPage";

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
      <div className="App bg-blue-700">
        <Routes>
          {!ctx.isLoggedIn && (
            <Route path="/login" element={<Login></Login>}></Route>
          )}
          {!ctx.isLoggedIn && (
            <Route path="/" element={<Login></Login>}></Route>
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

          {ctx.isLoggedIn && (
            <Route path="/profile" element={profilePage}></Route>
          )}
          {ctx.isLoggedIn && (
            <Route path="/admin" element={<AdminPage />}></Route>
          )}

          <Route path="/events" element={eventsPage}></Route>

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
