import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";

import "./mappage.css";

//CSS and marker image fix for Leaflet map
import "leaflet/dist/leaflet.css";
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";

L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});
const offlineUrl = "./maps/{z}/{x}/{y}.png";
const map_att = '&copy; <a href="">NIT ANDHRA</a>';

const MapPage = () => {
  const position = {
    lat: 0,
    lng: 0,
  };

  const [arr, setArr] = useState([
    {
      name: "MMM",
      lat: -37.261297317748955,
      lng: -8.443357709116086,
    },
  ]);
  const LocationFinderDummy = () => {
    const map = useMapEvents({
      click(e) {
        let value = prompt("Your Question");
        if (value === null) return null;
        let obj = {
          name: value,
          lat: e.latlng.lat,
          lng: e.latlng.lng,
          // location: e.latlng,
        };
        // arr.push(obj);
        setArr((prev) => [...prev, obj]);

        // localStorage.setItem("co", JSON.stringify(obj));
        console.log(obj);
      },
    });
    return null;
  };

  let content = arr.map((ele, index) => {
    return (
      <Marker key={index} position={L.latLng(ele.lat, ele.lng)}>
        <Popup>{ele.name}</Popup>
      </Marker>
    );
  });
  return (
    <div className="mapApp">
      <MapContainer center={position} minZoom={2} zoom={4} maxZoom={4}>
        <TileLayer attribution={map_att} url={offlineUrl} />
        {content}
        <LocationFinderDummy />
      </MapContainer>
    </div>
  );
};

export default MapPage;
