import { StyleSheet, Text, View } from "react-native";
import Input from "./Input";
import { useState } from "react";

const ExpenseForm = () => {
  const [inputValues, setInputValues] = useState({
    amount: "",
    date: "",
    description: "",
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) => {
    setInputValues((currentValue) => {
      return {
        ...currentValue,
        [inputIdentifier]: enteredValue,
      };
    });
  };

  return (
    <View style={styles.form}>
      <Text style={styles.title}>Sua Despesa</Text>
      <View style={styles.inputsRow}>
        <Input
          style={styles.rowInput}
          label="Preço"
          textInputConfig={{
            keyboardType: "decimal-pad",
            onChangeText: inputChangeHandler.bind(this, "amount"),
            value: inputValues.amount,
          }}
        />
        <Input
          style={styles.rowInput}
          label="Data"
          textInputConfig={{
            placeholder: "DD/MM/YYYY",
            maxLength: 10,
            onChangeText: inputChangeHandler.bind(this, "date"),
            value: inputValues.date,
          }}
        />
      </View>
      <Input
        label="Descrição"
        textInputConfig={{
          multiline: true,
          onChangeText: inputChangeHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  inputsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rowInput: {
    flex: 1,
  },
  form: {
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    marginVertical: 24,
    textAlign: "center",
  },
});
