document.addEventListener("DOMContentLoaded", () => {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const ageInput = document.getElementById("age");
    const genderSelect = document.getElementById("gender");
    const resultDisplay = document.getElementById("bmiResult");
    const calcButton = document.getElementById("calculateBMI");
  
    calcButton.addEventListener("click", () => {
      const weight = parseFloat(weightInput.value);
      const height = parseFloat(heightInput.value);
      const age = parseInt(ageInput.value);
      const gender = genderSelect.value;
  
      if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        resultDisplay.textContent = "Please fill in all fields correctly.";
        return;
      }
  
      // Calculate BMI
      const heightM = height / 100;
      const bmi = weight / (heightM * heightM);
      let bmiCategory = "";
  
      if (bmi < 18.5) bmiCategory = "Underweight";
      else if (bmi < 24.9) bmiCategory = "Normal";
      else if (bmi < 29.9) bmiCategory = "Overweight";
      else bmiCategory = "Obese";
  
      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr = 0;
      if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
      } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
      }
  
      resultDisplay.innerHTML = `
        📈 <strong>BMI:</strong> ${bmi.toFixed(2)} (${bmiCategory})<br>
        🔥 <strong>BMR:</strong> ${Math.round(bmr)} kcal/day
      `;
    });
  });
  