// 1. Initial State Data Structures (Arrays & Individual Variables)
let monthlyBudget = 0;
let expensesList = []; // Array storing expense records as objects

// 2. DOM Selection Elements
const budgetInput = document.getElementById("monthly-budget-input");
const setBudgetBtn = document.getElementById("set-budget-btn");
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");

const totalBudgetDisplay = document.getElementById("total-budget-display");
const totalExpensesDisplay = document.getElementById("total-expenses-display");
const remainingBalanceDisplay = document.getElementById("remaining-balance-display");
const budgetStatusAlert = document.getElementById("budget-status-alert");
const expenseLogTable = document.getElementById("expense-log-table");

// 3. Event Listeners for Handling User Interactions
setBudgetBtn.addEventListener("click", function() {
    const enteredBudget = parseFloat(budgetInput.value);
    if (!isNaN(enteredBudget) && enteredBudget >= 0) {
        monthlyBudget = enteredBudget;
        budgetInput.value = "";
        updateDashboard();
    } else {
        alert("Please enter a valid numeric budget amount.");
    }
});

expenseForm.addEventListener("submit", function(event) {
    // Prevent default browser form submission reload action
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    if (name && !isNaN(amount) && amount > 0) {
        // Construct expense item record object
        const newExpense = {
            id: Date.now(),
            name: name,
            amount: amount,
            category: category
        };

        // Push element into array collection structure
        expensesList.push(newExpense);

        // Reset form inputs
        expenseForm.reset();

        // Dynamically update UI layout states
        updateDashboard();
    }
});

// 4. Processing Array Data via Loops & Computing Totals
function calculateTotalExpenses() {
    let sum = 0;
    // Process records using standard loop configuration
    for (let i = 0; i < expensesList.length; i++) {
        sum += expensesList[i].amount;
    }
    return sum;
}

// 5. Dynamic Dashboard Presentation Logic & Conditionals
function updateDashboard() {
    const totalExpenses = calculateTotalExpenses();
    const remainingBalance = monthlyBudget - totalExpenses;

    // Direct DOM Modification Statements
    totalBudgetDisplay.textContent = `$${monthlyBudget.toFixed(2)}`;
    totalExpensesDisplay.textContent = `$${totalExpenses.toFixed(2)}`;
    remainingBalanceDisplay.textContent = `$${remainingBalance.toFixed(2)}`;

    // Invoke Loop function to render updated list items
    renderExpensesTable();

    // Decision Making Conditional Checks
    if (monthlyBudget === 0) {
        budgetStatusAlert.className = "alert-box alert-warning";
        budgetStatusAlert.textContent = "Please set a monthly budget to calculate your status alert thresholds.";
    } else if (remainingBalance < 0) {
        budgetStatusAlert.className = "alert-box alert-danger";
        budgetStatusAlert.textContent = `Warning: You have exceeded your set monthly budget limit by $${Math.abs(remainingBalance).toFixed(2)}!`;
    } else if (remainingBalance <= monthlyBudget * 0.2) {
        budgetStatusAlert.className = "alert-box alert-warning";
        budgetStatusAlert.textContent = "Alert: You have spent over 80% of your allocated budget.";
    } else {
        budgetStatusAlert.className = "alert-box alert-success";
        budgetStatusAlert.textContent = "Great job! Your spending is currently within the safe boundaries of your budget limit.";
    }
}

// Loop mapping function to construct dynamic table row entries
function renderExpensesTable() {
    expenseLogTable.innerHTML = ""; // Clear stale static table values

    if (expensesList.length === 0) {
        expenseLogTable.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #aaa;">No expenses tracked yet.</td></tr>`;
        return;
    }

    // Process data using a loop array iteration block
    for (let i = 0; i < expensesList.length; i++) {
        const item = expensesList[i];
        
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.category}</td>
            <td>$${item.amount.toFixed(2)}</td>
            <td><button class="delete-btn" onclick="deleteExpenseRecord(${item.id})">Delete</button></td>
        `;

        expenseLogTable.appendChild(row);
    }
}

// 6. Support Actions - Deleting Expense Elements from Collection Lists
window.deleteExpenseRecord = function(id) {
    expensesList = expensesList.filter(item => item.id !== id);
    updateDashboard();
};

// Initial Dashboard Setup Check Trigger on script execution load
updateDashboard();
