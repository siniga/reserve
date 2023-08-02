import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { colors } from "../../globals/theme";
import CustomButton from "../../components/common/CustomButtom";

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.mainHeader}>Welcome back!</Text>
        <View style={styles.controlSection}>
          <Text style={styles.controlLabel}>Email or phone number</Text>
          <View>
            <TextInput
              // value={name}
              // onChangeText={handleNameChange}
              placeholder="Email or phone number"
              focusable={true}
              style={[
                styles.inputTxtFiled,
                // nameError && { borderWidth: 1, borderColor: "red" },
              ]}
            />
          </View>
        </View>
        <View style={styles.controlSection}>
          <Text style={styles.controlLabel}>Password</Text>
          <View>
            <TextInput
              // value={name}
              // onChangeText={handleNameChange}
              placeholder="Password"
              focusable={true}
              style={[
                styles.inputTxtFiled,
                // nameError && { borderWidth: 1, borderColor: "red" },
              ]}
            />
          </View>
        </View>
        <View style={[styles.controlSection, { marginVertical: 10 }]}>
          <CustomButton
            onBtnPress={() => navigation.navigate("Sign in")}
            bgColor={colors.primaryColor}
            borderWidth={1}
            borderColor={colors.white}
            text={"Login"}
            color={colors.white}
            fontSize={16}
          />
        </View>
        <View
          style={[
            styles.controlSection,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Text>Forgot Password?</Text>
        </View>
        <View
          style={[
            styles.controlSection,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <Text>Dont have an account?</Text>
            <Pressable onPress={()=>navigation.navigate("Signup")}>
              <Text style={{ fontWeight: "600", color: colors.primaryColor }}>
                {" "}
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: "30%",
    paddingHorizontal: 20,
  },
  mainHeader: {
    fontWeight: "bold",
  },
  content: {},
  controlSection: {
    backgroundColor: "white",
    borderRadius: 13,
    paddingTop: 13,
  },
  controlLabel: {
    marginVertical: 10,
    fontWeight: "600",
  },
  inputTxtFiled: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#bbbbbb",
    height: 40,
    paddingHorizontal: 10,
    padding: 2,
    fontSize: 14,
    color: colors.black101010,
  },
});
