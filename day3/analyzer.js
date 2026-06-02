// รับ argument ตั้งแต่ตัวที่ 2 เป็นต้นไป แปลงเป็น number
const numbers = process.argv.slice(2).map(Number);

console.log(numbers);  // ลอง log ดูก่อนว่าได้ array ของ number จริง
let count = 0;
let even = 0;
let odd = 0;
let sum = 0;
for (const number of numbers){
  count++
  if (number%2 === 0){
    even++;
  } else {
    odd++;
  } 
}
console.log(`จำนวน: ${count} ตัว`);

for (const n of numbers){
  sum = sum + n;
}

console.log(`ผลรวม: ${sum}`);
console.log(`ค่าเฉลี่ย: ${(sum/numbers.length).toFixed(2)}`);
console.log(`ค่าสูงสุด: ${Math.max(...numbers)}`);
console.log(`ค่าต่ำสุด: ${Math.min(...numbers)}`);
console.log(`คู่: ${even}`);
console.log(`คี่: ${odd}`);

