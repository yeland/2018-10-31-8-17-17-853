import Person from "./person";
class Student extends Person {
  constructor(name, age, klass) {
    super(name, age);
    this.klass = klass;
  }
  introduce() {
    return `${this.basic_introduce()} I am a Student. I am at Class ${this.klass}.`;
  }
}
module.exports = Student;
