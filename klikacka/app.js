var numberOfClicks = 0;
var button = document.querySelector("img");
var numberOfClicksText = document.querySelector("h1");
var heading = "Počet kliknutí: ";
var reset = document.querySelector("p")

function updateClicks() {
  numberOfClicksText.textContent = heading + numberOfClicks;
}

 if (!(localStorage.getItem("numberOfClicks") === null)) {
   numberOfClicks = parseInt(localStorage.getItem("numberOfClicks"));
   updateClicks();
}

// Vykřičník dá opačnou hodnotu, takže !false=true

button.addEventListener("click", function(){
  numberOfClicks += 1;
  updateClicks();
  localStorage.setItem("numberOfClicks", numberOfClicks);
})

reset.addEventListener("click", function(){
  numberOfClicks = 0;
  updateClicks();
  localStorage.clear();
})
