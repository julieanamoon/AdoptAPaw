$(window).on("load", start);

function start(){

    $("#nav a:first").click();
}


$(document).on("click", "nav a[href]", nav);

function nav(e){

    e.preventDefault()
    // e represents event and we can prevent the default behaviour of the specific hyperlink
    var href = $(this).attr("href");

    $("#content").load("modules/" + href);

    $("#nav a").fadeTo("fast", 0.25);
    $(this).fadeTo("fast", 1);
}