// Задача №1. Корни квадратного уравнения

// 1. Функция getSolutions
function getSolutions(a, b, c) {
    let D = b ** 2 - 4 * a * c; // Вычисляем дискриминант  b² - 4ac
    if (D < 0) {
        return {
            D: D,
            roots: []
        }
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return {
            D: D,
            roots: [x1, x2]
        }
    } else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        return {
            D: D,
            roots: [x1]
        }
    }

}

// 2. Функция showSolutionsMessage
function showSolutionsMessage(a, b, c) {

    let result = getSolutions(a, b, c);

    if (result.D < 0) {
        return `«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»\nЗначение дискриминанта: ${result.D}\nУравнение не имеет вещественных корней`;
    } else if (result.D == 0) {
        return `«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»\nЗначение дискриминанта: ${result.D}\nУравнение имеет один корень X₁ = ${result.roots}`;
    } else if (result.D > 0) {
        return `«Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}»\nЗначение дискриминанта: ${result.D}\nУравнение имеет два корня. X₁ = ${result.roots[0]} X₂ = ${result.roots[1]}`;
    }


}



// Задача №2. Журнал успеваемости


function getAverageScore(data) {
    const values = Object.values(data);

    if (values.lenght > 0) {
        return 0;
    }

    let obj = {};

    for (let value in data) {
        obj[value] = getAverageMark(data[value]);

    }
    obj.average = getAverageMark(Object.values(obj));
    return obj;

}


function getAverageMark(marks) {
    debugger;
    if (marks.length === 0) {
        return 0;
    }

    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

// Задача №1. Расшифровка данных

function getDecodedValue(secret) {
    if (secret === 0) {
        return 'Родриго';
    } else if (secret === 1) {
        return 'Эмильо';
    }
}

function getPersonData(secretData) {
    return {
        firstName: getDecodedValue(secretData.aaa),
        lastName: getDecodedValue(secretData.bbb)
    };
}


console.log(getPersonData(secretData));