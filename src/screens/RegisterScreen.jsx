import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Cadastro de Usuário</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>Nome:</Text>
        <TextInput
          style={styles.formInput}
          placeholderTextColor="#8b826e"
          placeholder="Digite seu Nome."
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>Email:</Text>
        <TextInput
          style={styles.formInput}
          placeholderTextColor="#8b826e"
          placeholder="Digite seu Email."
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>Senha:</Text>
        <TextInput
          style={styles.formInput}
          placeholderTextColor="#8b826e"
          placeholder="Digite a sua senha."
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>Confirmar Senha:</Text>
        <TextInput
          style={styles.formInput}
          placeholderTextColor="#8b826e"
          placeholder="Confirme a sua senha."
        />
      </View>
      <TouchableOpacity style={styles.registerButton}>
        <Text style={styles.registerButtonText}>CADASTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEBCE",
    alignItems: "center",
    justifyContent: "center",
    padding: 50,
  },
  inputContainer: {
    top: 0,
    right: 0,
  },
  formTitle: {
    color: "#794a3a",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  formsubTitle: {
    color: "#794a3a",
    fontSize: 17,
    marginBottom: 1,
  },
  formInput: {
    backgroundColor: "#c2b59a",
    borderWidth: 2,
    borderColor: "#f57f5b",
    borderRadius: 7,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  registerButton: {
    backgroundColor: "#dc5341",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#794a3a",
    width: 129,
    height: 51,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButtonText: {
    color: "#794a3a",
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default RegisterScreen;
