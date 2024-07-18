import { useContext } from "react";
import ExpenseOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";

const AllExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  return (
    <ExpenseOutput
      periodName="Total"
      expenses={expenseCtx.expenses}
      fallbackText="Nenhum gasto registrado"
    />
  );
};

export default AllExpenses;
