import {useState} from "react";
import reactLogo from "./assets/react.svg";

import "./index.css";
import DashboardCard from "./components/dashboardCard";
import Linechart from "./components/linechart";
import LatestOrders from "./components/latestOrders";
import Overview from "./pages/overview";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Overview />
    </>
  );
}

export default App;
