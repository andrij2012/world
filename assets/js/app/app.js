(function() {
  'use strict';

  define(['three'], function(Three) {
    var App = function() {
      var scene    = new Three.Scene(),
          camera   = new Three.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000),
          renderer = new Three.WebGLRenderer();

      renderer.setSize(window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);

      var geometry = new Three.BoxGeometry(1, 1, 1),
          material = new Three.MeshBasicMaterial({ color: 0xffffff }),
          cube     = new Three.Mesh(geometry, material);

      scene.add(cube);
      camera.position.z = 15;

      var render = function() {
        requestAnimationFrame(render);

        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
      };

      render();
    };

    return new App();
  });
})();