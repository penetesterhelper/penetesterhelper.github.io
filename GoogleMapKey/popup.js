document.addEventListener('DOMContentLoaded', function() {
  var apiKeyForm = document.getElementById('apiKeyForm');
  var apiKeyInput = document.getElementById('apiKeyInput');
  var resultDiv = document.getElementById('result');
  const d = new Date();
  document.getElementById("date").innerHTML = d;
  apiKeyForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var apiKey = apiKeyInput.value;
    if (apiKey != '') {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=' + apiKey);
      xhr.onload = function () {
         // Handle the response data here
        var obj = JSON.parse(xhr.responseText);
       // resultDiv.innerHTML=obj.error_message;
        resultDiv.innerHTML=JSON.stringify(obj, null, 2);
         //console.log(xhr.responseText["error_message"]);
      };
      xhr.send();

    }
  });
});
