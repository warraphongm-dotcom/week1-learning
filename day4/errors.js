/*const fs = require('fs');

// แบบไม่จัดการ error — crash
const data = fs.readFileSync('not-exist.json', 'utf8');
console.log(data);

console.log("บรรทัดนี้จะไม่ถูกรัน");
*/

const fs = require('fs');

try {
    const data = fs.readFileSync('not-exist.json', 'utf8');
    console.log(data);
} catch (err) {
    console.log(err);
    console.log("ไฟล์ไม่มี ไม่เป็นไร เริ่มต้นใหม่");
    console.log(`Error code: ${err.code}`);
}

console.log("บรรทัดนี้รันได้ปกติ");