import { View, Text } from "react-native";

const ExpenseSummary = ({ periodName, expenses }) => {
  const expenseSum = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <View>
      <Text>{periodName}</Text>
      <Text>R$ {expenseSum.toFixed(2)}</Text>
    </View>
  );
};

export default ExpenseSummary;
