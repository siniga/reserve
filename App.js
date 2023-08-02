import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/auth/LoginScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import FirstScreen from "./src/screens/onboarding/FirstScreen";
import SignupScreen from "./src/screens/auth/SignupScreen";
import ConfirmEmail from "./src/screens/auth/signup/ConfirmEmail";
import MainScreen from "./src/screens/MainScreen";
import ExploreScreen from "./src/screens/home/ExploreScreen";
import HotelDetails from "./src/screens/home/hoteldetails/Index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
            <Stack.Screen name="First" component={FirstScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Confirm" component={ConfirmEmail} />
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="HotelDetails" component={HotelDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
