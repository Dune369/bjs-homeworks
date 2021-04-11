"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {

  if (typeof percent === "undefined" || percent <= 0) {
   return `Параметр "Процентная ставка" содержит неправильное значение ${percent}`;
 } else if (typeof contribution === "undefined" || contribution < 0) {
   return `Параметр "Начальный взнос" содержит неправильное значение ${contribution}`; 
 } else if (typeof amount === "undefined"||  amount <= 0) {
   return `Параметр "Общая стоимость" содержит неправильное значение ${amount}`; 
 } 

       let contributionNumber = Number(contribution); // сумма первоначального взноса
       let amountNumber = Number(amount); // сумму кредита
 
       // Тело кредита (сумма кредита минус первоначальный взнос)
       let returnBank = amountNumber - contributionNumber ;
 
       // Количество выплачиваемых месяцев.
       let currentDate = new Date();
       let currentDate2 = currentDate.getTime();
       let date2 = date.getTime();
       let numberOfMonths = Math.round(((date2 - currentDate2) / 86400000) / 30.4375); 
 
       //Ежемесячная оплата
       let percentNumber33 = (percent / (12 * 100));
       let payment = returnBank * (percentNumber33 + percentNumber33/(((1 + percentNumber33)**numberOfMonths)-1))
       // Посчитайте общую сумму, которую придется заплатить клиенту.
       // Округлите результат до двух значений после запятой.
       let totalAmount = parseFloat((payment * numberOfMonths).toFixed(2))
 
       console.log(totalAmount);
 
       return totalAmount;

                 
 }


function getGreeting(name) {
    if (name == '' || typeof name == "undefined"){
      return `Привет, мир! Меня зовут Аноним.`;
    } 
      return`Привет, мир! Меня зовут ${name}.`;  
}
