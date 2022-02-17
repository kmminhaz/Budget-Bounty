// -------------------------
// All Errors ID Calling
// -------------------------
// errors message for expences


// error message for income


// error message for saving amount


// error message for savings





// ---------------------------------------------
// All "String or Positive" Error checking 
// ---------------------------------------------
function errorChecking() {
  for (const value of arguments) {
    if (isNaN(value) == true) {
      return true;
    } else if (value < 0) {
      return true;
    } else {
      return false;
    }
  }
}



// -----------------------
// All input field value
// -----------------------
function elementValue(id) {
  const elementId = document.getElementById(id);
  const elementValue = elementId.value;
  let error = errorChecking(elementValue);
  if (error == false) {
    return elementValue;
  }
}



// ------------------------------
// Showing process of All Values
// ------------------------------
function showValue(id, value) {
  const elementId = document.getElementById(id);
  elementId.innerText = value;
}



// --------------------------------------
// Expence Calculation Button Function
// --------------------------------------
function expenceCalculation() {

  // errors message for expences
  const expencesCalculationErrorMessage = document.getElementById(
    "expences-calculation-error"
  );
  expencesCalculationErrorMessage.style.display = "none";

  // error message for income
  const incomeErrorMessage = document.getElementById("income-error");
  incomeErrorMessage.style.display = "none";

  // Expences
  const foodExpense = elementValue("foodField");
  const rentExpense = elementValue("rentField");
  const clotheExpense = elementValue("clotheField");

  // Income
  const income = elementValue("income-balance");

  // Error Chacking
  const error = errorChecking(income, foodExpense, rentExpense, clotheExpense);

  if (error == false) {
    // Total Expences
    const totalExpense =
      parseFloat(foodExpense) +
      parseFloat(rentExpense) +
      parseFloat(clotheExpense);

    // Balance Calculation
    const balance = parseFloat(income) - parseFloat(totalExpense);

    // income error checking
    if (totalExpense < income) {
      // Show Value
      showValue("total-expenses", totalExpense);
      showValue("balance", balance);
    } else {
      incomeErrorMessage.style.display = "block";
    }
  } else {
    let errorMessage = document.getElementById("expences-calculation-error");
    errorMessage.style.display = "block";
  }
}



// ---------------------------------------
// Save Money Calculation Button Function
// ---------------------------------------
function saveMoneyCalculation() {
  // error message for saving amount
  const savingsCalculationErrorMessage = document.getElementById(
    "saving-calculation-error"
  );
  savingsCalculationErrorMessage.style.display = "none";

  // error message for savings
  const savingsError = document.getElementById("savings-error");
  savingsError.style.display = "none";

  // saving amount field for error message
  const errorSavingAmount = document.getElementById("saving-amount");

  // balance field value
  const balanceField = document.getElementById("balance");
  const balanceValue = balanceField.innerText;

  // saving parcentage
  const saveMoneyParcentage = elementValue("save-money");

  // Checking Error
  let error = errorChecking(saveMoneyParcentage);
  if (error == false) {
    // Savings Money
    const saveingAmount =
      (parseFloat(saveMoneyParcentage) *
        parseFloat(elementValue("income-balance"))) /
      100;

    // Money Remaining
    const remainingMoney = parseFloat(balanceValue) - parseFloat(saveingAmount);

    // Error Chacking
    if (saveingAmount < balanceValue) {
      // Show Values
      showValue("save-money-show", saveingAmount);
      showValue("remaining-balance-show", remainingMoney);
    } else {
      // error message
      savingsError.style.display = "block";
      errorSavingAmount.innerText = saveingAmount;
    }
  } else {
    let errorMessage = document.getElementById("saving-calculation-error");
    errorMessage.style.display = "block";
  }
}