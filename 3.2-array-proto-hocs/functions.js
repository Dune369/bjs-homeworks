"use strict"

// Задача №1. Практика функций высшего порядка

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

// будет возвращать имена всех оружий
function getNames() {
    return weapons.map((currentValue) => 
        currentValue.name
    );
}

// принимает значение прочности и возвращает количество оружий больше принимаемой прочности
function getCountReliableWeapons(endurance) {
    return weapons.filter((number) => 
         number.durability > endurance
      ).length;
}

// принимает значение прочности и возвращает вердикт: есть ли оружия прочней принимаемой прочности?
function hasReliableWeapons(endurance) {
    return weapons.some((number) => 
         number.durability > endurance
      );
}

// принимает значение прочности и возвращает имена оружий, которые прочней полученного значения.
function getReliableWeaponsNames(endurance) {
    return weapons.filter((number) => 
         number.durability > endurance
      ).map((currentValue) => 
         currentValue.name
    );
}

// вернёт общую сумму урона всех оружий.
function getTotalDamage() {
    return weapons.reduce((previousValue, currentValue) => {
      return previousValue + currentValue.attack
    },0);
}

getTotalDamage()

// Задача №2. Ускорение долгих вычислений

// 2.1.1. sleep - Реализуйте функцию, эмулирующую продолжительную работу.
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

// 2.1.2. sum  - Реализуйте функцию, которая сможет работать с произвольным количеством аргументов. 
function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

// 2.1.3. compareArrays - Создайте вспомогательную функцию compareArrays( arr1, arr2 ), которая с помощью функции высшего порядка будет сравнивать значения двух массивов. 
function compareArrays (arr1, arr2) {
    return (arr1.every((currentValue, index) =>  currentValue == arr2[index]) && arr1.length == arr2.length);
}

// 2.2 Обёртка над оптимизацией любой функции
function memorize(fn, limit) {
  const memory = [
    {
      args: [3, 4],
      result: 7
    },
    {
      args: [1, 3],
      result: 4
    }
  ];

  return (...args) => {
    const obj = {};
    const value = memory.find(item => compareArrays(item.args, [...args]));
    
    if (memory.length < limit) {
      memory.shift();
    }

    if (value) {
      return value.result;
    } 

    obj.args = [...args];
    obj.result = fn(...args);
    memory.push(obj);
    return obj.result;   
  }
}