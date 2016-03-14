define(['d3', 'topojson', 'three'], function(d3, topojson, THREE) {
  "use strict";

  function fetchCountryBoundariesCoordinates() {
    var coordinates = {};

    d3.json("/javascripts/data/world-110m.json", function(error, world) {
      if (error) {
        throw error;
      }

      coordinates = topojson.feature(world, world.objects.land).geometry.coordinates;
    });

    return coordinates;
  }

  function buildGeometry() {
    var coordinates    = fetchCountryBoundariesCoordinates(),
        sphereGeometry = new THREE.SphereBufferGeometry();
  }
});