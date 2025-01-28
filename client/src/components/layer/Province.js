import React from 'react'

//EP9
import { GeoJSON } from 'react-leaflet'
import data from '../data/Province.json'
import { featureGroup } from 'leaflet'

const Province = () => {

  const geostlye = (feature) => {
    const region = feature.properties.REGION6
    console.log(feature)
    if (region == 'ภาคกลาง') {
      return {
        weight: 1,
        color: 'black',
        fillColor: 'none',
        fillOpacity: 0 //ความเข้ม
      }
    } else if (region == 'ภาคตะวันออกเฉียงเหนือ') {
      return {
        weight: 1,
        color: 'black',
        fillColor: 'none',
        fillOpacity: 0 //ความเข้ม
      }
    } else if (region == 'ภาคเหนือ') {
      return {
        weight: 1,
        color: 'black',
        fillColor: 'none',
        fillOpacity: 0 //ความเข้ม
      }
    } else if (region == 'ภาคใต้') {
      return {
        weight: 1,
        color: 'black',
        fillColor: 'none',
        fillOpacity: 0 //ความเข้ม
      }
    } else if (region == 'ภาคตะวันออก') {
      return {
        weight: 1,
        color: 'black',
        fillColor: 'none',
        fillOpacity: 0 //ความเข้ม
      }
    } else if (region == 'ภาคตะวันตก') {
      return {
        weight: 1,
        color: 'black',
        fillColor: 'none',
        fillOpacity: 0 //ความเข้ม

    
      }
    }
  }

  return data && <GeoJSON

    data={data}
    style={geostlye}
  />

}

export default Province