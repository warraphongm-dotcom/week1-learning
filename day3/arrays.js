const fruits = ["apple", "banana", "mango"];
/*
console.log(fruits);
console.log(fruits[0]);        // apple — index เริ่มที่ 0
console.log(fruits[2]);        // mango
console.log(fruits.length);    // 3
*/

fruits.push("orange");         // เพิ่มท้าย
console.log(fruits);           // [apple, banana, mango, orange]

fruits.pop();                  // ลบท้าย
console.log(fruits);           // [apple, banana, mango]

fruits.unshift("grape");       // เพิ่มหัว
console.log(fruits);           // [grape, apple, banana, mango]

fruits.shift();                // ลบหัว
console.log(fruits);           // [apple, banana, mango]