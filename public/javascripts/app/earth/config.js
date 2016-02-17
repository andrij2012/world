(function() {
  "use strict";

  define(['three'], function(THREE) {
    return {
      radius: 10,
      segments: 500,
      rings: 500,
      material: new THREE.MeshPhongMaterial()
    };
  });
})();