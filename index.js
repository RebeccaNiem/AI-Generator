function displayText(response) {
  new Typewriter("#text", {
    strings: [response.data.answer],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateTextFunction(event) {
  event.preventDefault();

  let instructionsElement = document.querySelector("#instructions");
  let apiKey = "280o02ba0daf2b414a53ctfe4e6155a2";
  let context =
    "you are an expert in everything. You love giving smart and short answers and you are very friendly. Make sure to answer precisely to the user's questions. Make a paragraph and sign the answer with `Your Ai-Assistant` inside a <strong> element at the end of the answer.";
  let prompt = `User's question: Generate an answer about ${instructionsElement.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayText);
}

let generateText = document.querySelector("#textGenerator");
generateText.addEventListener("submit", generateTextFunction);
