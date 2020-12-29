// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)
// First Option
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
function numbersTime100(number) {
    return number * 100;
}
var newArrayWithNumbersTime100 = numbers.map(numbersTime100);
console.log(newArrayWithNumbersTime100);

// Second Option
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var newArrayWithNumbersTime100 = numbers.map(arr => arr * 100);
console.log(newArrayWithNumbersTime100);

// Third Option
var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
var newArrayWithNumbersTime100 = numbers.map(function(number) {
    return number * 100});

    console.log(newArrayWithNumbersTime100);

    // Fourth Option
    var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];
    var newArrayWithNumbersTime100 = numbers.map((function numbersTime100(number) {
        return number * 100;
    }));
    console.log(newArrayWithNumbersTime100);

