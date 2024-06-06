let jokeTextEl = document.getElementById("jokeText");
let jokeBtnEl = document.getElementById("jokeBtn");

function jokeBtn() {
    let requestUrl = "https://apis.ccbp.in/jokes/random";


    let options = {
        method: "GET",
    }


    fetch(requestUrl, options)
        .then(function(response) {
            return response.json();
        })
        .then(function(jsonData) {
            console.log(jsonData);
            let randomjoke = jsonData.value;
            jokeTextEl.textContent = randomjoke;
        })
        .then(function(jsonData) {
            console.log(jsonData);
        });


}

jokeBtnEl.addEventListener("click", jokeBtn);
