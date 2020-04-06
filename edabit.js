/*Array of Multiples
Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

Examples
arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
Notes
Notice that num is also included in the returned array.*/

function arrayofMultiples (num,length) {
    let output = []
    let multiple = 0
    for (i=1; i < length + 1; i++) {
        multiple = num * i
        output.push(multiple)
    }
    return output;
}
console.log(arrayofMultiples(7,5));
console.log(arrayofMultiples(12,10));
console.log(arrayofMultiples(17,6));

