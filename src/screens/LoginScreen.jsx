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

  const handleAboutButton = async () => {
    navigation.navigate('About');
  } 

  const handleRegisterButton = async () => {
    navigation.navigate('Register');
  } 

  return (
    <View style={styles.container}>
      <View style={styles.aboutButtonContainer}>
        <TouchableOpacity style={styles.aboutButton} onPress={handleAboutButton}>
          <Text style={styles.aboutButtonText}>SOBRE NÓS</Text>
        </TouchableOpacity>
      </View>

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
        <Text style={styles.loginButtonText}>ENTRAR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterButton}>
        <Text style={styles.registerButtonText}>CADASTRO</Text>
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
  logo: {
    width: 150,
    height: 150,
    marginTop: 40,
    marginBottom: 60,
  },
  loginText: {
    color: "#794a3a",
    fontSize: 24,
    fontWeight: "bold",
    justifyContent: "center",
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
  aboutButtonContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  aboutButton: {
    backgroundColor: "#fac97a",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#794a3a",
    width: 100,
    height: 30,
    margin: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  registerButton: {
    backgroundColor: "#dc5341",
    borderRadius: 21,
    borderWidth: 1,
    borderColor: "#794a3a",
    width: 129,
    height: 51,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
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
  loginButtonText: {
    color: "#794a3a",
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "600",
  },
  registerButtonText: {
    color: "#794a3a",
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "600",
  },
  aboutButtonText: {
    color: "#794a3a",
    fontSize: 11,
    justifyContent: "center",
    textAlign: "center",
    fontWeight: "600",
  },
});

export default LoginScreen;
