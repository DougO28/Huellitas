import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const position = [14.6792882, -90.4124816];

export default function Map() {
  return (
    <MapContainer center={position} zoom={15} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>Huellitas Guatemala (ejemplo)</Popup>
      </Marker>
    </MapContainer>
  );
}