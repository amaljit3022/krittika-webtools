document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const result = document.getElementById("convertedResult");
  
    const units = {
      Length: {
        m: 1,
        cm: 0.01,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34,
      },
      Mass: {
        kg: 1,
        g: 0.001,
        mg: 0.000001,
        lb: 0.453592,
        oz: 0.0283495,
      },
      Temperature: {
        C: "Celsius",
        F: "Fahrenheit",
        K: "Kelvin",
      },
    };
  
    // Default category
    let currentCategory = "Length";
  
    // Dropdown categories for dynamic population
    const categories = Object.keys(units);
  
    // Simple category switcher UI (optional - future)
    function loadUnitOptions(category = "Length") {
      currentCategory = category;
  
      const keys = Object.keys(units[category]);
      fromUnit.innerHTML = "";
      toUnit.innerHTML = "";
  
      keys.forEach((unit) => {
        const option1 = document.createElement("option");
        option1.value = unit;
        option1.textContent = unit;
  
        const option2 = option1.cloneNode(true);
  
        fromUnit.appendChild(option1);
        toUnit.appendChild(option2);
      });
  
      fromUnit.value = keys[0];
      toUnit.value = keys[1] || keys[0];
      updateConversion();
    }
  
    function convertTemperature(value, from, to) {
      if (from === to) return value;
  
      // Convert from → Celsius
      let tempC = 0;
      if (from === "F") tempC = (value - 32) * (5 / 9);
      else if (from === "K") tempC = value - 273.15;
      else tempC = value;
  
      // Convert Celsius → to target
      if (to === "F") return tempC * 9 / 5 + 32;
      if (to === "K") return tempC + 273.15;
      return tempC;
    }
  
    function updateConversion() {
      const val = parseFloat(input.value);
      if (isNaN(val)) {
        result.textContent = "= 0";
        return;
      }
  
      const from = fromUnit.value;
      const to = toUnit.value;
  
      let converted;
  
      if (currentCategory === "Temperature") {
        converted = convertTemperature(val, from, to);
      } else {
        const base = val * units[currentCategory][from];
        converted = base / units[currentCategory][to];
      }
  
      result.textContent = `= ${converted.toFixed(4)}`;
    }
  
    // Event Listeners
    input.addEventListener("input", updateConversion);
    fromUnit.addEventListener("change", updateConversion);
    toUnit.addEventListener("change", updateConversion);
  
    // Init
    loadUnitOptions("Length");
  });
  