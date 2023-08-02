import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "../../components/common/CustomButtom";
import { colors } from "../../globals/theme";
import Tabs from "../../components/tab/Index";

const tabLinks = ["Details", "Reviews", "Photos", "Booking"];


const ExploreScreen = () => {
    return (
        <View style={styles.container}>
          <View style={styles.content1}>
            <Image
              source={require("../../../assets/imgs/lg1.png")}
              style={styles.mainImg}
            />
          </View>
          <View style={styles.content2}>
            <View style={styles.bottomContainer}>
              <View style={styles.bottomContent}>
                 <Tabs tabLinks={tabLinks} />
              </View>
            </View>
          </View>
        </View>
      );
}

export default ExploreScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content1: {
      flex: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
    },
  
    mainImg: {
      maxWidth: "100%",
    },
    content2: {
      flex: 2,
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: colors.white,
    },
    bottomContent: {
      flex: 1,
      backgroundColor: colors.primaryColor,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      alignItems: "center",
      paddingTop: 20,
    },
  });
  