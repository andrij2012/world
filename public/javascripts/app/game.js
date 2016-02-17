(function() {
  "use strict";

  define(['three', 'app/earth/config', 'app/settings'], function(THREE, EarthConfig, Settings) {

    /**
     * Game class
     * @constructor
     */
    function Game() {
      this.settings = Settings;

      var that = this;
      var scene, camera, earth, background, light;

      /**
       * Initialize galaxy star field. Background view.
       * @returns {{scene: (THREE.Scene|*), camera: (THREE.Camera|*)}}
       */
      var initBackground = function() {
        var mesh = new THREE.Mesh(
          new THREE.PlaneGeometry(that.settings.background.position.x, that.settings.background.position.y, that.settings.background.position.z),
          new THREE.MeshBasicMaterial({
            map: THREE.ImageUtils.loadTexture(that.settings.background.texture)
          })
        );

        mesh.material.depthTest  = false;
        mesh.material.depthWrite = false;

        var scene  = new THREE.Scene();
        var camera = new THREE.Camera();

        scene.add(camera);
        scene.add(mesh);

        return {scene: scene, camera: camera};
      };

      /**
       * Initialize light
       * @returns {THREE.SpotLight}
       */
      var initLight = function() {
        var spotLight = new THREE.SpotLight(that.settings.light.color);

        spotLight.position.set(that.settings.light.position.x, that.settings.light.position.y, that.settings.light.position.z);
        spotLight.intensity = that.settings.light.intensity;

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

        camera = new THREE.PerspectiveCamera(
          that.settings.camera.fov,
          that.settings.camera.aspect,
          that.settings.camera.near,
          that.settings.camera.far
        );

        scene = new THREE.Scene();
        earth = new THREE.Mesh(
          new THREE.SphereGeometry(
            EarthConfig.radius,
            EarthConfig.segments,
            EarthConfig.rings
          ),
          EarthConfig.material
        );

        camera.position.z = that.settings.camera.distance;

        scene.add(earth);
        scene.add(light);
      };

      /**
       * Loop function. Executes per each frame
       * @param {THREE.WebGLRenderer} r
       */
      this.update = function(r) {
        earth.rotation.y += 0.0001;

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
          if (e.deltaY > 0 && camera.position.z <= that.settings.camera.zoom.max) {
            camera.position.z += that.settings.camera.zoom.factor;
          } else if (e.deltaY < 0 && camera.position.z >= that.settings.camera.zoom.min) {
            camera.position.z -= that.settings.camera.zoom.factor;
          }
        };
      };
    }

    return Game;
  });
})();