import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/UI/IconButton";
import { GlobalStyles } from "../constants/styles";
import { StyleSheet, View } from "react-native";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ManageExpense = ({ route, navigation }) => {
  const expenseCtx = useContext(ExpensesContext);

  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? "Editando Despesa" : "Adicionando Despesa",
    });
  }, [navigation, isEditing]);

  const deleteExpenseHandler = () => {
    expenseCtx.deleteExpense(editedExpenseId);
    navigation.goBack();
  };

  const cancelHandler = () => {
    navigation.goBack();
  };

  const confirmHandler = () => {
    if (isEditing) {
      expenseCtx.updatedExpense(editedExpenseId, {
        description: "teste!!!!",
        amount: 29.99,
        date: new Date("2024-07-18"),
      });
    } else {
      expenseCtx.addExpense({
        description: "teste",
        amount: 19.99,
        date: new Date("2024-07-18"),
      });
    }

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={cancelHandler}
        submitButtonLabel={isEditing ? "Atualizar" : "Adicionar"}
      />

      {isEditing && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={36}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

export default ManageExpense;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: "center",
  },
});
