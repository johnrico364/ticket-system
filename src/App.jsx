import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Login } from "./components/Login";
import { Home } from "./components/home/Home";
import { Signup } from "./components/Signup";
import { Add } from "./components/home/Add";
import { Aboutus } from "./components/home/Aboutus";
import { PersonalList } from "./components/home/Personal-list";
import { Explore } from "./components/home/Explore";
import { useState, createContext } from "react";
import { Update } from "./components/admin/Update";
import { Admin } from "./components/admin/Admin";
import { List } from "./components/admin/List";
import { Dashboard } from "./components/admin/Dashboard";
import { TicketFrom } from "./components/home/TicketFrom";
import { AddFlight } from "./components/admin/AddFlight";

export let AppContext = createContext();

function App() {
  let client = new QueryClient();

  let [userdata, setUserdata] = useState({});
  let [ticketdata, setTicketdata] = useState({});

  return (
    <div className="App">
      <AppContext.Provider
        value={{ userdata, setUserdata, ticketdata, setTicketdata }}
      >
        <QueryClientProvider client={client}>
          <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/home" element={<Home />}>
                <Route path="add" element={<Add />} />
                <Route path="ticketfrom" element={<TicketFrom />} />
                <Route path="profile" element={<PersonalList />} />
                <Route path="explore" element={<Explore />} />
                <Route path="aboutus" element={<Aboutus />} />
              </Route>
              <Route path="/admin" element={<Admin />}>
                <Route path="list" element={<List />} />
                <Route path="update" element={<Update />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="flight" element={<AddFlight />} />
                <Route />
              </Route>
              <Route path="*" element={<h1>NO PAGE FOUND...</h1>} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
