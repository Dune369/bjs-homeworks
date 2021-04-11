"use strict"

// percent - процентную ставку
// contribution - сумму первоначального взноса
// amount - сумму кредита
// date - срок (дату окончания кредита)

// итого -  выдавать сумму, которую в итоге заплатит клиент  (первоначальный взнос, погашение основного долга, проценты за пользование кредитом).

// если параметр функции будет строкой, то попытайтесь преобразовать в число.
// Во всех остальных случаях возвращайте строку: “Параметр <название параметра> содержит неправильное значение <значение параметра>”.

// инпуте пользователь указывает конечную дату, поэтому в функции необходимо посчитать срок в месяцах на основе введеной даты.


function calculateTotalMortgage(percent, contribution, amount, date) {

    // Проконтролируйте корректность введенных данных.
    if (typeof percent === "string" || typeof contribution === "string" || typeof amount === "string") {

      let percentNumber = Number(percent);
      let contributionNumber = Number(contribution);
      let amountNumber = Number(amount);

      // Посчитайте тело кредита
      let returnBank = amountNumber - contributionNumber;

      // Посчитайте количество выплачиваемых месяцев.
      let currentDate = new Date();
      let numberOfMonths = currentDate.getMonth() - date.getMonth()
      + (12 * (currentDate.getFullYear() - date.getFullYear()));

      //Ежемесячная оплата
      let paymentNumber = (percentNumber + 1) ** 2;
      let payment2 = (paymentNumber / percentNumber) + percentNumber;
      let payment3 =  payment2 * returnBank;
      
      // Посчитайте общую сумму, которую придется заплатить клиенту.
      // Округлите результат до двух значений после запятой.
      let totalAmount = (numberOfMonths * payment3).toFixed(2);

      console.log(totalAmount);

      return totalAmount;
    
    } else if (typeof percent === "undefined" || percent <= 0) {
        return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
    } else if (typeof contribution === "undefined" || contribution <= 0) {
        return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`; 
    } else if (typeof amount === "undefined" || amount <= 0) {
        return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`; 
    } 
          
}








function getGreeting(name) {
    if (name == '' || typeof name == "undefined"){
      return `Привет, мир! Меня зовут Аноним.`;
    } 
      return`Привет, мир! Меня зовут ${name}.`;  
}


