document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("calc-display");
    const buttons = document.querySelectorAll(".btn");
  
    let currentInput = "";
  
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const value = btn.getAttribute("data-value");
  
        if (btn.classList.contains("equals")) {
          try {
            currentInput = eval(currentInput).toString();
          } catch (e) {
            currentInput = "Error";
          }
          display.value = currentInput;
          return;
        }
  
        if (btn.classList.contains("clear")) {
          currentInput = "";
          display.value = "";
          return;
        }
  
        currentInput += value;
        display.value = currentInput;
      });
    });
  });
  