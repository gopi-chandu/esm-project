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

  let content = arr.map((ele, index) => {
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
    name: "Sir CV Raman Labaratory",
    lat: -19.30027062110056,
    lng: 34.26708067335019,
  },
  {
    name: "APJ Abdul Kalam Labaratory",
    lat: -14.426521288674614,
    lng: 82.32518000810438,
  },
  {
    name: "SRK Academic Complex",
    lat: 1.5882732198597416,
    lng: 72.13638012972959,
  },
  {
    name: "Sardar Vallabhai Patel Central Vista",
    lat: -29.44273324541579,
    lng: 9.471088129354591,
  },
  {
    name: "PMMM Academic Complex",
    lat: -36.58391226727512,
    lng: -7.840249766259079,
  },
  {
    name: "Akshaya Boys Mess",
    lat: -20.94674715509609,
    lng: -59.424954954881926,
  },
  {
    name: "Pranahita Boys Residence",
    lat: -24.1906875022411,
    lng: -68.38591398321076,
  },
  {
    name: "Purna Boys Residence",
    lat: -21.92788666831784,
    lng: -75.5898222216712,
  },
  {
    name: "Sabari Boys Residence",
    lat: -20.124175083225474,
    lng: -83.14514061810529,
  },
  {
    name: "Manjeera Boys Residence",
    lat: -14.933114303944159,
    lng: -66.10174795638183,
  },
  {
    name: "Indravathi Boys Residence",
    lat: -10.82383492803682,
    lng: -69.79155461510547,
  },
  {
    name: "Banganga Boys Residence",
    lat: -8.225200505306107,
    lng: -74.53559174775013,
  },
  {
    name: "Godavari Boys Residence",
    lat: -15.021254970015647,
    lng: -89.93465599489545,
  },
  {
    name: "Girls Residence",
    lat: -65.50187433406545,
    lng: -144.23883679728323,
  },
  {
    name: "Guest House",
    lat: -75.39580754844489,
    lng: -146.26569122871103,
  },
  {
    name: "Staff Residential Complex",
    lat: -20.292231564761007,
    lng: -104.69388262979001,
  },
  {
    name: "Faculty Residential Complex",
    lat: -69.27310782345518,
    lng: -131.68216967280333,
  },
  {
    name: "Annapurna Girls Mess",
    lat: -50.836228112716334,
    lng: -143.4544099649216,
  },
  {
    name: "Dokka Seethamma Canteen",
    lat: 22.529715389268436,
    lng: 62.91472051321903,
  },
  {
    name: "Ravindra Kala Bharathi",
    lat: 37.027189066148786,
    lng: 81.10316216399096,
  },
  {
    name: "Student Amenities Centre",
    lat: 32.70490232688972,
    lng: 71.70140730103158,
  },
  {
    name: "Medical Complex",
    lat: 40.45177465327158,
    lng: 88.39611219787537,
  },
  {
    name: "Indoor Stadium",
    lat: 43.64681694362071,
    lng: 98.67653573961604,
  },
  {
    name: "Outdoor Courts",
    lat: 60.32855566897998,
    lng: 105.42019044288834,
  },
  {
    name: "Cricket Stadium",
    lat: 60.2414737664985,
    lng: 138.106665293551,
  },
  {
    name: "Engineering Workshops",
    lat: -34.53635949633706,
    lng: 62.82731365831262,
  },
  {
    name: "NIT Andhra East Gate",
    lat: 53.907208400914165,
    lng: 156.8585140053286,
  },
  {
    name: "NIT Andhra West Gate",
    lat: -71.93101254798546,
    lng: -167.3565788458123,
  },
];