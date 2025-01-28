// rafce
import React from "react";
import { LayersControl, TileLayer } from 'react-leaflet';

const BaseMap = () => {
    //javascript
    return (
        <>

            <LayersControl.BaseLayer name="Google Satellite">
                <TileLayer url='https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Esri.WorldStreetMap">
                <TileLayer url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Google Maps">
                <TileLayer url='https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="White" checked>
                <TileLayer url='https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png' />
            </LayersControl.BaseLayer>

            <LayersControl.BaseLayer name="Black">
                <TileLayer url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png' />
            </LayersControl.BaseLayer>

        </>
    )
}

export default BaseMap