import { useParams } from "react-router-dom";
import Sidebar from "../sidebar/Sidebar";
import Widget from "../widget/Widget";
import "./SingleClient.scss";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../../components/spinner/Spinner";

const SingleClient = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/eventData/" + id;
  const { error, isPending, data } = useFetch(url);

  return (
    <div className="client">
      <Sidebar />
      <div className="client-container">
        <div className="client-top">
          <h4>Client sale dashboard</h4>
          <select name="date_select" id="date_select">
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="year">Year</option>
          </select>
          <span></span>
        </div>
        {error && <p className="error">{error}</p>}
        {isPending && <Spinner />}
        {data && (
          <div className="single-container">       
            <div className="single-left">
              <div className="widgets">
                <Widget type="orders" />
                <Widget type="projections" />
                <Widget type="target" />
              </div>
              <div className="content">
                <img src={data.img} alt="client-pic" />
                <h3>{data.name}</h3>
                <p>Location: {data.lcda}</p>
                <p>Avg Purchase: {data.avgPurchase}</p>
                <p>Status: {data.status}</p>
                <p>Category: {data.category}</p>
                <p>Type: {data.clientType}</p>
                <p>Current fulfilment(%): {data.fulfilment}</p>
                <h4>Suggestions to show...</h4>
                <ul>
                  <li>Purchase pattern based on live data (trend line)</li>
                  <li>Client category</li>
                  <li>Recievable days</li>
                  <li>Payment status</li>
                  <li>No. of orders</li>
                </ul>
              </div>
            </div>
            <div className="single-right">
              <span></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleClient;
