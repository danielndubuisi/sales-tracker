import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../locationPin/LocationPin";
import LocationInfoBox from "../locationInfoBox/LocationInfoBox";
import { useState } from "react";

export default function Map({ eventData }) {
  const [locationInfo, setLocationInfo] = useState(null);
  const defaultProps = {
    center: {
      lat: 6.465422,
      lng: 3.406448,
    },
    zoom: 12,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCQD6es-Q6WuTejiqHdXin6B3JNJRracBQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {eventData &&
          eventData.map((ev) => (
            <LocationPin
              key={ev.id}
              status={ev.status}
              lat={ev.lat}
              lng={ev.lng}
              onClick={() =>
                setLocationInfo({
                  id: ev.id,
                  avgPurchase: ev.avgPurchase,
                  name: ev.name,
                  img: ev.img,
                  lcda: ev.lcda,
                })
              }
            />
          ))}
      </GoogleMapReact>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
    </div>
  );
}
