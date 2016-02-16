(function() {
  'use strict';

  define(['three', 'app/game'], function(THREE, Game) {

    /**
     * App class. Initialize the game
     * @constructor
     */
    function App() {
      var _win     = window,
          game     = new Game(),
          renderer = new THREE.WebGLRenderer();

      // Make application full-width
      renderer.setSize(_win.innerWidth, _win.innerHeight);
      document.body.appendChild(renderer.domElement);

      // Start the game
      game.start();

      // Initialize the game's loop
      var animate;

      (animate = function() {
        _win.requestAnimationFrame(animate);
        game.update(renderer);
      })();
    }

    return new App();
  });
})();