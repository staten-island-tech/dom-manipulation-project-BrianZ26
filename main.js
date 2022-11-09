const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

DOMSelectors.box.insertAdjacentHTML(
  "beforebegin",
  `We can add text into an HTML file by writing it in JS!`
);
// insertAdjacentHTML will allow you to add HTML elements into your project through the JS. The positioning of this is relative to other DOM elements, and can be positioned around them. This positioning can be done with "beforebegin", "afterbegin", "beforeend", and "afterend".

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value; // .value lets you get the values of an element, in this case something you typed in
  console.log(input);
  DOMSelectors.box.insertAdjacentHTML(
    "beforeend",
    `
        <p class = 'extra-text'>${input}</p>
        <button type="clear" id="clr">Remove</button>
    `
  );
}); // this function will cause new HTML to be added when the input button is clicked.
// you can put multiple HTML tags in the same DOMSelector as if you were writing out regular HTML, you're also able to assigned classes and ids that can be used for styling the elements you add through js.
