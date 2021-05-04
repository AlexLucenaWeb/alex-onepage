$(document).ready(function () {
  $(this).scrollTop(0);

  // -- GENERAL JS -- //
  // -- custom cursor -- //
  var mouseX = 0,
    mouseY = 0;
  var xp = 0,
    yp = 0;

  $(document).mousemove(function (e) {
    mouseX = e.pageX - 12;
    mouseY = e.pageY - 12;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    $("#circle").css({ left: xp + "px", top: yp + "px" });
  }, 20);

  $(".contact__link").hover(function () {
    $("#circle").toggleClass("circle__hovered");
  });

  $(".item__link").hover(function () {
    $("#circle").toggleClass("circle__hovered");
  });
  // end cursor //

  // -- scroll down -- //
  $("#scroll").delay(3500).fadeIn("slow");

  // -- if on screen -- //
  $.fn.isOnScreen = function () {
    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft(),
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return !(
      viewport.right < bounds.left ||
      viewport.left > bounds.right ||
      viewport.bottom < bounds.top ||
      viewport.top > bounds.bottom
    );
  };

  // ---- SECTION NAV ---- //
  // Nav links animation:
  $(window).scroll(function () {
    if ($("#bio").isOnScreen() == true) {
      $("#bioLink").addClass("link-active");
      $("#workLink").removeClass("link-active");
      $("#contactLink").removeClass("link-active");
    }
    if ($("#work").isOnScreen() == true) {
      $("#bioLink").removeClass("link-active");
      $("#workLink").addClass("link-active");
      $("#contactLink").removeClass("link-active");
    }
    if ($("#contact").isOnScreen() == true) {
      $("#bioLink").removeClass("link-active");
      $("#workLink").removeClass("link-active");
      $("#contactLink").addClass("link-active");
    }
  });

  // ---- SECTIONA ANIMATION ---- //
  //Create on document ready animations jut if we are in the top of the document
  if (
    $(window).scrollTop() == 0 ||
    $(window).scrollTop() == $(document).height() - $(window).height()
  ) {
    $("#hello").animate({ left: "20vw" }, "slow");
    $("#iam").delay(1000).animate({ left: "30vw" }, "slow");
    $("#alex").delay(2500).animate({ bottom: "0" }, "slow");
    $(".bg-hide").css("display", "fixed");
  }

  // ---- SECTION WORK ---- //

  // Simple paralax:
  function parallax() {
    var yPos = 0 - 30 - window.pageYOffset / 3;
    document.getElementById("bandaLink").style.top = 1000 + yPos + "%";
    document.getElementById("myStorytellerLink").style.top = 1100 + yPos + "%";
    document.getElementById("musicaYTuLink").style.top = 1300 + yPos + "%";
    document.getElementById("preparaLink").style.top = 1600 + yPos + "%";
  }

  window.addEventListener("scroll", function () {
    parallax();
  });

  // ---- SECTION CONTACT ---- //
  // Lests talk array:
  const list = document.querySelector("#list");
  const display = (s) => (list.innerText = s);
  const names = ["talk", "design", "code", "work"];
  const delayLoop = (fn, delay) => {
    return (name, i) => {
      setTimeout(() => {
        display(name);
      }, i * 1500);
    };
  };
  $(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() > $(document).height() - 1) {
      names.forEach(delayLoop(display, 10000));
      $("#scroll").fadeOut();
    } else {
      $("#scroll").fadeIn();
    }
  });

  // Links logo animations:

  //Logo movement:
  // $(document).mousemove(function (e) {
  //   let moveX1 = (e.pageX * -1) / 60;
  //   let moveY1 = (e.pageY * -1) / 60;

  //   $('#letterA').css('background-position', moveX1 + 'px ' + moveY1 + 'px ');
  // $('#letterX1').css('background-position', moveX1 + 'px ' + moveY1 + 'px ');
  // $('#letterX2').css('background-position', moveX1 + 'px ' + moveY1 + 'px ');
  // });
});

// ------------ SCROLL MAGIC: ----------------
// init controller
var controller = new ScrollMagic.Controller();

// NAVIGATION
// Menu
var sceneNav = new ScrollMagic.Scene({ triggerElement: "#bio", offset: -300 })
  .setClassToggle("#nav", "nav-active")
  .addTo(controller);

// Section: ANimation.
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

// Section: Bio
var sceneBioImg = new ScrollMagic.Scene({ triggerElement: "#bio", offset: 200 })
  .setClassToggle("#bioImg", "bio__img-active")
  .addTo(controller);

// Section WORK:
var sceneWorkBg = new ScrollMagic.Scene({ triggerElement: "#work" })
  .setClassToggle("#bgFront", "bg__front-work")
  .addTo(controller);

// var sceneParalax = new ScrollMagic.Scene({ triggerElement: "#banda" })
//   .setClassToggle("#bandaLink", "item__link-active")
//   .addIndicators()
//   .addTo(controller);

// section CONTACT:
var sceneContactBg = new ScrollMagic.Scene({ triggerElement: "#contact" })
  .setClassToggle("#bgFront", "bg__front-contact")
  .addTo(controller);

var sceneContactLinks = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 100,
})
  .setClassToggle("#inLink", "contact__link-active")
  .addTo(controller);

var sceneContactLinks2 = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 200,
})
  .setClassToggle("#gitLink", "contact__link-active")
  .addTo(controller);

var sceneContactLinks3 = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 300,
})
  .setClassToggle("#mailLink", "contact__link-active")
  .addTo(controller);

var sceneContactLinks4 = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 400,
})
  .setClassToggle("#phoneLink", "contact__link-active")
  .addTo(controller);

var sceneLets = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 200,
})
  .setClassToggle("#lets", "lets-active")
  .addTo(controller);

var sceneTalk = new ScrollMagic.Scene({
  triggerElement: "#contact",
  offset: 200,
})
  .setClassToggle("#list", "talk-active")
  // .addIndicators()
  .addTo(controller);

// remove hello element from animation section:
var sceneHello = new ScrollMagic.Scene({
  triggerElement: "#contact",
})
  .setClassToggle("#hello", "display-none")
  .addTo(controller);
