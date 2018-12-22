import Person from "./person";
class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }
  introduce() {
    if (this.klasses && this.klasses.length) {
      let classes = this.klasses.map(element => element.number);
      return `${super.introduce()} I am a Teacher. I teach Class ${classes.join(', ')}.`;
    }
    return `${super.introduce()} I am a Teacher. I teach No Class.`
  }
  introduceWith(student) {
    if (student.klass.number === this.klass.number) {
      return `${super.introduce()} I am a Teacher. I teach ${student.name}.`
    }
    return `${super.introduce()} I am a Teacher. I don't teach ${student.name}.`
  }
  isTeaching(student) {
    return this.klasses.some(klass => isIn(student, klass));
  }
  isIn(student, klass) {
    return student.klass === klass;
  }
}
module.exports = Teacher;
