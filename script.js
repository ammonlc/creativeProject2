function onClickChuckNorris(e) {
  e.preventDefault();
  let value = document.getElementById("jokeResults").value;
  if (value === ""){
    return;
  }
  let url = "https://api.chucknorris.io/jokes/random";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);  
      let results = "<h2>" + json.value + "</h2>";
      document.getElementById("jokeResults").innerHTML = results;
    });
}
document.getElementById("chuckNorrisSubmit").addEventListener("click", onClickChuckNorris);

function onClickDadJoke(e) {
  e.preventDefault();
  let value = document.getElementById("jokeResults").value;
  if (value === ""){
    return;
  }
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8d631d403msh6ea09cfc32aee12p132d15jsn366b9bdb4714',
		'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
	}
};
fetch('https://dad-jokes.p.rapidapi.com/random/joke', options)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "<h2>" + json.body[0].setup + "..." + json.body[0].punchline + "</h2>";
      document.getElementById("jokeResults").innerHTML = results;
    })
    .catch(err => console.error(err));;
}
document.getElementById("dadJokeSubmit").addEventListener("click", onClickDadJoke);

function onClickRandomFact(e) {
  e.preventDefault();
  let value = document.getElementById("jokeResults").value;
  if (value === ""){
    return;
  }
  let url = "https://uselessfacts.jsph.pl/random.json?language=en";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      let results = "<h2>" + json.text + "</h2>";
      document.getElementById("jokeResults").innerHTML = results;
    });
}
document.getElementById("randomFactSubmit").addEventListener("click", onClickRandomFact);
