import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert
} from "react-native";
import { useTranslation } from 'react-i18next';
import backButton from "../../assets/BackButtonO.png";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [name, setName] = useState("");

  const { t } = useTranslation();


  const handleRegister = async () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!passwordRegex.test(password)) {
      Alert.alert(
        "Senha fraca",
        "A senha deve ter pelo menos 8 caracteres, incluindo pelo menos uma letra maiúscula, um número e um caractere especial."
      );
      return;
    }

    if (password !== passwordConfirmation) {
      Alert.alert("Erro", "As senhas não coincidem.");
      return;
    }

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
        console.log("Registro bem-sucedido!", data);
      } else {
        console.error("Falha no registro", data);
      }
    } catch (error) {
      console.error("Erro no registro", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backButton} style={styles.backButton} />
        </TouchableOpacity>
      </View>
      <Text style={styles.formTitle}>{t('title_sign_up_screen')}</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>{t('name_sign_up_screen')}</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setName}
          value={name}
          placeholderTextColor="#8b826e"
          placeholder={t('name_place_holder_sign_up_screen')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>{t('email_sign_up_screen')}</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setEmail}
          value={email}
          placeholderTextColor="#8b826e"
          placeholder={t('email_place_holder_sign_up_screen')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>{t('password_sign_up_screen')}</Text>
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password}
          placeholderTextColor="#8b826e"
          placeholder={t('password_place_holder_sign_up_screen')}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.formsubTitle}>{t('confirm_password_sign_up_screen')}</Text>
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          value={passwordConfirmation}
          onChangeText={setPasswordConfirmation}
          placeholderTextColor="#8b826e"
          placeholder={t('confirm_password_place_holder_sign_up_screen')}
        />
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>{t('sign_up_button_sign_up_screen')}</Text>
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
    padding: 50
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
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    padding: 10,
  },
  backButton: {
    width: 50,
    height: 50,
  },
  image: {
    width: 220,
    height: 250,
    marginVertical: 30,
  },
});

export default RegisterScreen;
