'use strict';

// Задача №1. Печатное издание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        if (this.state < 100)
            return this.state = this.state * 1.5;

    }

    set state(number) {
        if (number < 0) {
            this._state = 0;
        } else if (number > 100) {
            this._state = 100;
        } else if (number > 0 && number <= 100) {
            this._state = number;
        }
    }

    get state() {
        return this._state;
    }

}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";

    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача №2. Библиотека

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
            if (book.state > 30) {
                this.books.push(book);
            }
        }

    findBookBy(type, value) {
            for (let book of this.books) {
                if (book[type] === value) {
                    return book;
                }  
            }
            return null;
        }

    giveBookByName(bookName) {
        for (let book of this.books) {
            if (book.name === bookName) {
                let index = this.books.indexOf(book);
                  this.books.splice(index, 1);
                  return book;
            } 
        }
           return null;
    
    }
    
}


// Задача №3. Школьный журнал

class StudentLog {
    constructor(name) {
        this.name = name;
        this.obj = {};
    }

    getName () {
        return this.name;
    }

    addGrade(grade, subject) { 
        // grade — оценка, subject — предмет.
        if (typeof grade === 'string' || grade < 1 || grade > 5) {
            return `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`;
        }  

        if (this.obj.hasOwnProperty(subject) !== true) {
             this.obj[subject] = [];
        } 
           this.obj[subject].push(grade);
           return this.obj.length;
      
    }

    getAverageBySubject(subject) {
        for(let key in this.obj) {
            if (this.obj[key] == 0) {
                return 0;
            }
        } 
         let sum = 0;
         for (let i = 0; i < this.obj[subject].length; i++){
            sum += this.obj[subject][i];
          }
          return sum / this.obj[subject].length;
}

    getTotalAverage() {
    
        for (let value in this.obj) {
             this.obj[value] = this.getAverageBySubject(value);
        }
        this.obj.average = Object.values(this.obj);
        
        let sum = 0;

        for (let i = 0; i < this.obj.average.length; i++) {
        sum += this.obj.average[i];
        }
    return sum / this.obj.average.length;
         
    }
}



