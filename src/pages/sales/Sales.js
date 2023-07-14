import Sidebar from "../../components/sidebar/Sidebar";
import "./Sales.scss";

const Sales = () => {
  return (
    <div className="sales">
      <Sidebar />
      <div className="sales-container">
        <h3>Sales page to display - </h3>
        <h6>Per Client:</h6>
        <ul>
          <li>Total sales order</li>
          <li>Invoiced sales - </li>
          <li>Payment pattern </li>
          <li>App sales contribution? </li>
        </ul>
        <h6>Per rep:</h6>
        <ul>
          <li>Recievable days</li>
          <li>Conversion rate i.e new client purchase - </li>
          <li>Client engagement & attrition </li>
        </ul>
      </div>
    </div>
  );
};

export default Sales;
