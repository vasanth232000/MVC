const fs = require("fs");
const path = require("path");
const pathRoot = require("../Helpers/Path");

const p = path.join(pathRoot, "Datas", "UserScores.json");

module.exports = class UserScore {
  constructor(val) {
    this.currentVal = val;
    this.userData = [];
  }

  checkAndadd() {
    try {
      if (fs.readFileSync(p)) {
        let quizData = [];
        const data = fs.readFileSync(p, "utf-8");
        quizData = JSON.parse(data);
        let check = true;
        quizData.map((quiz) => {
          if (quiz.id === this.currentVal.id) {
            quiz.data.map((item) => {
              if (item.title === this.currentVal.data[0].title) {
                if (item.score < this.currentVal.data[0].score) {
                  item.score = this.currentVal.data[0].score;
                }
              }
            });

            let currentIndex = quiz.data.findIndex(
              (item) => item.title === this.currentVal.data[0].title
            );

            if (currentIndex === -1) {
              quiz.data.push(this.currentVal.data[0]);
            }
          }
        });

        let currentIndex = quizData.findIndex(
          (item) => item.id === this.currentVal.id
        );

        if (currentIndex === -1) {
          quizData.push(this.currentVal);
        }
        fs.writeFileSync(p, JSON.stringify(quizData), (err) => {
          console.log(err);
        });
      }
    } catch (err) {
      this.userData.push(this.currentVal);
      fs.writeFileSync(p, JSON.stringify(this.userData), (err) => {
        console.log(err);
      });
    }
  }
};
