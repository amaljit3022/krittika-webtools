document.addEventListener("DOMContentLoaded", () => {
    const dobInput = document.getElementById("dob");
    const calculateBtn = document.getElementById("calculateAge");
    const result = document.getElementById("ageResult");
  
    calculateBtn.addEventListener("click", () => {
      const dob = new Date(dobInput.value);
      if (!dobInput.value) {
        result.textContent = "Please select your date of birth.";
        return;
      }
  
      const today = new Date();
      let years = today.getFullYear() - dob.getFullYear();
      let months = today.getMonth() - dob.getMonth();
      let days = today.getDate() - dob.getDate();
  
      if (days < 0) {
        months--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        days += lastMonth.getDate();
      }
  
      if (months < 0) {
        years--;
        months += 12;
      }
  
      result.textContent = `🎉 You are ${years} year(s), ${months} month(s), and ${days} day(s) old.`;
    });
  });
  