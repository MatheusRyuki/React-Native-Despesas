import ExpenseOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { useContext, useEffect } from "react";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const expenseCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpense = async () => {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setIsFetching(false);
      expenseCtx.setExpense(expenses);
    };

    getExpense();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

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
