import React from 'react'
import L from 'leaflet'
import '../App.css';
import 'leaflet/dist/leaflet.css'
import styled from 'styled-components' 
import Details from './setQuar'


const Wrapper = styled.div`
  width:${props => props.width};
  height:${props=>props.height};
`;
const circles=[{
  "lat":31.666239,
  "lng":394.620272
},
{
  "lat":31.751706,
  "lng":34.620272
},{
  "lat":31.752376,
  "lng":35.0272
},{
  "lat":32.921280,
  "lng":35.20272
},{
  "lat":32.297581,
  "lng":35.20272
},{
  "lat":32.099945 ,
  "lng":35.595998
},{
  "lat":32.110931 ,
  "lng":34.926524
},{
  "lat":32.243049 ,
  "lng":35.228962
},{
  "lat":33.002441, 
  "lng":35.418805
}
]
export default class Map extends React.Component{
  

  componentDidMount(){
    

    this.map = L.map('map',{
      center:[31.771959, 34.771959],
      zoom:9,
      zoomControl:false
    }).setView([	32.011348724365234, 35.094669342041016])
  
    L.control.scale().addTo(this.map);

    // const metresPerPixel = 40075016.686 * Math.abs(Math.cos(this.map.getCenter().lat * Math.PI/180)) / Math.pow(2, this.map.getZoom()+8);
  
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1Ijoib2ZpcjA4IiwiYSI6ImNrN3c0MDVpcjAwY3UzaHQyY2F2OWNrcmwifQ.Gpe2et2NevQA8Ua_U9-6Ew'
  }).addTo(this.map);
  circles.forEach(element => {
    const circle = L.circle([element.lat,element.lng],9000 ,{
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 50000
    }).addTo(this.map);
  });
    

  }
  render(){
    
    return (
      
      <div>
          <h2 id="details-header-map" >חולים מאומתים מבודדים:</h2>
       <Wrapper  width="750px" height="750px" id="map"/>
      </div>


    )
  }
}



// import React from 'react'
// import { render } from 'react-dom'
// import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

// const Maps = () => {

//     fetch("http://localhost:3000")
//   .then(res => res.json())
//   .then(rows => alert("!"))
// const position = [51.505, -0.09]
// const map = (
//   <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
//     />
//     <Marker position={position}>
//       <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
//     </Marker>
//   </Map>
// )
// render(map, document.getElementById('map-container'))
//   }


// // function p(){
// // fetch("http://localhost:3000")
// //   .then(res => res.json())
// //   .then(rows => alert("!"))
// // const position = [51.505, -0.09]
// // const map = (
// //   <Map center={position} zoom={13}>
// //     <TileLayer
// //       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //       attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
// //     />
// //     <Marker position={position}>
// //       <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
// //     </Marker>
// //   </Map>
// // )

// // render(map, document.getElementById('map-container'))
// // }

// export default Maps