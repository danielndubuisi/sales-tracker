import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Orders.scss";

const Orders = () => {
  return (
    <div className="orders">
      <Sidebar />
      <div className="orders-container">
        <Navbar />
        <div className="content">Process orders here...</div>
      </div>
    </div>
  );
};

export default Orders;
