import React, { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "../locationPin/LocationPin";
import LocationInfoBox from "../locationInfoBox/LocationInfoBox";
import {statusList, typeList, repList} from '../featured/FilterBox'
import './Map.scss'

export default function Map({ eventData }) {
  const [locationInfo, setLocationInfo] = useState(null);
  const [filteredStatus, setFilteredStatus] = useState("all")
  const [filteredClientType, setFilteredClientType] = useState('all')
  const [filteredRep, setFilteredRep] = useState('all')
  const [filteredCount, setFilteredCount] = useState(0)
  const [displayedData, setDisplayedData] = useState(null)

  useEffect(() => {
    let filtered = eventData || []
    if(filteredStatus === 'all' && filteredClientType === 'all' && filteredRep === 'all'){
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    } else if(filteredStatus !== 'all' && filteredRep === 'all' && filteredClientType === 'all') {
      filtered = eventData?.filter(filteredData => filteredData.status === filteredStatus)
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    } else if (filteredStatus === 'all' && filteredRep === 'all' && filteredClientType !== 'all'){
      filtered = eventData?.filter(filteredData => filteredData.clientType === filteredClientType)
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    } else if (filteredStatus === 'all' && filteredRep !== 'all' && filteredClientType === 'all'){
      filtered = eventData?.filter(filteredData => filteredData.rep === filteredRep)
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    } else if (filteredStatus !== 'all' && filteredRep !== 'all' && filteredClientType === 'all'){
      filtered = eventData?.filter(filteredData => filteredData.rep === filteredRep)?.filter(filteredData => filteredData.status === filteredStatus)
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    } else if (filteredStatus !== 'all' && filteredRep === 'all' && filteredClientType !== 'all'){
      filtered = eventData?.filter(filteredData => filteredData.status === filteredStatus)?.filter(filteredData => filteredData.clientType === filteredClientType)
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    } else if (filteredStatus === 'all' && filteredRep !== 'all' && filteredClientType !== 'all'){
      filtered = eventData?.filter(filteredData => filteredData.rep === filteredRep)?.filter(filteredData => filteredData.clientType === filteredClientType)
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    }
    else {
      filtered = eventData?.filter(filteredData => filteredData.clientType === filteredClientType)?.filter(filteredData => filteredData.status === filteredStatus)?.filter(filteredData => filteredData.rep === filteredRep)
      setDisplayedData(filtered)
      setFilteredCount(filtered.length)
    }
  },[filteredStatus, filteredClientType, filteredRep, eventData])


  const closeModal = () => {
    setLocationInfo(null)
  }

  const defaultProps = {
    center: {
      lat: 6.465422,
      lng: 3.406448,
    },
    zoom: 12.6,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "100vh", width: "100%", position: "relative" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCQD6es-Q6WuTejiqHdXin6B3JNJRracBQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {displayedData?.map(
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
            />))
        }
      </GoogleMapReact>
      <div className="filter_container">
        <div className="filter-select">
        <label>
            Rep:
            <select name="rep_filter" id="rep_filter" onChange={(e) => setFilteredRep(e.target.value)}>
              {repList?.map(opt => <option key={opt.id} value={opt.value}>{opt.text}</option>)}
            </select>
          </label>
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
        <div className="filter-count">
          <span>Count: {filteredCount} </span>
        </div>
      </div>
      {locationInfo && <LocationInfoBox info={locationInfo} closeModal={closeModal} />}
    </div>
  );
}

