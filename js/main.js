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
    $(this).fadeTo(5000, 1, fadeDone);
  });

  // esemény kiváltása
  $("p").click();

  // kattintás megelőzése
  $("nav a.nav-link").click( function (ev) {
    ev.preventDefault();
    console.log(ev);
  });
});
