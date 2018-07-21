// callback függvény az esemény után
function fadeDone() {
    console.log(this);
}

$(document).ready(function() {
  // eseménykezelő beállítása
  $("p").click(function(event) {
    // event.preventDefault();
    // $(this).hide();
    $(this).hide();
    // $(this).fadeTo(5000, 1, fadeDone);
    $(this).slideDown(3500);
  });

  // esemény kiváltása
  $("p").click();

  $("nav a.nav-link").click( function (ev) {
    // kattintás megelőzése
    ev.preventDefault();
    // console.log(ev);
    var link = $(this);
    var prop = link.data("prop") || "opacity";
    var val = link.data("value") || "0";
    var speed = link.data("speed") || 3000;
    var settings = {};
    settings[prop] = val;

    // paraméter nélkül
    // $(document.body).animate({
    //   opacity: '0'
    // }, 500, function (){
    //   document.location = link.attr("href");
    // });

    // paraméterrel
    $(document.body).animate( settings, speed, function(){
      document.location = link.attr("href");
    });
  });
});
