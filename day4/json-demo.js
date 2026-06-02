const fs = require('fs');

const todos = [
    { id: 1, text: "เรียน JS", done: false },
    { id: 2, text: "ออกกำลังกาย", done: true }
];

// แปลง object → string เพื่อเขียนลงไฟล์
const jsonString = JSON.stringify(todos, null, 2); //เลข 2 คือเว้นวรรค 2 ช่องเพื่อจัดสวย (ไม่ใส่ก็ได้แต่อ่านยาก) null ตรงกลางคือ feature ขั้นสูง ตอนนี้ใส่ไว้ตามนี้ก็พอ
console.log("เขียนลงไฟล์:");
console.log(jsonString);

fs.writeFileSync('todos.json', jsonString);

// อ่านกลับ string → object
const fileContent = fs.readFileSync('todos.json', 'utf8');
const loadedTodos = JSON.parse(fileContent);

console.log("\nอ่านกลับมา:");
console.log(loadedTodos);
console.log(loadedTodos[0].text);  // ใช้ได้เหมือนเดิม