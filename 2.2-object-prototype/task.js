//String.prototype.isPalindrome - для задачи №1

String.prototype.isPalindrome = function () {
    let strToLowerCase = this.toLowerCase();  
    const len = Math.floor(strToLowerCase.length / 2);
    for (let i = 0; i < len; i++) {
        if (strToLowerCase[i] !== strToLowerCase[strToLowerCase.length - i - 1]){
            return false;
        }
        return true;    
    }
}



// Задача №2
function getAverageMark(marks) {
    if (marks.length === 0){
        return 0;
    }
    let result = marks.reduce(function(marks, current) {
        return marks + current;
     }, 0);
     let averageMark = result / marks.length
     return Math.round(averageMark);
}


// Задача №3
function checkBirthday(birthday) {
    let now = Date.now();
    let birthdayDate = (now - Date.parse(birthday));
    let diff = Math.floor((birthdayDate / 86400000) / 365.2468);
    if (diff > 18) {
      return diff;
    }
    
}


