import { useEffect, useState } from "react";

import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import {
  TextInput,
  List,
  RadioButton,
  Checkbox,
  Text,
  Divider,
  Button,
  Switch,
  Chip,
  Snackbar,
  useTheme,
} from "react-native-paper";

import { BACKEND_ADRESS } from "../../.config";
import { useDispatch, useSelector } from "react-redux";
import { addToken } from "../../reducers/user";

export default function SignUp6Screen({ navigation }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.value.authentification.token);
  const theme = useTheme();

  const handleSuivant = () => {
    navigation.navigate("SignUp7");
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}>Ton profil 🧑‍💻</Text>
        <Text style={styles.text}>
          Indique nous tes disponibilités, {"\n"}on te proposera des
          utilisateurs {"\n"}sur les mêmes crénaux !
        </Text>
         <Button
                onPress={() => handleSuivant()}
                mode={"contained"}
                style={styles.badgeButton}
              >
                <Text style={styles.badgeButtonActive}>Suivant</Text>
              </Button>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: 150,
    fontSize: 35,
    fontWeight: "bold",
    color: "#fe5747",
    fontFamily: "LeagueSpartan-Bold",
    letterSpacing: -1,
    marginBottom: 20,
    marginTop: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    textAlign: "center",
  },
  badgeButton: {
    width: 250,
    margin: 30,
  },
  badgeButtonActive: {
    color: "white",
    fontSize: 20,
  },
});
