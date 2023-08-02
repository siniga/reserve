import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../../../globals/theme";

const Details = ({ data }) => {
  return (
    <View>
      <Text style={styles.mainHeader}>{data?.name}</Text>
      <View style={styles.detailContent}>
        {/*  */}
        <View style={styles.content1}>
          <Pressable style={styles.content1Nav}>
            <Text style={styles.navTxt}>Website</Text>
          </Pressable>
          <Pressable style={styles.content1Nav}>
            <Text style={styles.navTxt}>Directions</Text>
          </Pressable>
          <Pressable style={styles.content1Nav}>
            <Text style={styles.navTxt}>Ratings</Text>
          </Pressable>
          <Pressable style={styles.content1Nav}>
            <Text style={styles.navTxt}>Call</Text>
          </Pressable>
        </View>
        {/*  */}
        <View style={styles.content2}>
          <View style={styles.address1}>
            <Text style={styles.addressHeader}>Address: </Text>
            <Text style={styles.addressBody}>
              3 Lekki - Epe Expy, Victoria Island 106104, Lagos
            </Text>
          </View>
          <View style={styles.address2}>
            <Text style={styles.addressHeader}>Call: </Text>
            <Text style={styles.addressBody}> 01 280 6600</Text>
          </View>
        </View>
        {/*  */}
        <View style={styles.content3}>
          <Text style={styles.mdHeader}>Hotel details</Text>
          <View style={styles.content3Content}>
            <Text style={{ color: colors.white }}>
              On the banks of Five Cowries Creek overlooking Lagos Island, this
              upmarket hotel is 2 km from the white sands of Bar Beach, and 5 km
              from the Nigerian National Museum.
            </Text>
            <Text style={{ color: colors.white, marginTop: 8 }}>
              Sleek, polished rooms come with Wi-Fi and flat-screen TVs, plus
              minifridges, and tea and coffeemaking facilities; some have water
              views. Upgraded rooms include sitting areas and safes, and some
              have minibars and separate living rooms. Room service is offered
              24/7.
            </Text>
            <Text style={{ color: colors.white, marginTop: 8 }}>
              There's a refined Asian restaurant, a coffee shop and a
              bar/lounge. Other amenities include a business centre, a gym, and
              an outdoor pool overlooking the creek.
            </Text>
          </View>
        </View>
        {/*  */}
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  mainHeader: {
    marginTop: 15,
    fontSize: 20,
    color: colors.white,
  },
  detailContent: {
    flex: 1,
  },
  content1: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content1Nav: {
    backgroundColor: colors.primary700,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 7,
  },
  navTxt: {
    color: colors.white,
  },
  content2: {
    height: 70,
  },
  address1: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  address2: {
    marginTop: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  addressHeader: {
    color: colors.white,
    fontWeight: "bold",
  },
  addressBody: {
    color: colors.white,
    fontSize: 11,
  },
  content3: {
    marginTop: 20,
  },
  mdHeader: {
    fontWeight:"bold",
    fontSize: 16,
    color: colors.white,
  },
  content3Content: {
    maxWidth: "96%",
    marginTop: 10,
  },
});
