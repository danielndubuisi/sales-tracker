import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./Overview.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Spinner from "../../components/spinner/Spinner";
import { useFetch } from "../../hooks/useFetch";

const Overview = () => {
  const url = "http://localhost:3000/chartData/";
  const { error, isPending, data: chartData } = useFetch(url);

  return (
    <div className="overview">
      <Sidebar />
      <div className="overview-container">
        <Navbar />
        <div className="widgets">
          <Widget type="clients" />
          <Widget type="orders" />
          <Widget type="projections" />
          <Widget type="target" />
        </div>
        <div className="charts">
          <Featured />
          {error && <p className="error">{error}</p>}
          {isPending && <Spinner />}
          {chartData && <Chart data={chartData} />}
        </div>
      </div>
    </div>
  );
};

export default Overview;
