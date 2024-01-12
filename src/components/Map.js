import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import axios from "axios";
import React, { useState, useEffect } from "react";

const containerStyle = {
  width: "50%",
  height: "1050px",
};

const center = {
  lat: 21.7679,
  lng: 78.8718,
};

const rectangleIconBox = {
  path: "M -10 -5 L -10 5 L 10 5 L 10 -5 Z",
  fillColor: "orange",
  fillOpacity: 1,
  strokeColor: "black",
  strokeWeight: 1,
  scale: 2,
};

function MyComponent() {
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios
      .get("https://65841ac24d1ee97c6bcefd4e.mockapi.io/hotellistings")
      .then((response) => {
        setListings(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBnRXGwjDtB6f39mBtzeFePy_cmHvlXheo",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={20}
      onLoad={onLoad}
      onUnmount={onUnmount}
      className="gm"
    >
      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={{
            lat: parseFloat(listing.latitude),
            lng: parseFloat(listing.longitude),
          }}
          label={`₹${Math.trunc(listing.price)}`}
          icon={rectangleIconBox}
        />
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
