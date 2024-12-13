        // Function 1: calculateDifference
function calculateDifference(a, b) {
    return a - b;
}
console.log("Showing output of function- 1: ");
console.log("Difference:", calculateDifference(10, 5)   +"\n");


        // Function 2: isOdd
function isOdd(num) {
    return num % 2 !== 0;
}
console.log("Showing output of function- 2: ");
console.log("Is Odd:", isOdd(3));
console.log("Is Odd:", isOdd(4) +"\n");


        // Function 3: findMin
function findMin(numbers) {
    return Math.min(...numbers);
}
console.log("Showing output of function- 3: ");
console.log("Minimum Number:", findMin([10, 5, 20, 2, 8]) +"\n");

        // Function 4: filterEvenNumbers
function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}
console.log("Showing output of function- 4: ");
console.log("Even Numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6]) +"\n");

        // Function 5: sortArrayDescending
function sortArrayDescending(numbers) {
    return [...numbers].sort((a, b) => b - a);
}
console.log("Showing output of function- 5: ");
console.log("Sorted Array Descending:", sortArrayDescending([10, 5, 20, 2, 8]) +"\n");

        // Function 6: lowercaseFirstLetter
function lowercaseFirstLetter(str) {
    if (str.length === 0) return str;
    return str.charAt(0).toLowerCase() + str.slice(1);
}
console.log("Showing output of function- 6: ");
console.log("Lowercased First Letter:", lowercaseFirstLetter("Hello World") +"\n");

// Function 7: findAverage
function findAverage(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((total, num) => total + num, 0);
    return sum / numbers.length;
}
console.log("Showing output of function- 7: ");
console.log("Average:", findAverage([10, 20, 30, 40]) +"\n");

// Function 8: isLeapYear
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Showing output of function- 8: ");
console.log("Is Leap Year:", isLeapYear(2020));
console.log("Is Leap Year:", isLeapYear(2023));
