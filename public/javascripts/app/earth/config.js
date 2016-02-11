(function() {
  "use strict";

  define(['three'], function(Three) {
    return {
      radius: 50,
      segments: 16,
      rings: 16,
      material: new Three.MeshBasicMaterial({ color: 0xffff00 })
    };
  });
})();