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
import { colors } from "../../globals/theme";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const nearbyHotels = [
  { id: 1, name: "Continental", img: require("../../../assets/imgs/h1.png"),    imgLg: require("../../../assets/imgs/lg1.png"), },
  { id: 2, name: "CID", img: require("../../../assets/imgs/h2.png"),     imgLg: require("../../../assets/imgs/lg1.png"),},
  { id: 4, name: "Star", img: require("../../../assets/imgs/h3.png"),    imgLg: require("../../../assets/imgs/lg1.png"), },
  { id: 3, name: "Oriental", img: require("../../../assets/imgs/h4.png"),    imgLg: require("../../../assets/imgs/lg1.png"), },
];

const popularHotels = [
  {
    id: 1,
    name: "Oriental Hotel",
    img: require("../../../assets/imgs/md1.png"),
    imgLg: require("../../../assets/imgs/lg1.png"),
    subtxt: "3 Lekki - Epe Expy, Victoria Island 106104, Lagos",
  },
  {
    id: 2,
    name: "Nevada Hotels and Suites",
    img: require("../../../assets/imgs/md2.png"),
    imgLg: require("../../../assets/imgs/lg1.png"),
    subtxt:
      "Aaron Irabor Street, off Alh. Prince Raufu Ishola Lemomu St, Agungi, Lekki",
  },
];

const recentHotels = [
  {
    id: 1,
    name: "Oriental Hotel",
    img: require("../../../assets/imgs/md1.png"),
    imgLg: require("../../../assets/imgs/lg1.png"),
    subtxt: "3 Lekki - Epe Expy, Victoria Island 106104, Lagos",
  },
  {
    id: 2,
    name: "Nevada Hotels and Suites",
    img: require("../../../assets/imgs/md2.png"),
    imgLg: require("../../../assets/imgs/lg1.png"),
    subtxt:
      "Aaron Irabor Street, off Alh. Prince Raufu Ishola Lemomu St, Agungi, Lekki",
  },
];

const HomeScreen = ({navigation}) => {
  
  const handleItemPress = (item) => {
    navigation.navigate("HotelDetails",{data: item})
  };

  const renderNearByItem = ({ item }) => {
    return (
      <Pressable style={styles.imageContainer} onPress={()=>handleItemPress(item)}>
        <Image source={item.img} style={styles.img} />
        <Text>{item.name}</Text>
      </Pressable>
    );
  };
  const renderPopularItem = ({ item }) => {
    return (
      <Pressable style={styles.popImgWrapper} onPress={()=>handleItemPress(item)}>
        <Image source={item.img} style={styles.img} resizeMode="contain" />
        <Text style={styles.imgTxtheader}>{item.name}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <Feather name="map-pin" size={10} color={colors.white} />
          <Text style={[styles.imgSubTxt, { marginLeft: 3 }]}>
            {item.subtxt.substr(0, 45)}
          </Text>
        </View>
      </Pressable>
    );
  };
  const renderRecentItem = ({ item }) => {
    return (
      <Pressable style={styles.popImgWrapper} onPress={()=>handleItemPress(item)}>
        <Image source={item.img} style={styles.img} />
        <Text style={styles.imgTxtheader}>{item.name}</Text>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 4 }}
        >
          <Feather name="map-pin" size={10} color={colors.white} />
          <Text style={[styles.imgSubTxt, { marginLeft: 3 }]}>
            {item.subtxt.substr(0, 50)}
          </Text>
        </View>
      </Pressable>
    );
  };

  const renderHeaderComponent = () => {
    return (
      <View>
        <View style={styles.content2}>
          <Text style={styles.listHeader}>Hotels around you</Text>
          <View>
            <FlatList
              data={nearbyHotels}
              horizontal
              showsHorizontalScrollIndicator={false} // Optional: hide scroll indicator
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderNearByItem}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </View>
        <View style={styles.content3}>
          <Text style={styles.listHeader}>Popular hotels around you</Text>
          <View>
            <FlatList
              data={popularHotels}
              horizontal
              showsHorizontalScrollIndicator={false} // Optional: hide scroll indicator
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderPopularItem}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </View>
        <View style={styles.content4}>
          <Text style={styles.listHeader}>Recent hotels</Text>
          <View>
            <FlatList
              data={recentHotels}
              horizontal
              showsHorizontalScrollIndicator={false} // Optional: hide scroll indicator
              keyExtractor={(item, index) => index.toString()}
              renderItem={renderRecentItem}
              contentContainerStyle={styles.listContainer}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.content1}>
        <Text style={styles.searchHeader}>Explore</Text>
        <View style={styles.searchWrapper}>
          <TextInput
          
            // value={name}
            // onFocus={handleNameChange}
            // onChangeText={handleNameChange}
            placeholder="confirm password"
            focusable={true}
            style={[
              styles.inputTxtFiled,
              // nameError && { borderWidth: 1, borderColor: "red" },
            ]}
          />
          <Pressable style={styles.searchBtn}>
            <Image source={require("../../../assets/search-icon.png")} />
          </Pressable>
        </View>
      </View>
      <View style={{ flex: 5 }}>
        <FlatList
         showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          ListHeaderComponent={renderHeaderComponent}
        />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    fontSize: 16,
    fontWeight: "500",
    color: colors.primaryColor,
  },
  content1: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  searchWrapper: {
    alignItems: "center",
    flexDirection: "row",
  },
  searchHeader: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.primaryColor,
    marginBottom: 8,
  },
  searchBtn: {
    width: 40,
    height: 40,
    backgroundColor: colors.primaryColor,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  inputTxtFiled: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderWidth: 1,
    borderColor: "#bbbbbb",
    width: "70%",
    height: 40,
    paddingHorizontal: 10,
    padding: 2,
    fontSize: 14,
    color: colors.black101010,
  },
  content2: {
    flex: 1,
    paddingHorizontal: 20,
  },
  listContainer: {
    paddingVertical: 10,
  },
  imageContainer: {
    marginRight: 10,
  },
  image: {
    width: 100, // Adjust the width as needed
    height: 100, // Adjust the height as needed
    borderRadius: 10,
    resizeMode: "cover", // You can use other resizeMode options like 'contain', 'stretch', etc.
  },
  content3: {
    flex: 2,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  content4: {
    flex: 1.5,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  popImgWrapper: {
    marginRight: 20,
    paddingBottom: 18,
    padding: 8,
    backgroundColor: colors.primaryColor,
    borderRadius: 13,
  },
  imgTxtheader: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: colors.white,
  },
  imgSubTxt: {
    fontSize: 10,
    color: colors.white,
  },
});
