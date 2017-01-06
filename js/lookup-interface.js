var Lookup = require("./../js/lookup-object.js").lookupObject;

function issueDisplay(results, doctorCount) {
  var savedCount = doctorCount;

  results.data.forEach(function(doctor) {
    doctorCount++;

    $("#results-display").append(
      "<div class=\"initial-hider\" id=\"hider-" + doctorCount + "\">" +
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
        "</div>" +
      "</div>"
    );

    doctor.specialties.forEach(function(specialty) {
      $("#results-display").find("#doctor-" + doctorCount).append("<li>" + specialty.name + "</li>");
    });
  });

  function fadeDoctorsIn() {
    setTimeout(function() {
      savedCount++;
      if(savedCount <= doctorCount) {
        $("#hider-" + savedCount).fadeIn(600);
        fadeDoctorsIn();
      }
    }, 220);
  }

  fadeDoctorsIn();
}

$(function() {
  var newLookup = new Lookup();
  var userIssue = "";

  $("#issue-search").submit(function(event) {
    event.preventDefault();
    $("#results-display").empty();
    newLookup.doctorCount = 0;

    userIssue = $("#medical-issue").val();
    $("#medical-issue").val("");

    newLookup.searchByIssue(userIssue, issueDisplay);
  });

  $(window).scroll(function() {
    if($(document).height() - $(window).height() == $(window).scrollTop()) {
      newLookup.searchByIssue(userIssue, issueDisplay);
    }
  })
});
