import React from 'react'
import { MapContainer, LayersControl, LayerGroup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
//EP2
import BaseMap from './layer/BaseMap'


import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

//EP9
import Land from './layer/Land'
import Forest from './layer/Forest';
import Province from './layer/Province'

//EP16
import './map.css'


let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12.5, 20.5]
});
L.Marker.prototype.options.icon = DefaultIcon;

const MapComtents = () => {
    // javascript
    return (
        <div>

            <MapContainer
                style={{ width: '100%', height: '100vh' }}
                center={[13, 100]}
                zoom={6}
                scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <LayersControl position="topright">

                    <BaseMap />

                    {/* EP9 */}
                    <LayersControl.Overlay name="Land" checked>
                        <LayerGroup>
                            <Land />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Forest" checked>
                        <LayerGroup>
                            <Forest />
                        </LayerGroup>
                    </LayersControl.Overlay>

                    <LayersControl.Overlay name="Province" checked>
                        <LayerGroup>
                            <Province />
                        </LayerGroup>
                    </LayersControl.Overlay>


                </LayersControl>
            </MapContainer>
        </div>
    )
}

export default MapComtents
