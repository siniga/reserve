import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../globals/theme";
import { Image } from "react-native";
import CustomButton from "../../components/common/CustomButtom";

const FirstScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/onboard-img.png")}
            style={styles.onboardImg}
          />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomContent}>
          <View style={styles.headerWrapper}>
            <Text style={styles.header}>Find hotels around you</Text>
            <Text style={styles.subHeader}>
              Looking for hotels to spend the night? Reserve is the best choice
              for you
            </Text>
          </View>
          <View style={styles.bottomWrapper}>
            <CustomButton
              onBtnPress={() => navigation.navigate("Signup")}
              fontSize={16}
              bgColor={colors.white}
              text={"Create an account"}
            />
            <CustomButton
              onBtnPress={() => navigation.navigate("Login")}
              bgColor={colors.primaryColor}
              borderWidth={1}
              borderColor={colors.white}
              text={"Login"}
              color={colors.white}
              fontSize={16}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primaryColor,
  },
  topContainer: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    aspectRatio: 1,
  },
  onboardImg: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "contain",
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bottomContent: {
    flex: 1,
    backgroundColor: colors.primaryColor,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    paddingTop: 60,
  },
  headerWrapper: {
    flex: 1,
    width: "70%",
    alignItems: "center",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.white,
  },
  subHeader: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    color: colors.white,
  },
  bottomWrapper: {
    flex: 1.2,
    width: "78%",
  },
});
