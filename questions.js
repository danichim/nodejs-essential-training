const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "what is your name? ",
  "where do you live? ",
  "What are you going to do with node js? ",
];

const answerEvents = collectAnswers(questions);

answerEvents.on("answer", (answer) =>
  console.log(`\n question answered: ${answer}`)
);

answerEvents.on("complete", (answers) => {
  console.log("thank you for your answers.");
  console.log(answers);
});

answerEvents.on("complete", () => process.exit());
