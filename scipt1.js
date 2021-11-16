var questions = [
  {
    question: "1. Inside which HTML element do we put the JavaScript?",
     answer0: "<javascript>",
     answer1: "<js>",
     answer2: "<script>",
     answer3: "<scripting>",
     cAnswer: "<script>",
    cAnswer: "2"
  },
  {
    question: "2. What is the correct JavaScript syntax to write Hello World?",
    "0": "response.write(Hello World)",
    "1": "Hello World",
    "2": "document.write(Hello World)",
    "3": "(Hello World)",
    cAnswer: "2",
  },
  {
    question: "3. Where is the correct place to insert a JavaScript?",
    "0": "Both the <head> section and the <body> section are correct",
    "1": "The <body> section",
    "2": "The <head> section",
    "3": "Only in a JS file",
    cAnswer: "0",
  },
  {
    question: "4. What is the correct syntax for referring to an external script called xxx.js?",
    "0": "<script src=xxx.js></script>",
    "1": "<script name=xxx.js>",
    "2": "<script href=xxx.js>",
    "3": "<script value=xxx.js>",
    cAnswer: "0",
  },
  {
    question: "5. How do you create a function?",
    "0": "function:myFunction()",
    "1": "function=myFunction()",
    "2": "function myFunction()",
    "3": "function myFunction()",
    cAnswer: "2",
  }
];


let timer = 5;
let score = 0;
let qCounter = 0;

function displayQ(i) {
  console.log("counter", qCounter)
  let buttonsArr = document.querySelectorAll(".answer-btns")
  // creates array of node elements {above}
  // loops through each element
  // construct your answer buttons in the is .foreach() loop
  buttonsArr.forEach((element) => {
    // console.log("Node Element", element)
    // console.log("index", index)
    console.log(typeof questions[i])
    element.textContent = questions[i].answers[0].answer0
    element.addEventListener("click", () => {
      if (element.id === questions[i].cAnswer) {
        nextQ(true)
      } else {
        nextQ(false)
      }
    })
  });
  document.getElementById("currentQ").textContent = questions[i].question
}

function nextQ(bool) {
  if (qCounter > questions.length) {
    document.getElementById("quiz").style.display = "none"
  }
  else if (bool) {
    // code for correct answer
    score++;
    qCounter++;
    displayQ(qCounter)

  } else {
    // run code for incorrect answer
    score++;
    qCounter++;
    displayQ(qCounter)
  }
}

window.onload = () => {

  document.getElementById("start").addEventListener("click", () => {
    // display timer
    let setTimer = setInterval(() => {
      document.getElementById("countDown").textContent = timer
      timer--
      if (timer <= 0) {
        clearInterval(setTimer)
      }
    }, 1000);

    document.getElementById("quiz").style.display = "block"
    displayQ(qCounter)
  })
}