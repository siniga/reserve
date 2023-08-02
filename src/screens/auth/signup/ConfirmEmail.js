import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../globals/theme";
import CustomButton from "../../../components/common/CustomButtom";

const ConfirmEmail = ({ navigation }) => {
  return (
    <View style={styles.modal}>
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Image source={require("../../../../assets/logo-hor.png")} />
        </View>
        <View style={styles.modalBody}>
          <View style={styles.bodyTop}>
            <Image source={require("../../../../assets/email-icon.png")} />
            <Text style={{fontWeight:"bold"}}>Confirm your email</Text>
          </View>
          <View style={styles.bodyBottom}>
            <Text style={{fontWeight:"bold"}}>Hi Abatilol!</Text>
            <Text style={{ textAlign: "center", marginTop:10 }}>
              Thank you for signing up with Reserve! Please confirm your email
              address by clicking the link below
            </Text>
            <View style={styles.bottomWrapper}>
              <CustomButton
                onBtnPress={() => navigation.navigate("Main")}
                bgColor={colors.primaryColor}
                borderWidth={1}
                borderColor={colors.white}
                text={"Confirm email address"}
                color={colors.white}
                fontSize={16}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ConfirmEmail;

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  modalContent: {
    backgroundColor: colors.white,
    height: 400,
    borderRadius: 10,
  },
  modalHeader: {
    alignItems: "center",
    justifyContent: "center",
    height: 60,
  },
  modalBody: {
    flexDirection: "column",
  },
  bodyTop: {
    alignItems: "center",
  },
  bodyBottom: {
    paddingVertical:20,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  bottomWrapper:{
    marginTop:25
  }
});
