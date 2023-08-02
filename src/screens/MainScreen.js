import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./home/HomeScreen";
import { colors } from "../globals/theme";
import FavouriteScreen from "./home/FavouriteScreen";
import MapScreen from "./home/MapScreen";
import NotificationScreen from "./home/NotificationScreen";
import ProfileScreen from "./home/ProfileScreen";
import {
  Entypo,
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.white, // Change the active tab text color here
        tabBarInactiveTintColor: colors.primary200, // Change the inactive tab text color here
        tabBarLabelStyle: { fontSize: 12 }, // Optional: Change the font size of the tab labels
        tabBarItemStyle: { marginBottom: 1 }, // Optional: Adjust
        tabBarStyle: {
          backgroundColor: colors.primaryColor,
          height: 50,
          paddingVertical: 10,
        },
        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          let iconColor; // Add this line
          let iconImg;

          if (route.name === "Home") {
            iconColor = focused ? colors.white : color;
            iconImg = focused ? (
              <Entypo name="home" size={22} color={iconColor} />
            ) : (
              <MaterialCommunityIcons
                name="home-outline"
                size={24}
                color={iconColor}
              />
            );
          } else if (route.name === "Favourite") {
            iconColor = focused ? colors.white : color;
            iconImg = focused ? (
              <MaterialIcons name="favorite" size={24} color={iconColor} />
            ) : (
              <MaterialIcons
                name="favorite-border"
                size={24}
                color={iconColor}
              />
            );
          } else if (route.name === "Map") {
            iconColor = focused ? colors.white : color;
            iconImg = focused ? <FontAwesome5 name="map-marker-alt" size={20} color={iconColor} /> : <Feather name="map-pin" size={20} color={iconColor} /> ;
          } else if (route.name === "Notification") {
            iconColor = focused ? colors.white : color;
            iconImg = (
              <MaterialIcons
                name="notifications-none"
                size={30}
                color={iconColor}
              />
            );
          } else if (route.name === "Profile") {
            iconColor = focused ? colors.white : color;
            iconImg = focused ? <FontAwesome5 name="user-alt" size={20} color={iconColor} /> :
              <SimpleLineIcons name="user" size={20} color={iconColor} />
            
          }
          // Return the icon component
          return <>{iconImg}</>;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favourite" component={FavouriteScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      {/* <Tab.Screen name="Notification" component={NotificationScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
