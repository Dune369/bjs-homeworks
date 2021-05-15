"use strict";

// Задача №1. Форматтер чисел



function parseCount(value){
    debugger;
    let valueParseCount = Number.parseInt(value);

    if ( isNaN(valueParseCount) === true){
        throw new Error("Невалидное значение");
    }
    return valueParseCount;
};

  function validateCount(value) {
      
    try {
       return parseCount(value);
    } catch(err) {
      return err;
    }

  }


  // Задача №2. Треугольник

  class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
      if ( this.a + this.b < this.c  || this.b + this.c < this.a || this.a + this.c < this.b ) {
        throw new Error("Треугольник с такими сторонами не существует")
      }
    }

    getPerimeter() {
      let P = this.a + this.b + this.c;
      return JSON.parse(P);
    }

    getArea() {
      let p = 1/2 * this.getPerimeter();
      let S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
      return JSON.parse(S.toFixed(3));
    }
}

 function getTriangle(a, b, c) {
      try {
        return new Triangle(a, b, c);
    } catch(err) {
       return {
        getPerimeter() {
          return "Ошибка! Треугольник не существует";
        },
        getArea() {
          return "Ошибка! Треугольник не существует";
        }
      };
    } 
}

