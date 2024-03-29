// cached element refs/// selected dom elements
const $weather = $(`#weather`);
const $temp = $(`#temp`);
const $wind = $(`#wind`);
const $input = $(`input[type="text"]`);

// event listeners
$("form").on("submit", handleSubmit);

// functions         -any event
function handleSubmit(evt) {
  evt.preventDefault(); //stop default browser from refresh

  const term = $input.val(); //user input

  $input.val(""); //remove user input

  $.ajax(
    "http://api.openweathermap.org/data/2.5/weather?zip=" +
      term +
      ",&appid=a1485c824c09eba8f02d2b3019d75504&units=imperial"
  ).then(
    function (data) {
      console.log("weather Data ", data);
      weatherData = data;
      render();
    },
    function (error) {
      alert("Error ", error);
    }
  );
}
// update page
function render() {
  if (weatherData) {
    $weather.text(weatherData.name);
    $temp.text(weatherData.main.temp);
    $wind.text(weatherData.wind.speed);
  }
}

// $.ajax("http://api.openweathermap.org/data/2.5/weather?zip=,&appid=a1485c824c09eba8f02d2b3019d75504" + term)
