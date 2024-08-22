// Task 1: Adding and Removing Elements

let fruits = ['apple', 'banana', 'orange'];
console.log("Fruits array:", fruits);

fruits.push('strawberry');
console.log("Updates fruits array:", fruits);

fruits.pop();
console.log("Update fruits array (after pop):", fruits)

// Task 2: Sorting Arrays

let numbers = [3, 1, 5, 2, 4];
console.log("Numbers before sorting:", numbers);

numbers.sort((a, b) => a - b);
console.log("Numbers after sorting:", numbers);

// Task 3: Applying Array Methods

let doublenumbers = numbers.map(numbers => numbers * 2);
console.log("Numbers after map:", doublenumbers);

let filternumbers = numbers.filter(numbers => numbers % 2 !== 0);
console.log("Numbers after filter:", filternumbers);

let reducenumbers = numbers.reduce((sum, numbers) => numbers + sum);
console.log("Numbers after reduce:", reducenumbers);