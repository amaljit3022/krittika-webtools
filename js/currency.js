document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById("amount");
    const fromSelect = document.getElementById("fromCurrency");
    const toSelect = document.getElementById("toCurrency");
    const convertBtn = document.getElementById("convertCurrency");
    const resultDisplay = document.getElementById("currencyResult");
  
    // Mock exchange rates (Base: 1 USD)
    const exchangeRates = {
      USD: 1,
      EUR: 0.92,
      INR: 83.2,
      GBP: 0.78,
      JPY: 155.3,
      AUD: 1.51,
      CAD: 1.36,
      CNY: 7.2,
    };
  
    // Populate dropdowns
    Object.keys(exchangeRates).forEach((currency) => {
      const option1 = new Option(currency, currency);
      const option2 = new Option(currency, currency);
      fromSelect.appendChild(option1);
      toSelect.appendChild(option2);
    });
  
    fromSelect.value = "USD";
    toSelect.value = "INR";
  
    convertBtn.addEventListener("click", () => {
      const amount = parseFloat(amountInput.value);
      const from = fromSelect.value;
      const to = toSelect.value;
  
      if (isNaN(amount)) {
        resultDisplay.textContent = "Please enter a valid amount.";
        return;
      }
  
      const usdValue = amount / exchangeRates[from]; // Convert to USD
      const converted = usdValue * exchangeRates[to];
  
      resultDisplay.innerHTML = `💰 <strong>${amount} ${from}</strong> = <strong>${converted.toFixed(2)} ${to}</strong>`;
    });
  });
  