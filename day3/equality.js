// == จะแปลง type ให้ก่อนเทียบ (อันตราย)
console.log(0 == "0");      // true
console.log(0 == false);    // true
console.log("" == false);   // true
console.log(null == undefined); // true

console.log("---");

// === เทียบทั้งค่าและ type (ปลอดภัย)
console.log(0 === "0");     // false
console.log(0 === false);   // false
console.log("" === false);  // false
console.log(null === undefined); // false