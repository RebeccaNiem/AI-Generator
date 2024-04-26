function generateTextFunction(event) {
  event.preventDefault();

  let TextElement = document.querySelector("#text");

  new Typewriter("#text", {
    strings: ["here is your answer"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let generateText = document.querySelector("#textGenerator");
generateText.addEventListener("submit", generateTextFunction);
