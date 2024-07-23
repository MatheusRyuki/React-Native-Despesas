import axios from "axios";

const BACKEND_URL = "https://react-native-cursos-default-rtdb.firebaseio.com";

export const storeExpense = (expenseData) => {
  axios.post(BACKEND_URL + "/expense.json", expenseData);
};

export const fetchExpenses = async () => {
  const response = await axios.get(BACKEND_URL + "/expense.json");

  const expense = [];

  for (const keys in response.data) {
    const expenseObj = {
      id: keys,
      amount: response.data[keys].amount,
      date: new Date(response.data[keys].date),
      description: response.data[keys].description,
    };

    expense.push(expenseObj);
  }

  return expense;
};
