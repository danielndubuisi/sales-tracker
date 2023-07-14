import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Reps.scss";

const Reps = () => {
  return (
    <div className="reps">
      <Sidebar />
      <div className="reps-container">
        <Navbar />
        <div className="content">Reps info to display here...</div>
        <h6>Per rep - Rep details</h6>
        <ul>
          <li>Client engagement i.e attrition</li>
          <li>Prospects / lead pipeline - </li>
          <li>Referrals </li>
          <li>New client details</li>
        </ul>
      </div>
    </div>
  );
};

export default Reps;
