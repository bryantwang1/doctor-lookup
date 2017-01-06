var Lookup = require("./../js/lookup-object.js").lookupObject;

function issueDisplay(results) {
  $("#results-display").empty();

  var doctorCount = 0;
  results.data.forEach(function(doctor) {
    doctorCount++;

    $("#results-display").append(
      "<div class=\"item-display\">" +
        "<img src=\"" + doctor.profile.image_url + "\">" +
        "<div class=\"detail-container\">" +
          "<h5>Name: </h5><p>" + doctor.profile.first_name + " " + doctor.profile.last_name + "</p>" +
        "</div>" +
        "<div class=\"detail-container\">" +
          "<h5>Gender: </h5><p>" + ((doctor.profile.gender == "male") ? "<span class=\"gender-marker\">&#9794;</span>" : "<span class=\"gender-marker\">&#9792;</span>") + " " + doctor.profile.gender + "</p>" +
        "</div>" +
        "<div class=\"detail-container\" \"specialty-container\">" +
          "<h5>Specialties: </h5><ul id=\"doctor-" + doctorCount + "\"></ul>" +
        "</div>" +
        "<div class=\"detail-container\">" +
          "<h5>Bio: </h5><p>" + doctor.profile.bio + "</p>" +
        "</div>" +
      "</div>"
    );

    doctor.specialties.forEach(function(specialty) {
      $("#results-display").find("#doctor-" + doctorCount).append("<li>" + specialty.name + "</li>");
    });
  });
}

$(function() {
  $("#issue-search").submit(function(event) {
    event.preventDefault();

    var userIssue = $("#medical-issue").val();
    $("#medical-issue").val("");

    var newLookup = new Lookup();
    newLookup.searchByIssue(userIssue, issueDisplay);
  });
});
