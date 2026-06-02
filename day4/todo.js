const fs = require('fs');

const FILE = 'todos.json';

// ฟังก์ชันโหลด todos จากไฟล์
function loadTodos() {
    try {
        const data = fs.readFileSync(FILE, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        // ไฟล์ไม่มี → คืน array ว่าง
        return [];
    }
}

// ฟังก์ชันเซฟ todos ลงไฟล์
function saveTodos(todos) {
    fs.writeFileSync(FILE, JSON.stringify(todos, null, 2));
}

// อ่าน argument
const command = process.argv[2];
const arg = process.argv[3];

// โหลดข้อมูลปัจจุบัน
const todos = loadTodos();

// เขียนต่อ — ใช้ if/else if เช็คว่า command คืออะไร แล้วทำตาม
if (command === 'add') {
    todos.push({
      id: todos.length + 1,
      text: arg,
      done: false
    });
    saveTodos(todos);
    console.log(`(เพิ่มแล้ว: ${arg})`);
      // เพิ่ม todo ใหม่
    // - คิด id ใหม่ (ลองใช้ todos.length + 1 ไปก่อน)
    // - push เข้า array
    // - saveTodos(todos)
    // - แสดงข้อความยืนยัน
} else if(command === "list"){
  if (todos.length === 0){
  console.log("(ว่าง - รันครั้งแรก)");
  } else {
    for (const todo of todos){
      const status = todo.done ? "✓" : "○";
      console.log(`${status} [${todo.id}] ${todo.text}`);
    }
  }
} else if (command === 'done') {
    const targetId = parseInt(arg);    // แปลง string → number
    let found = false;
    for (const todo of todos) {
        if (todo.id === targetId) {
            todo.done = true;
            console.log(`✓: [${todo.id}] ${todo.text}`);
            found = true;
        }
    } if (!found){
      console.log(`ไม่พบ todo id ${targetId}`);
    }
    
    saveTodos(todos);
} else {
  console.log("ใช้ 'done' หรือ 'list'");
}

