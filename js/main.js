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

var alertBox = $(".alert.alert-primary");
function showInvalidMessage() {
  alertBox
    .removeClass("alert-primary")
    .addClass("alert-danger")
    .find(".alert-message")
    .text("Sikertelen belépés!");
};

// ticket.html
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});


// Jegyek tömbje

var tickets = [
  {
    event: "Sziget fesztivál",
    time: "2018-08-03 18:00:00,",
    seller: "Kiss Márton",
    pcs: 5,
    link: "licit/1"
  },
  {
    event: "Balett mindenkinek",
    time: "2018-08-03 18:00:00,",
    seller: "Nagy Ádám",
    pcs: 2,
    link: "licit/1"
  },
  {
    event: "Diótörő balett",
    time: "2018-08-03 18:00:00,",
    seller: "Brezeviczky Krisztián",
    pcs: 9,
    link: "licit/1"
  },
  {
    event: "MOMA parti",
    time: "2018-08-03 18:00:00,",
    seller: "Zwack Magdolna",
    pcs: 1,
    link: "licit/1"
  },
  {
    event: "A kékszakállú herceg vára",
    time: "2018-08-03 18:00:00,",
    seller: "Schwarz Aurél",
    pcs: 15,
    link: "licit/1"
  },
  {
    event: "Macskák musicak",
    time: "2018-08-03 18:00:00,",
    seller: "Cserkó József",
    pcs: 7,
    link: "licit/1"
  }
];

// Jegyek táblájának generálása
var ticketTable = $("table.table.table-striped").eq(0);
function fillTicketTable( currentTicket ) {

  // ha nincsenek jegyek
  currentTicket = currentTicket || tickets;

  var tbody = ticketTable.find("tbody");
  tbody.html("");
  $.each( currentTicket, function(index, ticket ) {
    var row = $(".templates .ticket-row").clone();
    row.find("td").eq(0).html(index + 1);
    row.find("td").eq(1).html(ticket.event);
    row.find("td").eq(2).html(ticket.time);
    row.find("td").eq(3).html(ticket.seller);
    row.find("td").eq(4).html(ticket.pcs);
    row.find("td").eq(5).html(ticket.link);
    tbody.append(row);
  })
};

fillTicketTable();

// Jegyek táblázat szűrése

$(".tickets-search-row input").on("keyup", filterTickets);

function filterTickets() {
  // input mező értékének kiírása minden egyes billentyűzet lenyomására
  // console.log($(this).val());
  var currentValue = $(this).val().toLowerCase();
  var filteredTickets = [];
  if (currentValue === "") {
    filteredTickets = tickets;
  } else {
    filteredTickets = tickets.filter( function(item) {
      var done = false;
      for (var k in item) {
        if ( item[k].toString().toLowerCase().indexOf(currentValue)  > -1 ) {
          done = true;
        }
      }
      return done;
    });
  }

  fillTicketTable(filteredTickets);
};

// Jegyek táblázat rendezése
ticketTable.find("thead th[data-key]").on("click", orderTicketTable);

function orderTicketTable() {
  var th = $(this);
  $.each(ticketTable.find("thead th[data-key]"), function(index, elem) {
    var currentTh = $(elem);
    if( th.data("key") != currentTh.data("key")) {
      currentTh.removeClass("asc").removeClass("desc");
    }
  });
  var key = th.data("key");

  // klónozás, hogy az eredeti tömb ne sérüljön
  var sortedTickets = tickets.map( function( item) {
    return item;
  });

  if( th.hasClass("asc")) {
    th.removeClass("asc").addClass("desc");
    sortedTickets.sort(function(a, b) {
      return b[key].toString().localeCompare(a[key].toString());
    });
  } else {
    th.removeClass("desc").addClass("asc");
    sortedTickets.sort(function(a, b) {
      return a[key].toString().localeCompare(b[key].toString());
    });
  }

  fillTicketTable(sortedTickets);
}
