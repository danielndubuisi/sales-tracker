import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../locationPin/LocationPin";
import LocationInfoBox from "../locationInfoBox/LocationInfoBox";
import {statusList, typeList} from '../featured/FilterBox'
import './Map.scss'

export default function Map({ eventData }) {
  const [locationInfo, setLocationInfo] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState("all")
  const [filteredClientType, setFilteredClientType] = useState('all')

  const closeModal = () => {
    setLocationInfo(null)
  }

  const defaultProps = {
    center: {
      lat: 6.465422,
      lng: 3.406448,
    },
    zoom: 13,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCQD6es-Q6WuTejiqHdXin6B3JNJRracBQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {filteredStatus !== 'all' && filteredClientType === 'all' ?
          ( eventData?.filter(filteredData => filteredData.status === filteredStatus)
            ?.map(
              (ev) => (
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
                      status: ev.status,
                      category: ev.category,
                      clientType: ev.clientType
                    })
                  }
                />
              ))) 
              : filteredStatus === 'all' && filteredClientType !== "all"  ?
              ( eventData?.filter(filteredData => filteredData.clientType === filteredClientType)
              ?.map(
                (ev) => (
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
                        status: ev.status,
                        category: ev.category,
                        clientType: ev.clientType
                      })
                    }
                  />
                )))
              : filteredStatus !== 'all' && filteredClientType !== 'all' ? 
              (eventData?.filter(filteredData => filteredData.clientType === filteredClientType)?.filter(filteredData => filteredData.status === filteredStatus)
              ?.map(
                (ev) => (
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
                        status: ev.status,
                        category: ev.category,
                        clientType: ev.clientType
                      })
                    }
                  />
                ))) 
              :
              ( eventData?.map((ev) => (
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
                        status: ev.status,
                        category: ev.category,
                        clientType: ev.clientType
                      })
                    }
                  />
                ))
              )
        }
      </GoogleMapReact>
      <div className="filter_container">
        <label>
          Status:
          <select name="status_filter" id="status_filter" onChange={(e) => setFilteredStatus(e.target.value)}>
            {statusList?.map(opt => <option key={opt.id} value={opt.value}>{opt.text}</option>)}
          </select>
        </label>
        <label>  
          Type:     
          <select name="type_filter" id="type_filter" onChange={(e) => setFilteredClientType(e.target.value)}>
            {typeList?.map(opt => <option key={opt.id} value={opt.value}>{opt.text}</option>)}
          </select>
        </label>
      </div>
      {locationInfo && <LocationInfoBox info={locationInfo} closeModal={closeModal} />}
    </div>
  );
}

