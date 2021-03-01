// const API_KEY ="18a2aaf2";
// const BASE_URL ="";

// cached element refs/// selected dom elements
const $weather = $(`#weather`);
const $temp = $(`#temp`);
const $wind = $(`#wind`);
const $input = $(`input[type="text"]`);

// event listeners
$('form').on('submit', handleSubmit);

// functions         -any event
function handleSubmit(evt) {
  evt.preventDefault(); //stop default browser from refresh

  const term = $input.val();//user input
      
    $input.val(""); //remove user input

    $.ajax("http://api.openweathermap.org/data/2.5/weather?zip=,&appid=" + term)
    .then(function(data) {
    console.log('weather Data ', data);
    weatherData = data;
    render();
  }, function(error) {
    alert('Error ', error);
  })

};
// update page 
function render() {
  if (weatherData) {
    $weather.text(weatherData.name);
    $temp.text(weatherData.main.temp);
    $wind.text(weatherData.wind.speed);
  }
}

// zip=08234
// zip=08401,
