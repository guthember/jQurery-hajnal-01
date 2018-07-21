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

  // kattintás megelőzése
  $("nav a.nav-link").click( function (ev) {
    ev.preventDefault();
    // console.log(ev);
    var link = $(this);
    $(document.body).animate({
      opacity: '0'
    }, 500, function (){
      document.location = link.attr("href");
    });
  });
});
