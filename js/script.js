$(window).on("load", start);

function start(){

    $("#nav a:first").click();
}


$(document).on("click", "#nav a[href]", nav);

function nav(e){

    e.preventDefault()
    // e represents event and we can prevent the default behaviour of the specific hyperlink
    var href = $(this).attr("href");

    $("#content").load("modules/" + href);

    $("#nav a").fadeTo("fast", 0.25);
    $(this).fadeTo("fast", 1);


    $("#nav_left").fadeTo(0, 0);

    if (href == "home.html") {
        $("#nav_title").text("Adopt A Paw");
    } else if (href== "search.html") {
        $("#nav_title").text("Search");
    } else if (href== "match.html") {
        $("#nav_title").text("Your Matches");
    }else if (href== "favs.html") {
        $("#nav_title").text("Your Favourites");
    } 
}


// $(document).on("click", "#content a[href]", contentNav);

// function contentNav(e){

//     e.preventDefault()
//     // e represents event and we can prevent the default behaviour of the specific hyperlink
//     var href = $(this).attr("href");

//     $("#content").load("modules/" + href);

//     $("#nav_left").fadeTo(0, 1);
// }





$(document).ready(function() {

    $.ajaxSetup({ cache: false });
  });