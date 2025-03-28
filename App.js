import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import AgendaScreen from "./screens/AgendaScreen";
import AgendaInvitListScreen from "./screens/AgendaInvitListScreen";
import ChatConversationScreen from "./screens/ChatConversationScreen";
import ChatNewConversationScreen from "./screens/ChatNewConversationScreen";
import ChatListScreen from "./screens/ChatListScreen";
import HomeScreen from "./screens/HomeScreen";
import ProfileEditionScreen from "./screens/ProfileEditionScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CameraScreen from "./screens/CameraScreen";
import SignUp1Screen from "./screens/SignUp/SignUp1Screen";
import SignUp2Screen from "./screens/SignUp/SignUp2Screen";
import SignUp3Screen from "./screens/SignUp/SignUp3Screen";
import SignUp4Screen from "./screens/SignUp/SignUp4Screen";
import SignUp5Screen from "./screens/SignUp/SignUp5Screen";
import SignUp6Screen from "./screens/SignUp/SignUp6Screen";
import SignUp7Screen from "./screens/SignUp/SignUp7Screen";
import SignUp8Screen from "./screens/SignUp/SignUp8Screen";
import SignUp9Screen from "./screens/SignUp/SignUp9Screen";
import UnsubscribeScreen from "./screens/UnsubscribeScreen";
import ModifyPhotoScreen from "./screens/ModifyPhotoScreen";
import AgendaPastScreen from "./screens/AgendaPastScreen";
import { Ionicons } from "@expo/vector-icons"; // Importer les icônes
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PaperProvider } from "react-native-paper";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "./reducers/user";
import reservations from "./reducers/reservations";
import discussions from "./reducers/discussions";
import restaurantFilter from "./reducers/restaurantFilter";

import OthersProfileScreen from "./screens/OthersProfileScreen";


// Init Redux Store
const store = configureStore({
  reducer: { user, reservations, discussions, restaurantFilter },
});


// Init Navigations Stack and TAB
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
    <Stack.Screen name="Agenda" component={AgendaScreen} />
    <Stack.Screen name="AgendaPast" component={AgendaPastScreen} />
    </Stack.Navigator>
  )
}
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarIconStyle: styles.tabBarIcon,

        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconSize = 26; // Taille par défaut pour toutes les icônes
          let iconStyle = {}; // Style par défaut vide

          if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Chat") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "Home") {
            iconName = focused ? "location" : "location-outline";
            iconSize = 30; // Augmenter la taille de l'icône pour la homepage
            iconStyle = {
              marginTop: 10,
              right: 2,
              top: -5,
              width: 30,
              height: 30,
            }; // Appliquer une marge spécifique
          } else if (route.name === "Agenda") {
            iconName = focused ? "calendar" : "calendar-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "settings" : "settings-outline";
          }

          return (
            <Ionicons
              name={iconName}
              size={iconSize}
              color={color}
              style={iconStyle}
            />
          );
        },
        tabBarActiveTintColor: "#fe5747",
        tabBarInactiveTintColor: "#202020",
      })}
    >
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Chat" component={ChatListScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Agenda" component={StackNavigator} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};


SplashScreen.preventAutoHideAsync();

