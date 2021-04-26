// SCROLL MAGIC:
// init controller
var controller = new ScrollMagic.Controller();

// NAVIGATION
var scene = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#nav", "nav-active")
  .addTo(controller);

// Animation Section:
// letter a:
var scene = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterA", "a-active")
  .addTo(controller);

var scene = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterLe", "le-active")
  .addTo(controller);

var scene = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterX1", "x1-active")
  .addTo(controller);

var scene = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterX2", "x2-active")
  .addTo(controller);

var scene = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#hello", "hello-active")
  .addTo(controller);

var scene = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#iam", "iam-active")
  .addTo(controller);

// Bio Section
var scene = new ScrollMagic.Scene({ triggerElement: "#bio", offset: 200 })
  // trigger a velocity opaticy animation
  .setClassToggle("#bioImg", "bio__img-active")
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
