(function() {
  'use strict';

  define(['three', 'app/game', 'app/settings'], function(THREE, Game, Settings) {

    /**
     * App class. Initialize the game
     * @constructor
     */
    function App() {
      this.settings = Settings;

      var game     = new Game(),
          renderer = new THREE.WebGLRenderer();

      // Make application full-width
      renderer.setSize(this.settings.screen.width, this.settings.screen.height);
      document.body.appendChild(renderer.domElement);

      // Start the game
      game.start();

      // Initialize the game's loop
      var animate;

      (animate = function() {
        requestAnimationFrame(animate);
        game.update(renderer);
      })();
    }

    return new App();
  });
})();