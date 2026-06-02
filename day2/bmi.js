const weight = parseFloat(process.argv[2]);
const height = parseFloat(process.argv[3]);

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
}//Hello bmi
