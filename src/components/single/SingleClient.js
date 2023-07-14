import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
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
        <Navbar />
        {error && <p className="error">{error}</p>}
        {isPending && <Spinner />}
        {data && (
          <div className="single">
            <img src={data.img} alt="client-pic" />
            <h2>Name: {data.name}</h2>
            <p>Location: {data.lcda}</p>
            <p>Avg Purchase: {data.avgPurchase}</p>
            <p>Status: {data.status}</p>
            <p>Current fulfilment(%): {data.fulfilment}</p>
            <h4>Suggestions to show...</h4>
            <ul>
              <li>Purchase pattern (trend line)</li>
              <li>Client category</li>
              <li>Recievable days</li>
              <li>Payment status</li>
              <li>No. of orders</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleClient;
