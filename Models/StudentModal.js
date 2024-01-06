const path = require("path");
const pathRoot = require("../Helpers/Path");
const fs = require("fs");

const p = path.join(pathRoot, "Datas", "Students.json");

module.exports = class Student {
  constructor() {
    this.students = [];
  }

  loadData() {
    try {
      if (fs.existsSync(p)) {
        const data = fs.readFileSync(p, "utf-8");
        this.students = JSON.parse(data);
      }
    } catch (err) {
      this.students = [];
    }
  }

  getStudents() {
    this.loadData();
    return this.students;
  }
};
