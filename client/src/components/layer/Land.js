import React from 'react'

//EP9
import { GeoJSON } from 'react-leaflet'
import data from '../data/Land.json'
import { featureGroup } from 'leaflet'

const Land = () => {

  const handleEachFeature = (feature, layer) => {
    // code

    const handleClickFeature = (event) => {
      const layer = event.target
      const prop = event.target.feature.properties

      let popupContent = ''
      for (const [key, val] of Object.entries(prop)) {
        popupContent += key + ': ' + val + '<br />'
      }

      layer.bindPopup(popupContent)
    }

    layer.bindTooltip(feature.properties.เลขที่, {
      direction: 'right',
    })
    layer.on({
      'click': handleClickFeature
    })

  }

  return data && <GeoJSON
    data={data}
    style={{
      weight: 2,
      color: 'orange',
      fillColor: 'orange',
      fillOpacity: '0.3'
    }}
    onEachFeature={handleEachFeature}

  />
}

export default Land