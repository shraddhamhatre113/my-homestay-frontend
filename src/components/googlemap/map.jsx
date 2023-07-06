import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function PropertyMap(props){
  const defaultProps = {
    center: {
      lat: 52.51759,
      lng: 13.37823
    },
    zoom: 11
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '40vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={52.51759}
          lng={13.37823}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}