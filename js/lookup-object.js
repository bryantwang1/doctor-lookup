var apiKey = require("./../.env").apiKey;

function Lookup() {
  this.doctorCount = 0;
}

Lookup.prototype.searchByIssue = function(medicalIssue, displayFunction) {
  var doctorCount = this.doctorCount;

  $.get("https://api.betterdoctor.com/2016-03-01/doctors?query=" +  medicalIssue + "&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=" + doctorCount + "&limit=10&user_key=" + apiKey)
  .then(function(response) {
    console.log(response);
    displayFunction(response, doctorCount);
  })
  .fail(function(error) {
    console.log("fail");
  });

  this.doctorCount += 10;
};

exports.lookupObject = Lookup;
