$(document).ready(function () {
  console.log("ready");

  //Create on document ready animations jut if we are in the top of the document
  if (
    $(window).scrollTop() == 0 ||
    $(window).scrollTop() == $(document).height() - $(window).height()
  ) {
    $("#hello").animate({ left: "20vw" }, "slow");
    $("#iam").delay(1000).animate({ left: "33vw" }, "slow");
    $("#alex").css({ left: "-500px" });
    $("#alex").delay(2500).animate({ left: "5vw" }, "slow");
    $(window).scroll(function () {
      $(".bg-hide").css("display", "none");
    });
  } else {
    $(".bg-hide").css("display", "none");
  }
});

// SCROLL MAGIC:
// init controller
var controller = new ScrollMagic.Controller();

// NAVIGATION
// Menu
var sceneNav = new ScrollMagic.Scene({ triggerElement: "#bio", offset: -200 })
  .setClassToggle("#nav", "nav-active")
  .addTo(controller);

// Links
var sceneBioLink = new ScrollMagic.Scene({ triggerElement: "#bio", })
  .setClassToggle("#nav", "nav-active")
  .addIndicators() // add indicators (requires plugin)
  .addTo(controller);

// letter a:
var sceneA = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterA", "a-active")
  .addTo(controller);

var sceneLe = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterLe", "le-active")
  .addTo(controller);

var sceneX1 = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterX1", "x1-active")
  .addTo(controller);

var sceneX2 = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#letterX2", "x2-active")
  .addTo(controller);

var sceneHello = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#hello", "hello-active")
  .addTo(controller);

var sceneIam = new ScrollMagic.Scene({ offset: 200 })
  .setClassToggle("#iam", "iam-active")
  .addTo(controller);

// Bio Section
var sceneBioImg = new ScrollMagic.Scene({ triggerElement: "#bio", offset: 200 })
  .setClassToggle("#bioImg", "bio__img-active")
  .addTo(controller);

var sceneWorkBg = new ScrollMagic.Scene({ triggerElement: "#work" })
  .setClassToggle("#bgFront", "bg__front-work")
  .addTo(controller);

var sceneContactBg = new ScrollMagic.Scene({ triggerElement: "#contact" })
  .setClassToggle("#bgFront", "bg__front-contact")
  .addTo(controller);
