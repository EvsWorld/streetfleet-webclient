import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps"

const MapContainer = withScriptjs(withGoogleMap(props => {
  const styles = [
    {
      "featureType": "water",
      "stylers": [{"visibility": "on"},{"color": "#b5cbe4"}]
    },
    {
      "featureType": "landscape",
      "stylers": [{"color": "#efefef"}]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{"color": "#83a5b0"}]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{"color": "#bdcdd3"}]
    },
    {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [{"color": "#ffffff"}]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{"color": "#e3eed3"}]
    },
    {
      "featureType": "administrative",
      "stylers": [{"visibility": "on"},{"lightness": 33}]
    },
    {"featureType": "road"},
    {
      "featureType": "poi.park",
      "elementType": "labels",
      "stylers": [{"visibility": "on"},{"lightness": 20}]
    },
    {},
    {
      "featureType": "road",
      "stylers": [{"lightness": 20}]
    }
  ]
  return <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 41.404082, lng: 2.175017 }}
      defaultOptions={{styles:styles}}
    ></GoogleMap>
  }
))

export default MapContainer;
