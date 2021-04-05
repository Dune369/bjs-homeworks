"use strict"

function getResult(a,b,c) {
    let discriminant = b**2 - 4 * a * c;  
    let x1 =  (-b + Math.sqrt(discriminant)) /  2 * a;
    let x2 =  (-b - Math.sqrt(discriminant)) /  2 * a; 
    let x = [];
    
    if (discriminant < 0){
        return x = [];
    } else if (discriminant > 0) {
        return x = [x1, x2];
    } else { 
        return x = [-b / 2 * a]; 
   }
}

function getAverageMark(marks){   
    if (marks.length === 0) {
        return 0;
    } else if (marks.length > 0) {
        let resultSlice = marks.slice(0, 5);
        let result = resultSlice.reduce(function(sum, current) {
               return sum + current;
         }, 0);    
        let averageMark = result / resultSlice.length;
        return averageMark;     
    };     

}

function askDrink(name,dateOfBirthday){
    let result = '';
    if (dateOfBirthday >= 18) {
      return result = `Не желаете ли олд-фэшн, ${name}?`;
    } else { 
      return result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }   
}