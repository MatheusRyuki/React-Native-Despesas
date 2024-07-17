import { View } from "react-native";
import ExpenseSummary from "./ExpenseSummary";
import ExpenseList from "./ExpenseList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Um par de sapatos",
    amount: 59.99,
    date: new Date("2024-07-06"),
  },
  {
    id: "e2",
    description: "Um par de meias",
    amount: 89.29,
    date: new Date("2024-07-04"),
  },
  {
    id: "e3",
    description: "Dúzia de Bananas",
    amount: 5.99,
    date: new Date("2024-07-03"),
  },
  {
    id: "e4",
    description: "Um livro",
    amount: 14.99,
    date: new Date("2024-07-04"),
  },
  {
    id: "e5",
    description: "Um livro",
    amount: 18.59,
    date: new Date("2024-07-04"),
  },
];

const ExpenseOutput = ({ expenses, periodName }) => {
  return (
    <View>
      <ExpenseSummary periodName={periodName} expenses={expenses} />
      <ExpenseList />
    </View>
  );
};

export default ExpenseOutput;
