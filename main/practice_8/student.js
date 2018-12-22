import Person from "./person";
class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    if (this.klass.leader && this.klass.leader.id === this.id) {
      return `${super.introduce()} I am a Student. I am Leader of Class ${this.klass.number}.`
    }
    return `${super.introduce()} I am a Student. I am at Class ${this.klass.number}.`;
  }
}
module.exports = Student;
