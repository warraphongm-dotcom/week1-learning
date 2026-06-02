/*const person = {
  name: "Anakin",
  age: 30,
  email: "anakin@gmail.com",
  isStudent: true
};

console.log(person);
console.log(person.name);
console.log(person["age"]);

person.age = 31;
console.log(person.age);

person.city = "Sakonnakorn";
console.log(person);

delete person.email;
console.log(person);
*/
/*
const user = {
  name: "Anakin",
  age: 30,
  skills: ["JavaScript", "Linux","Git"],
  address: {
    city: "Sakonnakorn",
    country: "Thailand"
  }
};

console.log(user.skills[0]);
console.log(user.address.city);
console.log(user.skills.length);
*/

/*
const person = {
  name: "Anakin",
  age: 30,
  city: "Sakonnakorn"
};

for (const [key, value] of Object.entries(person)){
  console.log(`${key}: ${value}`);
  console.log(`typeof key: ${typeof key}, typeof value: ${typeof value}`);
};
*/

const todos = [
    { id: 1, text: "เรียน JS", done: false },
    { id: 2, text: "ออกกำลังกาย", done: true },
    { id: 3, text: "อ่านหนังสือ", done: true }
];

// วน array ปกติ
for (const todo of todos) {
    const status = todo.done ? "✓" : "○";
    console.log(`${status} ${todo.text}`);
}
