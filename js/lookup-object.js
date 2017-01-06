var apiKey = require("./../.env").apiKey;

function Lookup() {}

Lookup.prototype.searchByIssue = function(medicalIssue, displayFunction) {
  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" +  medicalIssue + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=5&user_key=" + apiKey)
  .then(function(response) {
    console.log(response);
    displayFunction(response);
  })
  .fail(function(error) {
    console.log("fail");
  });
};

exports.lookupObject = Lookup;
