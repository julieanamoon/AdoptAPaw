$(window).on("load", start);

function start(){

    $("#nav a:first").click();
}

// CHANGE NAVIGATION TITLE
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



// LOAD OTHER HTML PAGES TO CONTENT SECTION
$(document).on("click", "#content a[href]", contentNav);

function contentNav(e){

    e.preventDefault()
    // e represents event and we can prevent the default behaviour of the specific hyperlink
    var href = $(this).attr("href");

    $("#content").load("modules/" + href);

    $("#nav_left").fadeTo(0, 1);

    if (href == "donate.html") {
        $("#nav_title").text("Donate");
    } 
}


// TOGGLE FAVOURITES
function favourite(x) {
    x.classList.toggle("fa-star-o");
  }


// SEARCH CODE
function place(index, obj){
    $("#list").append("<img class='d-block w-100 mb-2' src='"+obj.thumbnail+"'>");
    }
    
    function populate(data){
    $("#list").empty();
    $.each(data.results , place);


    
    }
    
    function search (e) {
    
        if (e.which == 13) {
    
        var keyword = $("#keyword").val();
    
        if (keyword.length < 4) {
        alert("Your keyword is too short!");
       
       } else {
    
        var url = "https://api.creativecommons.engineering/v1/images?page_size=3&format=json&q="+keyword;
    
        $.ajax({
        url: url,
        success: populate

    });
    
    }
    }
    
    }
    
    $(document).on("keyup", "#keyword", search);


// CLEAR CACHE
$(document).ready(function() {

    $.ajaxSetup({ cache: false });
    
  });



