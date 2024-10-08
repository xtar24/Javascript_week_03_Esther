function makeRequest() {
  fetch('https://api.openweathermap.org/data/2.5/weather=API_Key_f95d9ba240c597333909070d5b3407fd')
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        document.getElementById("response").textContent =
          "Request failed, check internet connectivity.";
      }
    })
    .then(data => {
      if (data) {
        document.getElementById("response").textContent =
          "Weather data: " + JSON.stringify(data);
      }
    })
    .catch(error => {
      document.getElementById("response").textContent =
        "Request failed, check internet connectivity";
    });
}

makeRequest();