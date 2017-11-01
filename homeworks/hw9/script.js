// N1

/*
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

alert(randomInteger(+prompt('min'), +prompt('max')));*/


// N2
/*
let user = {};
user.name = 'Jonny';
console.log(user);
console.dir(user);
user.surname = 'Hob';
console.log(user);
console.dir(user);
user.name = 'Bob';
delete user.name;
console.log(user);*/

// N3  ??????????????????

// function isEmpty(obj) {
//     if (Object.keys(obj).length === 0) {
//         return 'object is empty'
//     }else {
//         return 'object not empty'
//     }
// }
//
// const a = {},
//     b = {
//         b1 : 55,
//         b2 : 66
//     };
// console.log(isEmpty(a));
// console.log(isEmpty(b));

// N4

/*
let salaries = {
    bob : 2000,
    jonny : 3000,
    rob : 5000,
    flin : 2500
};
let emptySalaries = {};

function sumSalary(obj) {
    if (Object.keys(obj).length === 0) {
        return 0
    }else {
        let sum = 0;
        for (let key in obj) {
            sum += obj[key];
        }
        return sum;
    }
}

console.log(sumSalary(salaries));
console.log(sumSalary(emptySalaries));*/

// N5

/*
let salaries = {
    bob : 2000,
    jonny : 3000,
    rob : 5000,
    flin : 2500
};
let emptySalaries = {};

function sumSalary(obj) {
    if (Object.keys(obj).length === 0) {
        return 'нету сотрудников'
    }else {
        let salarie = 0,
            mostImportantEmployee;
        for (let key in obj) {
            if (salarie < obj[key]) {
                mostImportantEmployee = key;
            }
        }
        return mostImportantEmployee;
    }
}

console.log(sumSalary(salaries));
console.log(sumSalary(emptySalaries));*/

// N6

/*let randomObj = {
    bob : 2000,
    jonny : 3000,
    name : 'flin',
    bool : true,
    test : "number"
};

function multipleNumeric(obj) {
    for(let key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] *= 2;
        }
    }
}
multipleNumeric(randomObj);
console.log(randomObj);*/

// N7

/*let array = [1, 2, 3, 'win', true, 0.55, null];

function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}
console.log(randomArrayElement(array));*/

// N8

// function superFunc() {
//     let massage;
//     const array = [];
//     while (true) {
//         massage = prompt('Any number pls', '');
//         if (massage !== String(Number(massage))) {
//             break;
//         }else {
//             array.push(+massage);
//         }
//     }
//     let sum = 0, i;
//     for (i in array) {
//         sum += array[i];
//     }
//     return sum;
// }
//
// console.log(superFunc());

