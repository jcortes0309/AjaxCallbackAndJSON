$(document).ready(function () {
  $("#search-form").submit(function(event) {
    event.preventDefault();
    var queryData = $("#search-form").serialize();
    // var queryData = $("#search-id").val();
    console.log("queryData is: ", queryData);
    $.get("/search", queryData, function(html) {
      console.log(html);
      for (var i = 0; i < html.length; i++) {
        $("#result-list").append("<li>Title: " + html[i].title + "</li>");
      }
    });
  });
});
