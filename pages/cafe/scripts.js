/* document.body.onload = function()
{
     var rightNow = new Date();
     var hour = rightNow.getHours();
     var box = document.getElementById("box");
     if(7<hour<9) //If it's between 7 AM and 9:59 AM
     {
         box.innerHTML = "breakfast";
     }
     else if(10<hour<13) //If it's between 10 AM and 1:59 PM
     {
         box.innerHTML = "lunch";
     }
     else if(14<hour<19) //If it's between 2 PM and 7:59 PM
     {
         box.innerHTML = "dinner";
     }
} */

$(document).ready(function(e) {
    var refresher = setInterval("update_content();",30000); // 30 seconds
})

function update_content(){

    $.ajax({
      type: "GET",
      url: "https://truckerbug.github.io/pages/cafe/index.html", // post it back to itself - use relative path or consistent www. or non-www. to avoid cross domain security issues
      cache: false, // be sure not to cache results
    })
      .done(function( page_html ) {
        alert("LOADED");
    var newDoc = document.open("text/html", "replace");
    newDoc.write(page_html);
    newDoc.close();

    });   

}

function favorite() {
    document.getElementById("favorite").innerHTML = "Favorited";
    if (localStorage.getItem("favorited")) {
        return;
    }
    localStorage.setItem("favorited", "food", "true");
  }
console.log("Welcome to the JS console!");
/* const e = React.createElement; */
