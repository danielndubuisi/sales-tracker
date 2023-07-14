import { useNavigate } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./LocationInfoBox.scss";

const LocationInfoBox = ({ info }) => {
  const navigate = useNavigate();

  return (
    <div
      className="location-info"
      onClick={() => navigate(`/clients/${info.id}`)}
    >
      <h2>Client Info</h2>
      <div className="content">
        <ul>
          <li>
            Name: <span>{info.name}</span>
          </li>
          <li>
            LCDA: <span>{info.lcda}</span>
          </li>
          <li>
            Purchase: <span>{info.avgPurchase}</span>
          </li>
        </ul>
        <div className="image">
          <StarRateIcon className="icon" />
          <img src={info.img} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default LocationInfoBox;
