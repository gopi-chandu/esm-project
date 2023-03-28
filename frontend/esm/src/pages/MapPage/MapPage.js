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
import BottomBar from "../../components/bars/BottomBar";
import { useParams } from "react-router-dom";

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

  const [arr, setArr] = useState(markers);
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

  let params = useParams();
  console.log("PARAMS", params.location);
  let content;
  content = arr.map((ele, index) => {
    return (
      <Marker key={index} position={L.latLng(ele.lat, ele.lng)}>
        <Popup>{ele.name}</Popup>
      </Marker>
    );
  });

  return (
    <div className="mapApp bg-red-300 ">
      <div className="mb-3 h-40">
        <MapContainer center={position} minZoom={2} zoom={4} maxZoom={4}>
          <TileLayer attribution={map_att} url={offlineUrl} />
          {content}
          {/* <LocationFinderDummy /> */}
        </MapContainer>
      </div>
      <BottomBar></BottomBar>
    </div>
  );
};

export default MapPage;

const markers = [
  {
    location: 2,
    name: "Sir CV Raman Labaratory",
    lat: -19.30027062110056,
    lng: 34.26708067335019,
  },
  {
    location: 1,
    name: "APJ Abdul Kalam Labaratory",
    lat: -14.426521288674614,
    lng: 82.32518000810438,
  },
  {
    location: 1,
    name: "SRK Academic Complex",
    lat: 1.5882732198597416,
    lng: 72.13638012972959,
  },
  {
    location: 1,
    name: "Sardar Vallabhai Patel Central Vista",
    lat: -29.44273324541579,
    lng: 9.471088129354591,
  },
  {
    location: 1,
    name: "PMMM Academic Complex",
    lat: -36.58391226727512,
    lng: -7.840249766259079,
  },
  {
    location: 1,
    name: "Akshaya Boys Mess",
    lat: -20.94674715509609,
    lng: -59.424954954881926,
  },
  {
    location: 1,
    name: "Pranahita Boys Reslocationence",
    lat: -24.1906875022411,
    lng: -68.38591398321076,
  },
  {
    location: 1,
    name: "Purna Boys Reslocationence",
    lat: -21.92788666831784,
    lng: -75.5898222216712,
  },
  {
    location: 1,
    name: "Sabari Boys Reslocationence",
    lat: -20.124175083225474,
    lng: -83.14514061810529,
  },
  {
    location: 1,
    name: "Manjeera Boys Reslocationence",
    lat: -14.933114303944159,
    lng: -66.10174795638183,
  },
  {
    location: 1,
    name: "Indravathi Boys Reslocationence",
    lat: -10.82383492803682,
    lng: -69.79155461510547,
  },
  {
    location: 1,
    name: "Banganga Boys Reslocationence",
    lat: -8.225200505306107,
    lng: -74.53559174775013,
  },
  {
    location: 1,
    name: "Godavari Boys Reslocationence",
    lat: -15.021254970015647,
    lng: -89.93465599489545,
  },
  {
    location: 1,
    name: "Girls Reslocationence",
    lat: -65.50187433406545,
    lng: -144.23883679728323,
  },
  {
    location: 1,
    name: "Guest House",
    lat: -75.39580754844489,
    lng: -146.26569122871103,
  },
  {
    location: 1,
    name: "Staff Reslocationential Complex",
    lat: -20.292231564761007,
    lng: -104.69388262979001,
  },
  {
    location: 1,
    name: "Faculty Reslocationential Complex",
    lat: -69.27310782345518,
    lng: -131.68216967280333,
  },
  {
    location: 1,
    name: "Annapurna Girls Mess",
    lat: -50.836228112716334,
    lng: -143.4544099649216,
  },
  {
    location: 1,
    name: "Dokka Seethamma Canteen",
    lat: 22.529715389268436,
    lng: 62.91472051321903,
  },
  {
    location: 1,
    name: "Ravindra Kala Bharathi",
    lat: 37.027189066148786,
    lng: 81.10316216399096,
  },
  {
    location: 1,
    name: "Student Amenities Centre",
    lat: 32.70490232688972,
    lng: 71.70140730103158,
  },
  {
    location: 1,
    name: "Medical Complex",
    lat: 40.45177465327158,
    lng: 88.39611219787537,
  },
  {
    location: 1,
    name: "Indoor Stadium",
    lat: 43.64681694362071,
    lng: 98.67653573961604,
  },
  {
    location: 1,
    name: "Outdoor Courts",
    lat: 60.32855566897998,
    lng: 105.42019044288834,
  },
  {
    location: 1,
    name: "Cricket Stadium",
    lat: 60.2414737664985,
    lng: 138.106665293551,
  },
  {
    location: 1,
    name: "Engineering Workshops",
    lat: -34.53635949633706,
    lng: 62.82731365831262,
  },
  {
    location: 1,
    name: "NIT Andhra East Gate",
    lat: 53.907208400914165,
    lng: 156.8585140053286,
  },
  {
    location: 1,
    name: "NIT Andhra West Gate",
    lat: -71.93101254798546,
    lng: -167.3565788458123,
  },
];
