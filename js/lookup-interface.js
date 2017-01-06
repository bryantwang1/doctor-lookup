var Lookup = require("./../js/lookup-object.js").lookupObject;

$(function() {
  $("#issue-search").submit(function(event) {
    event.preventDefault();

    var userIssue = $("#medical-issue").val();
    $("#medical-issue").val("");

    var newLookup = new Lookup();
    newLookup.searchByIssue(userIssue, issueDisplay);
  });
});
