import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import logoMarcoPolo from "../../assets/MarcoPoloLogoT.png";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("api aqui", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        console.log("Login bem-sucedido!", data);
      } else {
        console.error("Falha no login", data);
      }
    } catch (error) {
      console.error("Erro no login", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logoMarcoPolo} style={styles.logo} />

      <Text style={styles.loginText}>LOGIN</Text>
      <TextInput
        placeholder="Email/Apelido"
        value={email}
        onChangeText={setEmail}
        style={styles.emailInput}
        placeholderTextColor="#8b826e"
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.passwordInput}
        placeholderTextColor="#8b826e"
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FAEBCE",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    margin: 50,
  },
  loginText: {
    color: "#794a3a",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  emailInput: {
    backgroundColor: "#c2b59a",
    borderWidth: 2,
    borderColor: "#f57f5b",
    borderRadius: 7,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  passwordInput: {
    backgroundColor: "#c2b59a",
    borderWidth: 2,
    borderColor: "#dc5341",
    borderRadius: 7,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: "#68c7c1",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#794a3a",
    width: 129,
    height: 51,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#794a3a",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default LoginScreen;
