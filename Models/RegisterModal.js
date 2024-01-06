const path = require("path");
const pathRoot = require("../Helpers/Path");
const fs = require("fs");

const p = path.join(pathRoot, "Datas", "Students.json");

module.exports = class Register {
  constructor(val) {
    this.email = val.email;
    this.name = val.name;
    this.password = val.password;
  }

  save() {
    fs.readFile(p, (err, data) => {
      let students = [];
      if (!err) {
        console.log("check", JSON.parse(data));
        students = JSON.parse(data);
      }
      this.stud_id = `STUD_ID_${students.length + 1}`;
      students.push(this);
      console.log(students);
      fs.writeFile(p, JSON.stringify(students), () => {
        console.log(err);
      });
    });
  }
};
