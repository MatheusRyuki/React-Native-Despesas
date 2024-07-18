import ExpenseOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { useContext } from "react";

const RecentExpenses = () => {
  const expenseCtx = useContext(ExpensesContext);

  const recentExpenses = expenseCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });

  return (
    <ExpenseOutput
      periodName="Últimos 7 dias"
      expenses={recentExpenses}
      fallbackText="Nenhum gasto registrado nos últimos 7 dias"
    />
  );
};

export default RecentExpenses;
