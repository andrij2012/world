(function() {
  "use strict";

  define(['three', 'app/earth/config'], function(THREE, EarthConfig) {

    /**
     * Game class
     * @constructor
     */
    function Game() {
      var that = this;
      var scene, camera, earth, background, light;

      /**
       * Initialize galaxy star field. Background view.
       * @returns {{scene: (THREE.Scene|*), camera: (THREE.Camera|*)}}
       */
      var initBackground = function() {
        var mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(2, 2, 0),
          new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture('images/galaxy_starfield.png')
          })
        );

        mesh.material.depthTest  = false;
        mesh.material.depthWrite = false;

        var scene  = new THREE.Scene();
        var camera = new THREE.Camera();

        scene.add(camera);
        scene.add(mesh);

        return { scene: scene, camera: camera };
      };

      /**
       * Initialize light
       * @returns {THREE.SpotLight}
       */
      var initLight = function() {
        var spotLight = new THREE.SpotLight(0xffffff);

        spotLight.position.set(50, 50, 400);
        spotLight.intensity = 0.7;

        return spotLight;
      };

      /**
       * Start the game
       * @returns {Game}
       */
      this.start = function() {
        background = initBackground();
        light      = initLight();

        this.bindMouseWheelEvent();

        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        scene  = new THREE.Scene();
        earth  = new THREE.Mesh(
          new THREE.SphereGeometry(
            EarthConfig.radius,
            EarthConfig.segments,
            EarthConfig.rings
          ),
          EarthConfig.material
        );

        camera.position.z = 300;

        scene.add(earth);
        scene.add(light);

        return that;
      };

      /**
       * Loop function. Executes per each frame
       * @param {THREE.WebGLRenderer} r
       */
      this.update = function(r) {
        earth.rotation.y += 0.01;

        r.autoClear = false;
        r.clear();
        r.render(background.scene, background.camera);
        r.render(scene, camera);
      };

      /**
       * Camera mouse wheel handling
       */
      this.bindMouseWheelEvent = function() {
        window.onmousewheel = function(e) {
          if (e.deltaY > 0 && camera.position.z <= 220) {
            camera.position.z += 10;
          } else if (e.deltaY < 0 && camera.position.z >= 70) {
            camera.position.z -= 10;
          }
        };
      };
    }

    return Game;
  });
})();