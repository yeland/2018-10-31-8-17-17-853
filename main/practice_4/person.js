class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.basic_introduce = function () {
      return `My name is ${this.name}. I am ${this.age} years old.`; 
    }
  }
  introduce() {
    return this.basic_introduce();
  }
}
module.exports = Person;


