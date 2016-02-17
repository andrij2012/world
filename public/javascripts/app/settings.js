(function () {
  define(function () {
    var _win = window;

    return {
      screen: {
        width:  _win.innerWidth,
        height: _win.innerHeight
      },
      camera: {
        zoom: {
          factor: 5,
          min:    20,
          max:    70
        },
        distance: 50,
        fov:      75,
        aspect:   _win.innerWidth / _win.innerHeight,
        near:     0.1,
        far:      1000
      },
      light: {
        position: {x: 50, y: 50, z: 400},
        intensity: 0.7,
        color: 0xffffff
      },
      background: {
        position: {x: 2, y: 2, z: 0},
        texture: 'images/galaxy_starfield.png'
      }
    };
  });
})();