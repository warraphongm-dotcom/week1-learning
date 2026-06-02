const fs = require('fs');

// เขียนไฟล์
fs.writeFileSync('hello.txt', 'สวัสดีจากไฟล์\nบรรทัดที่สอง\n');

// อ่านไฟล์
const content = fs.readFileSync('hello.txt', 'utf8');
console.log(content);

// ต่อท้าย (append) — ไม่เขียนทับ
fs.appendFileSync('hello.txt', 'บรรทัดที่สาม\n');

// อ่านอีกครั้ง
console.log(fs.readFileSync('hello.txt', 'utf8'));