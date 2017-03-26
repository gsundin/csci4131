$(document).ready(function() {

  var blackLatch = 0;
  var violetLatch = 0;

  $('#blackbox').click(function() {
    var element = document.getElementById('greenbox'),
    greenLeft = element.getBoundingClientRect().left;

    //alert(latch);

    if (greenLeft >= 138) {
      blackLatch = 0;
    } else if (greenLeft <= -125) {
      blackLatch = 1;
    }

    if (blackLatch == 1) {
      $('#redbox').animate({
        'left' : "+=125px" //moves right
      });
      $('#greenbox').animate({
        'left' : "+=125px" //moves right
      });
      $('#bluebox').animate({
        'left' : "+=125px" //moves right
      });
      $('#violetbox').animate({
        'left' : "+=125px" //moves right
      });
      $('#orangebox').animate({
        'left' : "+=125px" //moves right
      });
      $('#indigobox').animate({
        'left' : "+=125px" //moves right
      });
      $('#yellowbox').animate({
        'left' : "+=125px" //moves right
      });
      
    } else if (blackLatch == 0) {
      $('#redbox').animate({
        'left' : "-=125px" //moves right
      });
      $('#greenbox').animate({
        'left' : "-=125px" //moves right
      });
      $('#bluebox').animate({
        'left' : "-=125px" //moves right
      });
      $('#violetbox').animate({
        'left' : "-=125px" //moves right
      });
      $('#orangebox').animate({
        'left' : "-=125px" //moves right
      });
      $('#indigobox').animate({
        'left' : "-=125px" //moves right
      });
      $('#yellowbox').animate({
        'left' : "-=125px" //moves right
      });
    }
  });

  $('#redbox').click(function() {
    var element = document.getElementById('violetbox'),
    violetBottom = element.getBoundingClientRect().bottom;

    if (violetBottom == 506) {
      $('#redbox').animate({
      'bottom' : "-=384px", //moves down
      'z-index' : "6"
      });
      $('#bluebox').animate({
        'bottom' : "+=128px", //moves down
        'z-index' : "2"
      });
      $('#yellowbox').animate({
        'bottom' : "-=128px", //moves down
        'z-index' : "4"
      });
      $('#orangebox').animate({
        'bottom' : "-=256px", //moves down
        'z-index' : "5"
      });
      $('#indigobox').animate({
        'bottom' : "+=256px", //moves down
        'z-index' : "1"
      });
      $('#violetbox').animate({
        'bottom' : "+=384px", //moves down
        'z-index' : "0"
      });
    } else {
      $('#redbox').animate({
      'bottom' : "+=384px", //moves down
      'z-index' : "0"
      });
      $('#bluebox').animate({
        'bottom' : "-=128px", //moves down
        'z-index' : "4"
      });
      $('#yellowbox').animate({
        'bottom' : "+=128px", //moves down
        'z-index' : "2"
      });
      $('#orangebox').animate({
        'bottom' : "+=256px", //moves down
        'z-index' : "1"
      });
      $('#indigobox').animate({
        'bottom' : "-=256px", //moves down
        'z-index' : "5"
      });
      $('#violetbox').animate({
        'bottom' : "-=384px", //moves down
        'z-index' : "6"
      });
    }
  });

  $('#violetbox').click(function() {
    var element = document.getElementById('violetbox'),
    violetBottom = element.getBoundingClientRect().bottom;

    if (violetBottom <= 506) {
      $('#redbox').animate({
      'bottom' : "-=384px", //moves down
      'z-index' : "6"
      });
      $('#bluebox').animate({
        'bottom' : "+=128px", //moves down
        'z-index' : "2"
      });
      $('#yellowbox').animate({
        'bottom' : "-=128px", //moves down
        'z-index' : "4"
      });
      $('#orangebox').animate({
        'bottom' : "-=256px", //moves down
        'z-index' : "5"
      });
      $('#indigobox').animate({
        'bottom' : "+=256px", //moves down
        'z-index' : "1"
      });
      $('#violetbox').animate({
        'bottom' : "+=384px", //moves down
        'z-index' : "0"
      });
    } else {
      $('#redbox').animate({
      'bottom' : "+=384px", //moves down
      'z-index' : "0"
      });
      $('#bluebox').animate({
        'bottom' : "-=128px", //moves down
        'z-index' : "4"
      });
      $('#yellowbox').animate({
        'bottom' : "+=128px", //moves down
        'z-index' : "2"
      });
      $('#orangebox').animate({
        'bottom' : "+=256px", //moves down
        'z-index' : "1"
      });
      $('#indigobox').animate({
        'bottom' : "-=256px", //moves down
        'z-index' : "5"
      });
      $('#violetbox').animate({
        'bottom' : "-=384px", //moves down
        'z-index' : "6"
      });
    }
  });


});
