(function() {
  "use strict";

  define(['three'], function(THREE) {
    return {
      radius: 50,
      segments: 50,
      rings: 50,
      material: new THREE.MeshPhongMaterial()
    };
  });
})();