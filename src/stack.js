const _ = require('underscore');

let stack = [];

// Lägger ett element överst i stacken
exports.push = function (x) {
    console.log('Lägger till ett element på stacken:', x);
    stack.push(x);
    console.log('Storlek på stacken:', stack.length);
};

// Returnerar det översta elementet i stacken och tar bort det
exports.pop = function () {
    return stack.pop();
}

// Returnerar det översta elementet i stacken
exports.peek = function () {
    return _.last(stack);
}

//Returnerar storleken på stacken
exports.size = function () {
    return stack.length;
}