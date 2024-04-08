import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity, // Importe TouchableOpacity
} from "react-native";
import backButton from "../../assets/BackButtonO.png";
import cordelCactus from "../../assets/CordelCactus.png";
import cordelCap from "../../assets/CordelCap.png";
import cordelDood from "../../assets/CordelDood.png";
import { useTranslation } from "react-i18next";

const AboutScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={backButton} style={styles.backButton} />
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Text style={styles.title}>{t('title_about_screen')}</Text>
        <Text style={styles.text}>{t('text_1_about_screen')}</Text>
        <Image source={cordelDood} style={styles.image} />
        <Text style={styles.text}>{t('text_2_about_screen')}</Text>
        <Image source={cordelCap} style={styles.image} />
        <Text style={styles.text}>{t('text_3_about_screen')}</Text>
        <Image source={cordelCactus} style={styles.image} />
        <Text style={styles.text}>{t('text_4_about_screen')}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAEBCE",
    padding: 30,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  backButton: {
    width: 50,
    height: 50,
  },
  body: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 220,
    height: 250,
    marginVertical: 30,
  },
  text: {
    marginVertical: 10,
    alignItems: "center",
    textAlign: "center",
    color: "#38221B",
    fontSize: 20,
  },
  title: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
    color: "#794A3A",
    fontWeight: "600",
    marginBottom: 40
  },
});

export default AboutScreen;
