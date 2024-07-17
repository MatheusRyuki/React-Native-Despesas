import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const ExpenseOutput = ({ expenses }) => {
  return (
    <View>
      <ExpenseSummary />
      <ExpenseList />
    </View>
  );
};

export default ExpenseOutput;
