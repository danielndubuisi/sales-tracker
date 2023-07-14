import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Clients.scss";
import ClientList from "../../components/clientList/ClientList";
import Spinner from "../../components/spinner/Spinner";
import { useFetch } from "../../hooks/useFetch";

const Clients = () => {
  const url = "http://localhost:3000/eventData/";
  const { error, isPending, data: eventData } = useFetch(url);

  return (
    <div className="clients">
      <Sidebar />
      <div className="clients-container">
        <Navbar />
        <div className="content">
          {error && <p className="error">{error}</p>}
          {isPending && <Spinner />}
          {eventData && <ClientList rows={eventData} />}
        </div>
      </div>
    </div>
  );
};

export default Clients;
