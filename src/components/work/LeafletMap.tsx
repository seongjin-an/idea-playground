import React from "react";
import L, {CRS, bounds, LatLng} from 'leaflet';
import {MapContainer, Marker, Pane, Popup, TileLayer} from "react-leaflet";
import 'proj4leaflet';
import 'leaflet/dist/leaflet.css';

//1807hsm
const LeafletMap: React.FC = () => {
    return(
        <MapContainer style={{ width: '100vw', height: '100vh'}} center={[37.1, 127.1]} zoom={13} scrollWheelZoom={false}>
            <Pane name={'test'}>
                <TileLayer
                    tms minZoom={0} maxZoom={13} zoomOffset={1} zoomReverse
                    // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    url="https://map1.daumcdn.net/map_2d_hd/2212ejo/L{z}/{y}/{x}.png"
                />
            </Pane>
            <Marker position={[37.1, 127.1]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default LeafletMap