import { Loader } from "@googlemaps/js-api-loader";




export default function googleMaps(){
const google= window.google;
  let map;
  const additionalOptions = {};
  // [START maps_programmatic_load_promise]
  const loader = new Loader({
    apiKey: "AIzaSyAmQK_VORIZRgtSG6cXHYaEmBs7qUDZ6Cg",
    version: "weekly",
    
  });
  
  loader.load().then(() => {
   const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  });
}


// [END maps_programmatic_load_promise]
// [END maps_programmatic_load]