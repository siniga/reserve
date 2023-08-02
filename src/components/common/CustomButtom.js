import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../globals/theme";


const CustomButton = (props) => {
  const {
    text,
    onBtnPress,
    bgColor,
    color,
    borderWidth,
    borderColor,
    isLoading,
    fontSize
  } = props;
  return (
    <View style={styles.bottomBtnWrapper}>
      {!isLoading && (
        <Pressable
          style={[
            styles.bottomBtn,
            {
              backgroundColor: bgColor,
              borderWidth: borderWidth,
              borderColor: borderColor,
            },
          ]}
          onPress={onBtnPress}
        >
          <Text style={{ color: color, fontSize: fontSize }}>{text}</Text>
        </Pressable>
      )}
      {isLoading && (
        <Pressable style={[styles.loginBtn, { backgroundColor: "white" }]}>
          {/* <Image
            source={require("../../../assets/loader-primary.gif")}
            style={{ width: 40, height: 40 }}
          /> */}
        </Pressable>
      )}
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  bottomBtnWrapper: {
    // position: "absolute",
    bottom: 0,
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    height: 65,
    // borderTopWidth: 1,
    // borderTopColor: "black",
    flexDirection: "row",
    zIndex: 9999,
  },
  bottomBtn: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#6666",
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 15,
    width: "100%",
    height: 50,
    color: "white",
    backgroundColor: colors.primaryColor,
  },
});
