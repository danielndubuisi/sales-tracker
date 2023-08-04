import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import "./LocationPin.scss";

const LocationPin = ({ onClick, status }) => (
  <div className="pin" onClick={onClick}>
    <LocationOnSharpIcon className={`icon ${status}`} />
  </div>
);

export default LocationPin;
