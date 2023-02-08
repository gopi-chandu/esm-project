import "./App.css";
import Login from "./components/Pages/AuthorizationPages/Login";
import SignUp from "./components/Pages/AuthorizationPages/SignUp";
import EventsList from "./components/Pages/Events/EventsList";
import EventsPage from "./components/Pages/Events/EventsPage";
import EventPage from "./components/Pages/Events/EventPage";
import SideBar from "./components/Pages/headerAndFooter/SideBar";
function App() {
  return (
    <div className="App  bg-gradient-to-r from-blue-600 to-blue-400">
      <div className="flex flex-row">
        <SideBar></SideBar>
        <EventPage></EventPage>
        {/* <EventsPage></EventsPage> */}
      </div>
      {/* <SignUp /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
