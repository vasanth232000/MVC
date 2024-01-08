const fs = require("fs");
const path = require("path");
const pathRoot = require("../Helpers/Path");

const p = path.join(pathRoot, "Datas", "Quiz.json");

module.exports = class ValidateQuiz {
  constructor(val) {
    this.currentVal = val;
    this.quizValues = {
      title: "",
      score: 0,
      user_id: val.userId || "",
    };
  }

  validate() {
    let quizData = [];
    try {
      if (fs.existsSync(p)) {
        const data = fs.readFileSync(p, "utf-8");
        quizData = JSON.parse(data);
        quizData.map((quiz) => {
          const quizKey = Object.keys(quiz);
          if (quizKey[0] === this.currentVal.quiztitle) {
            quiz[quizKey[0]].map((item) => {
              for (const key in this.currentVal) {
                if (key == item.question) {
                  if (item.answer == this.currentVal[item.question]) {
                    this.quizValues.title = quizKey[0];
                    this.quizValues.score += item.score;
                  }
                }
              }
            });
          }
        });
      }
    } catch (err) {
      console.log(err);
    }
  }

  getQuizScore() {
    this.validate();
    return this.quizValues;
  }
};
