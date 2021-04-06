"use strict"

function getResult(a,b,c) {  
    let discriminant = b**2 - 4 * a * c;  // Вычисляем дискриминант  
    if (discriminant < 0) {
        let noRoot= [];  
        return noRoot = [];      
    } else if (discriminant > 0) {
        let twoRoot = [(-b + Math.sqrt(discriminant)) /  2 * a, 
                        (-b - Math.sqrt(discriminant)) /  2 * a];
        return twoRoot;
    } else { 
        let oneRoot = [-b / 2 * a]; 
        return oneRoot; 
   }
}

function getAverageMark(marks){   
    if (marks.length === 0) {
        return 0;
    } 
    let resultSlice = marks.slice(0, 5);
    let result = resultSlice.reduce((sum, current) => {
            return sum + current;
        }, 0);    
    let averageMark = result / resultSlice.length;
    return averageMark;     
}


function askDrink(name,dateOfBirthday){
    let date = new Date(); // Текущяя дата
    let year = date.getFullYear(); // Текущий год
    let yaerBirthUser = dateOfBirthday.getFullYear(); // Год рождения пользователя
    let ageUser = year - yaerBirthUser;
    let result = '';
    if (ageUser >= 18) {
      return result = `Не желаете ли олд-фэшн, ${name}?`;
    } else { 
      return result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Могу предложить вам замечательный клюквенный компот!`;
    }   
}