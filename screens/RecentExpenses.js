import ExpenseOutput from "../components/Expenses/ExpensesOutput";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { useContext, useEffect, useState } from "react";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

const RecentExpenses = () => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const expenseCtx = useContext(ExpensesContext);

  useEffect(() => {
    const getExpense = async () => {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        expenseCtx.setExpense(expenses);
      } catch (error) {
        setError("Não pode carregar as despesas!");
      }
      setIsFetching(false);
    };

    getExpense();
  }, []);

  const errorHandler = () => {
    setError(null);
  };

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

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
