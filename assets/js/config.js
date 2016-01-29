(function() {
  requirejs.config({
    baseUrl: "assets/js/app",
    paths: {
      threejs: "../lib/three.min",
      three: "../lib/three",
      d3: '../lib/d3.min'
    },
    shim: {
      "threejs": {
        exports: "THREE"
      }
    }
  });

  requirejs(['app'], function(app) {});
})();