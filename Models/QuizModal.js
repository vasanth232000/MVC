const fs = require("fs");
const path = require("path");
const pathRoot = require("../Helpers/Path");

const p = path.join(pathRoot, "Datas", "Quiz.json");

module.exports = class Quiz {
  constructor(val) {
    this.quizDetails = [];
    this.currentQuiz = {};
    this.title = val;
  }

  gatherDetails() {
    let quizData = [];
    let newArray = [];
    try {
      if (fs.existsSync(p)) {
        const data = fs.readFileSync(p, "utf-8");
        quizData = JSON.parse(data);
        quizData.map((item) => {
          let mark = 0;
          item[Object.keys(item)].map((item) => {
            mark += item.score;
          });
          let newItem = {
            name: Object.keys(item),
            questions: item[Object.keys(item)].length,
            marks: mark,
          };
          newArray.push(newItem);
        });
        this.quizDetails = newArray;
      }
    } catch (err) {
      console.log(err);
      this.quizDetails = [];
    }
  }

  singleQuiz() {
    let quizData = [];
    try {
      if (fs.existsSync(p)) {
        const data = fs.readFileSync(p, "utf-8");
        quizData = JSON.parse(data);
        quizData.map((item) => {
          if (Object.keys(item) == this.title) {
            this.currentQuiz = item;
          }
        });
      }
    } catch (err) {
      console.log(err);
      this.currentQuiz = {};
    }
  }

  getCurrentQuiz() {
    this.singleQuiz();
    return this.currentQuiz;
  }

  getDetails() {
    this.gatherDetails();
    return this.quizDetails;
  }
};
