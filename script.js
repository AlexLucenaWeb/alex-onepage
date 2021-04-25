// SCROLL MAGIC:
// init controller
var controller = new ScrollMagic.Controller();

// Bio Section
var scene = new ScrollMagic.Scene({ triggerElement: "#bio", offset: 200 })
  // trigger a velocity opaticy animation
  .setClassToggle("#bioImg", "bio__img-active")
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);
