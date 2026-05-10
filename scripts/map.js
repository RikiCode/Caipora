    const map = new maplibregl.Map({
    style: 'https://tiles.openfreemap.org/styles/positron',
    center: [-60.02571521482677,-3.0969381008397177], //se for pergar do google as coordenadas saem invertidas
    zoom: 16,
    container: 'map',
  })
  new maplibregl.Marker().setLngLat([-60.02571521482677,-3.0969381008397177]).addTo(map)