// mapboxgl.accessToken = mapToken;
// console.log(mapToken);
// const map = new mapboxgl.Map({
//   container: "map", // container ID
//   // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//   style: "mapbox://styles/mapbox/streets-v12", // style URL
//   center: listing.geometry.coordinates, // starting position [lng, lat]
//   zoom: 9, // starting zoom
// });

// //Create a default Marker and add it to the map.
// const marker = new mapboxgl.Marker({ color: "red" })
//   .setLngLat(listing.geometry.coordinates) // listing .geometry.coordinates
//   .setPopup(
//     new mapboxgl.Popup({ offset: 25 }).setHTML(
//       `<h5>${listing.location}</h5> <p>Exact location provided after booking</p>`
//     )
//   )

//   .addTo(map);

mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: activity.geometry.coordinates, // starting position [lng, lat]
  zoom: 9, // starting zoom
});

// Create a default Marker and add it to the map.
const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(activity.geometry.coordinates) // activity .geometry.coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 }).setHTML(
      `<b><h5>${activity.title}</h5></b> <p>Exact location provided after reservation</p>`
    )
  )

  .addTo(map);
