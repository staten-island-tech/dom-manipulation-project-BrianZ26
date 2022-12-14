const DOMSelectors = {
  button: document.getElementById("btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  url: document.getElementById("url"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
};
DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  input();
});
function input() {
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    `<div class="display-card" id="card">
  <img class="display-img" src=${DOMSelectors.url.value} /> 
  <h2 class="display-artist">${DOMSelectors.artist.value}</h2> 
  <h3 class="display-album">${DOMSelectors.title.value}</h3> 
  <button class="remove btn">Remove Album</button> 
  </div>`
  );
  card();
}
function card() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
    });
  });
}
