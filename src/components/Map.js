import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

// Replace these with the coordinates of the location you want to display
const center = {
  lat: 27.023804,
  lng: 74.217934
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    // Replace this with your own Google Maps API key
    googleMapsApiKey: "AIzaSyD9r1he6VmVourR_AkmdRDBC_BoIcrt_nQ"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
         mapContainerStyle={containerStyle}
         center={center}
         zoom={10}
         onLoad={onLoad}
         onUnmount={onUnmount}
         className = 'gm'
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MyComponent);
