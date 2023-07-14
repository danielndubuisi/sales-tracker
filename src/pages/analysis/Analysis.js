import Sidebar from "../../components/sidebar/Sidebar";
import "./Analysis.scss";

const Sales = () => {
  return (
    <div className="analysis">
      <Sidebar />
      <div className="analysis-container">
        <h3>Analytics</h3>
        <ul>
          <li>Client optimization strategy</li>
          <li>KPI support</li>
          <li>Growth analysis - per rep / per client</li>
          <li>Leads tracker via referrals/lead tags</li>
        </ul>
      </div>
    </div>
  );
};

export default Sales;
