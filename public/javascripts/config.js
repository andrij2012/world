(function() {
  requirejs.config({
    baseUrl: "/javascripts/",
    paths: {
      three: "./lib/three.min"
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