import { Viewgi } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const ExpenseOutput = ({ expenses, periodName }) => {
  return (
    <View>
      <ExpenseSummary periodName={periodName} expenses={expenses} />
      <ExpenseList />
    </View>
  );
};

export default ExpenseOutput;
