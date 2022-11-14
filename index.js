const DOMSelectors = {
  button: document.getElementById("btn"),
  title: document.getElementById("title"),
  artist: document.getElementById("artist"),
  form: document.getElementById("form"),
  display: document.getElementById("display"),
};
DOMSelectors.form.addEventListener(
  "submit",
  DOMSelectors.display.insertAdjacentHTML(
    "beforeend",
    '<div class="display-card"><img class="display-img" src="${url}" /><h2 class="display-artist">"${artist}"</h2> <h3 class="display-album">"${title}"</h3> <button class="remove btn">Remove Album</button> </div>'
  )
);
