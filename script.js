const income = document.getElementById("income-balance");
const balanceShow = document.getElementById("balance");

function totalExpenses() {
  const foodExpense = document.getElementById("foodField");
  const foodExpenseValue = foodExpense.value;
  const rentExpense = document.getElementById("rentField");
  const rentExpenseValue = rentExpense.value;
  const clotheExpense = document.getElementById("clotheField");
  const clotheExpenseValue = clotheExpense.value;

  const totalExpense =
    parseInt(foodExpenseValue) +
    parseInt(rentExpenseValue) +
    parseInt(clotheExpenseValue);
  return totalExpense;
}

function accountBalance(totalExpense) {
  const incomeValue = income.value;
  const accountBalance = parseInt(incomeValue) - totalExpense;
  return accountBalance;
}

function expenceCalculation() {
  const totalExpense = totalExpenses();
  const balance = accountBalance(totalExpense);

  const totalExpenseShow = document.getElementById("total-expenses");
  totalExpenseShow.innerText = totalExpense;

  balanceShow.innerText = balance;
}

function saveMoneyCalculation() {
  const saveMoneyField = document.getElementById("save-money");
  const saveMoneyParcentage = saveMoneyField.value;

  const saveMoneyAmount =
    (parseFloat(saveMoneyParcentage) * parseFloat(income.value)) / 100;

  const saveMoneyShow = document.getElementById("save-money-show");
  saveMoneyShow.innerText = saveMoneyAmount;

  const remainingBalanceshow = document.getElementById("remainingBalance-show");
  remainingBalanceshow.innerText = parseFloat(balanceShow.innerText) - saveMoneyAmount;
}
