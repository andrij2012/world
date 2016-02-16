(function() {
  requirejs.config({
    baseUrl: "/javascripts/",
    paths: {
      three: "lib/three.min",
      game:  "app/game"
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