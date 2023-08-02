import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import CustomButton from "../../../components/common/CustomButtom";
import { colors } from "../../../globals/theme";
import MainTab from "../../../components/tab/Index";
import Details from "./Details";
import Reviews from "./Reviews";
import Photos from "./Photos";
import Booking from "./Booking";

const tabLinks = ["Details", "Reviews", "Photos", "Booking"];

const HotelDetails = ({ route }) => {
  const { data } = route.params;
  const [selectedTab, setSelectedTab] = useState(tabLinks[0])

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Image source={data?.imgLg} style={styles.mainImg} />
      </View>
      <View style={styles.content2}>
        <View style={styles.bottomContainer}>
          <View style={styles.bottomContent}>
            <MainTab tabLinks={tabLinks} data={data} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
            {selectedTab === "Details" && <Details data={data} />} 
            {selectedTab === "Reviews" && <Reviews data={data} />} 
            {selectedTab === "Photos" && <Photos data={data} />} 
            {selectedTab === "Booking" && <Booking data={data} />} 
            </MainTab>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HotelDetails;

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
    paddingHorizontal:10
  },
});
