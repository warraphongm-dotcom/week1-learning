const weight = 58;
const height = 1.7;

const bmi = weight/(height*height);
console.log(`BMI: ${bmi}`);

if (bmi < 18.5 ){
  console.log("ผอม");
} else if (bmi > 18.5 && bmi < 25){
  console.log("ปกติ");
} else if (bmi > 25 && bmi < 30){
  console.log("น้ำหนักเกิน");
} else {
  console.log("น้ำหนักเกิน")
}