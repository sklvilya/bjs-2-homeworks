//Задание № 1//
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
      this.state = this.state * 1.5;
    }
    get state() {
      return this._state;
    };
    set state(state) {
      if (state < 0) {
        this._state = 0;
      } else if (state > 100) {
        this._state = 100;
      } else if (0 < this.state < 100) {
        this._state = state;
      }
    }
  }
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "magazine";
    }
  }
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
      super(name, releaseDate, pagesCount, state, type);
      this.type = "book";
      this.author = author;
    }
  }
  class NovelBook extends Book {
    type = "novel";
  }
  class FantasticBook extends Book {
    type = "fantastic";
  }
  class DetectiveBook extends Book {
    type = "detective";
  }
  
  
  //Задание № 2//
  class Library {
    constructor(name, books) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
        return this.books;
      } else if (book === undefined) {
        return null;
      }
    }
  
    findBookBy(type, value) {
      for (let book of this.books) {
        if (book[type] === value) {
          return book;
        }
      } return null;
    }
  
    giveBookByName(bookName) {
      for (let book of this.books) {
        if (book.name === bookName) {
          this.books.splice(bookName, 1);
          return book;
        }
      } return null;
    }
  }
  
  //Задание № 3//
  
  class Student {
  
    constructor(journal, subject, mark) {
      this.journal = journal;
      this.subject = subject;
      this.mark = mark;
    }
  
    addMark(mark, subject) {
      for (this.mark in this.journal) {
        this.journal = [];
        if (mark >= 1 && mark <= 5 && subject === 'algebra') {
          this.journal.push(subject[mark]);
        } else if (mark >= 1 && mark <= 5 && subject === 'geometry') {
          this.journal.subject[mark]; 
        }
        return this.journal;
      }
    }
  
  
  
  }