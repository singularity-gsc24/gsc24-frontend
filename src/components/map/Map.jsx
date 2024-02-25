import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

const Map = ({ fishLocation, zoomLevel }) => (
    console.log(fishLocation),
    (
        <div className="map">
            <h2 className="map-h2">GSC-24 FE</h2>
            <div className="google-map">
                {/*  Loop to the array of markers and point the location */}
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyA2C03GDZLtdQ5V1x-T95R3kd5kyJrwpz4",
                    }} // GCP API Key
                    defaultCenter={{ lat: 37.42216, lng: -122.08427 }}
                    defaultZoom={zoomLevel}
                >
                    {/* <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        /> */}
                </GoogleMapReact>
            </div>
        </div>
    )
);

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="pin-icon" />
        <p className="pin-text">{text}</p>
    </div>
);

export default Map;
