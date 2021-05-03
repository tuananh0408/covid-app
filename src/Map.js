import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css"
import { showDataOnMap } from "./Util"

function Map({center, zoom, countries, casesType}) {
    return (
        <div className="map">
     <MapContainer center={center} zoom={zoom} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   {showDataOnMap(countries, casesType)}
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
</MapContainer>
    </div>
    )
}

export default Map
