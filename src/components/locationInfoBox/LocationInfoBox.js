import { useNavigate } from "react-router-dom";
import StarRateIcon from "@mui/icons-material/StarRate";
import CloseIcon from '@mui/icons-material/Close';

import "./LocationInfoBox.scss";

const LocationInfoBox = (props) => {
  const navigate = useNavigate();

  return (
      <div
        className="location-info"
      >
        <h2>Client Info</h2>
        <div className="content">
          <ul>
            <li>
              Name: <span>{props.info.name}</span>
            </li>
            <li>
              Category: <span>{props.info.category}</span>
            </li>
            <li>
              Status: <span>{props.info.status}</span>
            </li>
            <li>
              Type: <span>{props.info.clientType}</span>
            </li>
            <li>
              Purchase: <span>{props.info.avgPurchase}</span>
            </li>
          <small onClick={() => navigate(`/clients/${props.info.id}`)}>See more info →</small>
          </ul>
          <div className="image"        
>
            <StarRateIcon className="icon" />
            <img src={props.info.img} alt="profile" />
          </div>
          <CloseIcon className="close" onClick={props.closeModal} />
        </div>
      </div>
  );
};

export default LocationInfoBox;
