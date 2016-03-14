(function() {
  requirejs.config({
    baseUrl: "/javascripts/",
    paths: {
      three: "lib/three.min",
      game:  "app/game",
      d3: "lib/d3.min",
      topojson: "lib/topojson.v1.min"
    },
    shim: {
      "three": {
        exports: "THREE"
      }
    }
  });

  // Initialize the application
  requirejs(['app/app']);
})();