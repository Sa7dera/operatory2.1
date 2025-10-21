let waga = 70;

let wzrost = 175; // w centymetrach 

let bmi1 = waga / ((wzrost/100) * (wzrost/100));  // Problem 1: błędna kolejność 

let wzrostWMetrach = wzrost / 100;

let bmi2 = waga / (wzrostWMetrach**2);  // Problem 2: błędny wzór 

let licznikPomiarow = 0;

licznikPomiarow++;

console.log("BMI:", bmi1.toFixed(2), "Alternatywne BMI:", bmi2.toFixed(2), "Pomiar nr:", licznikPomiarow++); 
