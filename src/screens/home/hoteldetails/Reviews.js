import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { colors, viewSettings } from "../../../globals/theme";

const data = [
  { id: '1', name: 'Item 1' },
  { id: '2', name: 'Item 2' },
  { id: '3', name: 'Item 3' },
  // Add more items as needed
];


const Reviews = () => {
  const renderCommentItem = ({ item }) => {
    return   <View style={styles.reviewCommentSection}>
    <View style={styles.userImg}>
      <Image source={require("../../../../assets/user-avatar.png")} />
    </View>
    <View style={styles.commentBodyWrapper}>
      <View style={styles.userNameWrapper}>
        <Text style={styles.userNameTxt}>Khamis ALi</Text>
        <Text style={styles.userNameTxt}>4/5</Text>
      </View>
      <Text style={styles.timeAgo}>2 days ago on Google</Text>
      <View style={styles.commentBodyDetails}>
        <Text style={styles.commentBodyTxt}>
          A good hotel in summary. Beautiful Place with beautiful
          aesthetics. Amazing Ventilation and spacious rooms. Lots of
          parking space for different arms of the hotel and other
          businesses in the premises. I Did not really feel a proper
          presence of security for a hotel that hosts high priority guests
          often. The multipurpose auditorium is really spacious and well
          situated too.
        </Text>
      </View>
    </View>
  </View>
  };

  return (
    <View>
      <Text style={styles.header}>Google review summary &#9432;</Text>
      <Text style={styles.rateScore}>4.4</Text>
      <View style={styles.starRate}>
        <Image source={require("../../../../assets/stars.png")} />
      </View>
      <Text style={styles.reviewNum}>1,2399 reviews</Text>
      <View style={styles.ratingDetailWrapper}>
        <Text style={styles.rate}>5 star</Text>
        <View style={styles.rateProgressWrapper}>
          <View style={[styles.rateProgressBar, { width: "50%" }]}></View>
        </View>
      </View>
      <View style={styles.ratingDetailWrapper}>
        <Text style={styles.rate}>4 star</Text>
        <View style={styles.rateProgressWrapper}>
          <View style={[styles.rateProgressBar, { width: "30%" }]}></View>
        </View>
      </View>
      <View style={styles.ratingDetailWrapper}>
        <Text style={styles.rate}>3 star</Text>
        <View style={styles.rateProgressWrapper}>
          <View style={[styles.rateProgressBar, { width: "80%" }]}></View>
        </View>
      </View>
      <View style={styles.ratingDetailWrapper}>
        <Text style={styles.rate}>2 star</Text>
        <View style={styles.rateProgressWrapper}>
          <View style={[styles.rateProgressBar, { width: "20%" }]}></View>
        </View>
      </View>
      <View style={styles.ratingDetailWrapper}>
        <Text style={styles.rate}>1 star</Text>
        <View style={styles.rateProgressWrapper}>
          <View style={[styles.rateProgressBar, { width: "90%" }]}></View>
        </View>
      </View>
      <View style={styles.reviewSection}>
        <View style={styles.reviewHeaderWrapper}>
          <Text style={styles.reviewHeader}>Reviews</Text>
          <Pressable style={styles.addReviewBtnWrapper}>
            <Image source={require("../../../../assets/create-icon.png")} />
            <Text style={styles.addReviewBtn}>Write a review</Text>
          </Pressable>
        </View>
        <View style={[styles.reviewSearchInputWrapper]}>
          <TextInput
            style={styles.reviewSearchInput}
            placeholder="Search reviews"
            placeholderTextColor={colors.white}
          />
          <Image
            style={styles.reviewSearchIcon}
            source={require("../../../../assets/search-icon-2.png")}
          />
        </View>
        <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id}
      />
    </View>
      
      </View>
    </View>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  header: {
    marginTop: 15,
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  rateScore: {
    marginTop: 10,
    marginBottom: 5,
    color: colors.white,
    fontWeight: "bold",
    fontSize: 16,
  },
  starRate: {
    marginVertical: 5,
  },
  reviewNum: {
    color: colors.white,
    fontSize:12
  },
  ratingDetailWrapper: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rate: {
    color: colors.white,
  },
  rateProgressWrapper: {
    backgroundColor: colors.white,
    width: "80%",
    height: 5,
    borderRadius: 8,
  },
  rateProgressBar: {
    backgroundColor: "#F2B401",
    height: "100%",
  },
  reviewSection: {
    marginTop: 20,
  },
  reviewHeaderWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 40,
    marginBottom:10
  },
  reviewHeader: {
    color: colors.white,
    fontWeight: "bold",
  },
  addReviewBtn: {
    fontWeight: "bold",
    color: colors.white,
  },
  addReviewBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 104,
  },
  reviewSearchInputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 8,
    height: 40,
    width: "100%",
    paddingHorizontal: 10,
  },
  reviewSearchInput: {
    width: "90%",
    color: colors.white,
  },
  reviewCommentSection: {
    flexDirection: "row",
    marginTop: 20,
    borderWidth: 1,
    borderColor: colors.white,
    borderRadius: 10,
    padding: 10,
  },
  userNameWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userNameTxt: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 14,
  },
  timeAgo: {
    color: colors.white,
    fontSize: 11,
    marginVertical: 5,
  },
  commentBodyWrapper: {
    marginHorizontal: 10,
  },
  commentBodyTxt: {
    color: colors.white,
    fontSize: 13,
    maxWidth: "95%",
  },
});
