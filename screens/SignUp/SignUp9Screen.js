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

export default function SignUp9Screen({ navigation }) {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.value.authentification.token);
  const userReducer = useSelector((state) => state.user.value);
  const theme = useTheme();

  console.log(userReducer);

  const handleDemarrer = () => {
    navigation.navigate("TabNavigator", { screen: "Home" });
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, { backgroundColor: theme.colors.background }]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View>
        <Text style={styles.title}>Ton profil est créé 👍</Text>
        <Text style={styles.text}>
          Super ! 🎉 {"\n"}Tu peux commencer à te connecter {"\n"}avec les
          utilisateurs qui t'entourent !
        </Text>
                 <Button
                        onPress={() => handleDemarrer()}
                        mode={"contained"}
                        style={styles.badgeButton}
                      >
                        <Text style={styles.badgeButtonActive}>Démarrer</Text>
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
