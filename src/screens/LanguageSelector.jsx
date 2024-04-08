import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import i18n from '../i18n';
import languageIcon from "../../assets/language_icon.png";

const LanguageSelector = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <Image
          source={languageIcon}
          style={styles.icon}
        />
      </TouchableOpacity>
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          <Text style={styles.dropdownItem} onPress={() => changeLanguage('en')}>
            English
          </Text>
          <Text style={styles.dropdownItem} onPress={() => changeLanguage('es')}>
            Español
          </Text>
          <Text style={styles.dropdownItem} onPress={() => changeLanguage('pt-BR')}>
            Português (Brasil)
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'relative',
    marginLeft: 40
  },
  button: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  dropdown: {
    position: 'absolute', 
    top: 50, 
    left: 0, 
    width: '100px', 
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#DDD',
    zIndex: 1000,
  },
  dropdownItem: {
    padding: 10,
    textAlign: 'center',
  },
});

export default LanguageSelector;
