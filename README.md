# Week 1 — JavaScript Fundamentals

โปรเจกต์เรียน JavaScript สัปดาห์ที่ 1 ของแผน 11 เดือนสู่ Junior Full Stack Developer

## เนื้อหา

### Day 1: Terminal + Linux
- คำสั่ง terminal พื้นฐาน
- Permissions, file management

### Day 2: JavaScript Basics
- Variables (`const`, `let`)
- Template literals
- โปรแกรมแรก: `bmi.js` — คำนวณ BMI

### Day 3: Arrays, Loops, Functions
- `for...of`, accumulator pattern
- Spread operator
- โปรเจกต์: `analyzer.js` — วิเคราะห์ตัวเลข

### Day 4: Objects, Files, Error Handling
- Object destructuring
- File I/O ด้วย `fs` module
- JSON parsing
- try/catch
- **โปรเจกต์: `todo.js`** — Todo list ที่บันทึกข้อมูลข้ามวันได้

## วิธีรัน

ทุกไฟล์ใช้ Node.js รัน:

\`\`\`bash
node day2/bmi.js
node day3/analyzer.js 5 12 8 23 4
node day4/todo.js add "เรียน Git"
node day4/todo.js list
\`\`\`

## Tech Stack
- JavaScript (ES2022+)
- Node.js 20
- WSL2 Ubuntu