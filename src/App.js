import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tracker from "./pages/tracker/Tracker";
import Sales from "./pages/sales/Sales";
import Analysis from "./pages/analysis/Analysis";
import Clients from "./pages/clients/Clients";
import Reps from "./pages/reps/Reps";
import Orders from "./pages/orders/Orders";
import Login from "./pages/login/Login";
import "./App.css";
import Overview from "./pages/overview/Overview";
import SingleClient from "./components/single/SingleClient";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/tracker" element={<Tracker />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/:id" element={<SingleClient />} />
          <Route path="/reps" element={<Reps />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