export default function App() {

// Init colors theme with React Paper
  const theme = {
    colors: {
      primary: "rgb(254, 87, 71)",
      onPrimary: "rgb(255, 255, 255)",
      primaryContainer: "rgb(246, 233, 242)",
      onPrimaryContainer: "rgb(56, 0, 55)",
      secondary: "rgb(182, 35, 27)",
      onSecondary: "rgb(255, 255, 255)",
      secondaryContainer: "rgb(255, 218, 213)",
      onSecondaryContainer: "rgb(65, 0, 1)",
      tertiary: "rgb(0, 108, 72)",
      onTertiary: "rgb(255, 255, 255)",
      tertiaryContainer: "rgb(141, 247, 194)",
      onTertiaryContainer: "rgb(0, 33, 19)",
      error: "rgb(186, 26, 26)",
      onError: "rgb(255, 255, 255)",
      errorContainer: "rgb(255, 218, 214)",
      onErrorContainer: "rgb(65, 0, 2)",
      background: "#fcf4e9",
      onBackground: "rgb(31, 26, 29)",
      surface: "rgb(255, 251, 255)",
      onSurface: "rgb(31, 26, 29)",
      surfaceVariant: "rgb(255, 255, 255)",
      onSurfaceVariant: "rgb(78, 68, 75)",
      outline: "rgb(254, 87, 71)",
      outlineVariant: "rgb(209, 194, 203)",
      shadow: "rgb(0, 0, 0)",
      scrim: "rgb(0, 0, 0)",
      inverseSurface: "rgb(52, 47, 50)",
      inverseOnSurface: "rgb(248, 238, 242)",
      inversePrimary: "rgb(255, 171, 241)",
      elevation: {
        level0: "transparent",
        level1: "rgb(249, 242, 249)",
        level2: "rgb(246, 236, 245)",
        level3: "rgb(242, 231, 241)",
        level4: "rgb(241, 229, 240)",
        level5: "rgb(239, 225, 238)",
      },
      surfaceDisabled: "rgba(31, 26, 29, 0.12)",
      onSurfaceDisabled: "rgba(31, 26, 29, 0.38)",
      backdrop: "rgba(55, 46, 52, 0.4)",
    },
  };

// Load Fonts for screens
  const [loaded, error] = useFonts({
    "OldStandard-Bold": require("./assets/fonts/OldStandardTT-Bold.ttf"),
    "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "LeagueSpartan-Bold": require("./assets/fonts/LeagueSpartan-Bold.ttf"),
    "LeagueSpartan-Regular": require("./assets/fonts/LeagueSpartan-Regular.ttf"),
    "LeagueSpartan-SemiBold": require("./assets/fonts/LeagueSpartan-SemiBold.ttf"),
  });


  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SignUp" component={SignUpScreen} />
              <Stack.Screen name="TabNavigator" component={TabNavigator} />
              <Stack.Screen
                name="ProfileEdition"
                component={ProfileEditionScreen}
              />
              <Stack.Screen
                name="OtherProfile"
                component={OthersProfileScreen}
              />
              <Stack.Screen name="ChatList" component={ChatListScreen} />
              <Stack.Screen
                name="ChatConversation"
                component={ChatConversationScreen}
              />
              <Stack.Screen
                name="ChatNewConversation"
                component={ChatNewConversationScreen}
              />

            <Stack.Screen
              name="AgendaInvitListScreen"
              component={AgendaInvitListScreen}
            />
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="Camera" component={CameraScreen} />
            <Stack.Screen name="SignUp1" component={SignUp1Screen} />
            <Stack.Screen name="SignUp2" component={SignUp2Screen} />
            <Stack.Screen name="SignUp3" component={SignUp3Screen} />
            <Stack.Screen name="SignUp4" component={SignUp4Screen} />
            <Stack.Screen name="SignUp5" component={SignUp5Screen} />
            <Stack.Screen name="SignUp6" component={SignUp6Screen} />
            <Stack.Screen name="SignUp7" component={SignUp7Screen} />
            <Stack.Screen name="SignUp8" component={SignUp8Screen} />
            <Stack.Screen name="SignUp9" component={SignUp9Screen} />
            <Stack.Screen name="Unsubscribe" component={UnsubscribeScreen} />
            <Stack.Screen name="ModifyPhoto" component={ModifyPhotoScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 64,
    backgroundColor: "#fff",
    borderRadius: 50,
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 5,
    marginBottom: 24,
    marginHorizontal: 16,
    zIndex: 1,
    position: "absolute",
  },

  tabBarIcon: {
    display: "flex",
    flexDirection: "row",
    width: 20,
    height: 20,
    marginBottom: -25,
  },
});
