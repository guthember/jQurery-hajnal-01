// callback függvény az esemény után
function fadeDone() {
    console.log(this);
}

$(document).ready(function() {
  // eseménykezelő beállítása
  $("p").click(function(event) {
    // event.preventDefault();
    // $(this).hide();
    // $(this).fadeTo(5000, 1, fadeDone);
    // $(this).slideDown(3500).css("color","blue");
  });

  // esemény kiváltása
  // $("p").click();

  $("nav a.nav-link").click( function (ev) {
    // kattintás megelőzése
    ev.preventDefault();
    // console.log(ev);

    startPage(this, 1, false);
    // var link = $(this);
    // var prop = link.data("prop") || "opacity";
    // var val = link.data("value") || "0";
    // var speed = link.data("speed") || 3000;
    // var settings = {};
    // settings[prop] = val;

    // paraméter nélkül
    // $(document.body).animate({
    //   opacity: '0'
    // }, 500, function (){
    //   document.location = link.attr("href");
    // });

    // paraméterrel
    // $(document.body).animate( settings, speed, function(){
    //   document.location = link.attr("href");
    // });
  });
});

function startPage( elem, num, bool) {
  var link = $(elem);
  var prop = link.data("prop") || "opacity";
  var val = link.data("value") || "0";
  var speed = link.data("speed") || 3000;
  var settings = {};
  settings[prop] = val;
  // console.log("num: ",num);
  // console.log("bool: ",bool);
  $(document.body).animate( settings, speed, function(){
    document.location = link.attr("href");
  });
};

// events.html
$(".events-search-row input").on("keyup", function(ev) {
$.each( $(".events-card-deck .card .card-title"), function(i, e)   {
    var elem = $(e);
    var search = ev.target.value.toLowerCase();
    var content = elem.html().toLowerCase();
    if ( content.indexOf(search) == -1 ) {
      elem.parents(".card").hide();
    } else {
      elem.parents(".card").show();
    }
  });
});

// register.html
$(".cherry-custom-file").on("change", function(ev) {
  var name = ev.target.value.split("\\").pop();
  $(this).find(".file-name").html(
    name);
});

// ticket.html
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
