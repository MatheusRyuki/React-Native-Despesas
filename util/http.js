import axios from "axios";

export const storeExpense = (expenseData) => {
  axios.post(
    "https://react-native-cursos-default-rtdb.firebaseio.com/expense.json",
    expenseData
  );
};
