import Map from "../../components/map/Map";
import { useFetch } from "../../hooks/useFetch";
import Spinner from "../../components/spinner/Spinner";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Tracker.scss";

const Tracker = () => {
  const url = "http://localhost:3000/eventData/";
  const { error, isPending, data: eventData } = useFetch(url);

  return (
    <div className="tracker">
      <Sidebar />
      <div className="tracker-container">
        {error && <p className="error">{error}</p>}
        {isPending && <Spinner />}
        {eventData && <Map eventData={eventData} />}
      </div>
    </div>
  );
};

export default Tracker;
