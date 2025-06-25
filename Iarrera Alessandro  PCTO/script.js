// Lista di domande
const questions = [
    { text: "Il personaggio è femmina?", attribute: "female" },
    { text: "Il personaggio è maschio?", attribute: "male" },
    { text: "E' un fisico?", attribute: "physicist" },
    { text: "E' un matematico?", attribute: "mathematician" },
    { text: "E' un chimico?", attribute: "chemist" },
    { text: "E' un  ingegnere?", attribute: "engineer" },
    { text: "E' un artista?", attribute: "artist" },
    { text: "E' un biologo?", attribute: "biologist" },
     { text: "Il personaggio è vissuto nel 1500?", attribute: "1500s" },
    { text: "Il personaggio è vissuto nel 1600?", attribute: "1600s" },
    { text: "Il personaggio è vissuto nel 1700?", attribute: "1700s" },
    { text: "Il personaggio è vissuto nel 1800?", attribute: "1800s" },
    { text: "Il personaggio è vissuto nel 1900?", attribute: "1900s" },
    { text: "Il personaggio è associato all'informatica?", attribute: "IT" },
    { text: "Il personaggio è associato alla teoria della relatività?", attribute: "theory of relativity" },
    { text: "Il personaggio ha fatto delle invenzioni nel campo elettrico?", attribute: "electricity" },
    { text: "Il personaggio ha dato un contributo alla scoperta della radioattività?", attribute: "radioactivity" },
    { text: "Il personaggio ha fatto delle invenzioni?", attribute: "Inventions" },
    { text: "Il personaggio ha formulato la teoria dell'evoluzione?", attribute: "evolution" },
    { text: "Il personaggio si è occupato di ambientalismo?", attribute: "environmentalism" },
    { text: "ll personaggio ha scoperto la forza di gravità ?", attribute: "gravity" }
];
const charactersData = {
  "characters": [
    { "name": "Ada Lovelace", "attributes": ["female", "mathematician", "1800s", "IT"] },
    { "name": "Albert Einstein", "attributes": ["male", "physicist", "1900s", "theory of relativity"] },
    { "name": "Marie Curie", "attributes": ["female", "chemist", "1900s", "radioactivity"] },
    { "name": "Nikola Tesla", "attributes": ["male", "engineer", "1800s", "electricity"] },
    { "name": "Leonardo da Vinci", "attributes": ["male", "artist", "1500s", "inventions"] },
    { "name": "Alan Turing", "attributes": ["male", "mathematician", "1900s", "IT"] },
    { "name": "Isaac Newton","attributes": ["male", "physicist", "1600s", "gravity"] },
    { "name": "Grace Hopper","attributes": ["female", "mathematician", "1900s",  "IT"] },
    { "name": "Rachel Carson", "attributes": ["female", "biologist", "1900s", "environmentalism"]},
    { "name": "Charles Darwin","attributes": ["male", "biologist", "1800s", "evolution"] }
  ]
};

let currentQuestionIndex = 0;
let characters = [];
let possibleCharacters = [];
let position= -1;
let result;


document.getElementById("start-btn").addEventListener("click", function() {
    currentQuestionIndex = 0;
    possibleCharacters = [...characters];
    questionText.textContent = questions[currentQuestionIndex].text;
    questionBox.style.display = "block"
    startBtn.style.display = "none";
    yesBtn.style.display = "inline-block";
    noBtn.style.display = "inline-block";
});

// Elementi DOM
const questionBox = document.getElementById("question-box");
const questionText = document.getElementById("question");
const startBtn = document.getElementById("start-btn");
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// JavaScript per il pulsante "Start"
document.getElementById("start-btn").addEventListener("click", function() {
    console.log("Start button clicked!");
    document.getElementById("question").textContent = "The game has started!";
    document.getElementById("start-btn").classList.add("hidden");
    document.getElementById("yes-btn").classList.remove("hidden");
    document.getElementById("no-btn").classList.remove("hidden");
});

// Funzione per avviare il gioco
function startGame() {
    startBtn.classList.add("hidden");
    yesBtn.classList.remove("hidden");
    noBtn.classList.remove("hidden");
    currentQuestionIndex = 0;
    possibleCharacters = [...characters];
    askQuestion();

}

// Funzione per porre una domanda
function askQuestion() {
    if (possibleCharacters.length === 4) {
        questionText.textContent = "Il personaggio  cercato è:"  + result;
        yesBtn.classList.add("hidden");
        noBtn.classList.add("hidden");
        return;
    }
    if (currentQuestionIndex >= questions.length) {
        questionText.textContent = "Non risco a trovare il personaggio. Riprova!";
        yesBtn.classList.add("hidden");
        noBtn.classList.add("hidden");
        return;
    }
    questionText.textContent = questions[currentQuestionIndex].text;
}

// Funzione per gestire la risposta
function handleAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer) {
        possibleCharacters.push(question.attribute);
    } 
  
    if (possibleCharacters.length === 4) {
           result=findCharacterByAttributes(possibleCharacters);
	     		}
      currentQuestionIndex++;
    askQuestion();
}

function findCharacterByAttributes(attributes) {
  
		       
  // Cerca il personaggio che ha tutti gli attributi

  for (const character of charactersData.characters) {
    const hasAllAttributes = attributes.every(attr => character.attributes.includes(attr));
  
    if (hasAllAttributes) {
       return character.name; // Restituisce il nome del personaggio
    }
  }

  return "Nessun personaggio trovato con tutti gli attributi forniti.";
}
// Eventi sui pulsanti
startBtn.addEventListener("click", startGame);
yesBtn.addEventListener("click", () => handleAnswer(true));
noBtn.addEventListener("click", () => handleAnswer(false));
