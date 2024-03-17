import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Cadastro de Usuario</Text>
      <Text style={styles.formsubTitle}>Nome</Text>
      <TextInput style={styles.formInput} placeholder='Digite seu Nome.'/>
      <Text style={styles.formsubTitle}>Senha</Text>
      <TextInput style={styles.formInput} placeholder='Digite a sua senha.'/>
      <TextInput style={styles.formInput} placeholder='Confirme a sua senha.'/>
     <Pressable style={styles.formButton}>
      <Text style={styles.textButton}>Cadastrar</Text>
     </Pressable>
     <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'gray',
    margin: 30,
  }, formsubTitle: {
    fontSize: 20,
    fontWeight: '300',
    color: 'black',
    margin: 10,
    alignItems: 'flex-start'
  },
  formInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 22,
    width: '80%',
    padding: 10,
    margin: 10,
  },
  formButton: {
    backgroundColor: 'gray',
    width: '80%',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center', 
  }, 
  textButton: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  }, 
});
