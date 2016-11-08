$(document).ready(function () {
  $("#search-form").submit(function(event) {
    event.preventDefault();
    var queryData = $("#search-form").serialize();
    // var queryData = $("#search-id").val();
    console.log("queryData is: ", queryData);
    $.get("/search", queryData, function(results) {
      $("#result-list").html("");
      console.log(results);
      results.forEach(function(result) {
        var html = "<li><a href='" + result.url + "'target='_blank'>" +
          result.title +
          "</a></li>";
          $("#result-list").append(html);
      });
    });
  });
});
