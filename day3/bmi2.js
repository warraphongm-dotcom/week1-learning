const weight = parseFloat(process.argv[2]); //parseFloat() แปลง string เป็นตัวเลขทศนิยม
const height = parseFloat(process.argv[3]);

console.log(`น้ำหนัก: ${weight} kg`);
console.log(`ส่วนสูง: ${height} m`);

const bmi = weight / (height * height);
console.log(`BMI: ${bmi.toFixed(2)}`);    //toFixed(2) ปัดเหลือ 2 ตำแหน่ง (แต่คืนเป็น string ไม่ใช่ number)

if (bmi < 18.5) {
    console.log("กลุ่ม: ผอม");
} else if (bmi < 25) {
    console.log("กลุ่ม: ปกติ");
} else if (bmi < 30) {
    console.log("กลุ่ม: น้ำหนักเกิน");
} else {
    console.log("กลุ่ม: อ้วน");
}