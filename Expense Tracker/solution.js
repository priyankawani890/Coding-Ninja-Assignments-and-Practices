function main() {
    class ExpenseTracker {
      #expenses;
      #income;
  
      constructor(income) {
        this.#expenses = [];
        this.#income = income;
      }
  
      addExpense(name, amount, date) {
        this.#expenses.push({ name, amount, date });
      }
  
      #calculateTotalExpenses() {
        let total = 0;
        for (let expense of this.#expenses) {
          total += expense.amount;
        }
        return total;
      }
  
      calculateBalance() {
        const totalExpenses = this.#calculateTotalExpenses();
        const totalIncome = this.#income;
        return totalIncome - totalExpenses;
      }
    }
  
    const tracker = new ExpenseTracker(5000);
    tracker.addExpense("Rent", 1000, "2021-10-01");
    tracker.addExpense("Groceries", 500, "2021-10-02");
    console.log(tracker.calculateBalance()); // should output 3500
    return ExpenseTracker;
  }
  