function elementValue(id) {
  const elementId = document.getElementById(id);
  const elementValue = elementId.value;
  return elementValue;
}

function showValue(id, value) {
  console.log(id, value);
  const elementId = document.getElementById(id);
  elementId.innerText = value;
}

// Expence Calculation Button Function
function expenceCalculation() {

  // Total Expence Calculation 
  const foodExpense = elementValue("foodField");
  const rentExpense = elementValue("rentField");
  const clotheExpense = elementValue("clotheField");
  const totalExpense =
    parseFloat(foodExpense) + parseFloat(rentExpense) + parseFloat(clotheExpense);

  // Balance Calculation
  const income = elementValue("income-balance");  
  const balance = parseFloat(income) - parseFloat(totalExpense);

  // Show Value
  showValue("total-expenses", totalExpense);
  showValue("balance", balance)
}

// Save Money Calculation
function saveMoneyCalculation() {
  
  // Savings Money
  const saveMoneyParcentage = elementValue("save-money");
  const saveMoneyAmount =
    (parseFloat(saveMoneyParcentage) *
      parseFloat(elementValue("income-balance"))) / 100;
  showValue("save-money-show", saveMoneyAmount);

  // Money Remaining
  const balanceValue = document.getElementById("balance");
  const remainingMoney =
    parseFloat(balanceValue.innerText) - parseFloat(saveMoneyAmount);
  showValue("remaining-balance-show", remainingMoney);
}