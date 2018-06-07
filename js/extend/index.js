// es6 class 只是语法糖
function Person(name) {
    this.name = name
  }
  
  Person.prototype = {
    getName: function() {
      return this.name;
    }
  }
  function Author(name, books) {
    // Person.call(this, name);
    this.books = books;
  }
  Author.prototype.getBooks = function() {
    return this.books;
  }
  function extend(subClass, superClass) {

        subClass.prototype = new superClass();
    // constructor属性丢失了
        subClass.constructor = superClass;

  }
  extend(Author,Person);
  const author = new Author('高尔基', ['我的offer']);
  console.log(author.getBooks());
  const person = new Person('高尔基', ['我的offer']);
  console.log(person.getName());
  

  
  
  // new Person()
  