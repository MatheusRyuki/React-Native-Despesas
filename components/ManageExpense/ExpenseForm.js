import { View } from "react-native";
import Input from "./Input";

const ExpenseForm = () => {
  const amountChangeHandler = () => {};

  return (
    <View>
      <Input
        label="Preço"
        textInputConfig={{
          keyboardType: "decimal-pad",
          onChangeText: amountChangeHandler,
        }}
      />
      <Input
        label="Data"
        textInputConfig={{
          placeholder: "DD/MM/YYYY",
          maxLength: 10,
          onChangeText: () => {},
        }}
      />
      <Input label="Descrição" textInputConfig={{}} />
    </View>
  );
};

export default ExpenseForm;
