import { useLayoutEffect } from "react";

const { Text } = require("react-native");

const ManageExpense = ({ route, navigation }) => {
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editando Despesa" : "Adicionando Despesa",
    });
  }, [navigation, isEditing]);

  return <Text>ManageExpense</Text>;
};

export default ManageExpense;
