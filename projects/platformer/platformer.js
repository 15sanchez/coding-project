$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);
    createCollectable("database", 200, 170, 6, 0.7); //your example function call

    createPlatform(150,700,100,30)
    createPlatform(300,600,100,30)
    createPlatform(450,500,100,30)
    createPlatform(800,500,100,30)
    createPlatform(850,500,100,30)
    createPlatform(900,500,100,30)
    createPlatform(950,500,100,30)
    createPlatform(1000,500,100,30)
    createPlatform(1050,500,100,30)
    createPlatform(625,250,100,30)
    createPlatform(900,375,100,30)
    createPlatform(450,100,25,315)
    createPlatform(50,1,100,25)
    createPlatform(775,325,100,30)
    createPlatform(50,130,495,25)
    createPlatform(50,25,25,110)
    createCannon("bottom", 600, 1000);
    createCannon("left", 75, 2500);
    createCollectable("database",100,100,0, 0.1);
    createCollectable("database",1050, 300, 5, 0.6)
  }
  

  registerSetup(setup);
});
