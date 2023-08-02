import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../../globals/theme";

const MainTab = ({ tabLinks, children, selectedTab, setSelectedTab }) => {
  // const [selectedLink, setSelectedLink] = useState(tabLinks[0]);

  const onLinkPress = (item) => {
    // setSelectedLink(item);
    setSelectedTab(item);
  };

  const renderHeaderComponent = () => {
    return <View>{children}</View>;
  };

  return (
    <View style={styles.container}>
      <View style={styles.tablinksWrapper}>
        {tabLinks?.map((item, index) => {
          return (
            <Pressable
              key={index}
              style={{ height: 30 }}
              onPress={() => onLinkPress(item)}
            >
              <Text
                style={selectedTab == item ? styles.linkActive : styles.link}
              >
                {item}
              </Text>
            </Pressable>
          );
        })}
      </View>
      {/* <View style={styles.devider}></View> */}
      <View style={{ maxHeight: "93%" }}>
        <FlatList
        showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.key}
          ListHeaderComponent={renderHeaderComponent}
        />

        {/* <ScrollView showsVerticalScrollIndicator={false}></ScrollView> */}
      </View>
    </View>
  );
};

export default MainTab;

const styles = StyleSheet.create({
  container: {
    width: "90%",
  },
  tablinksWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  linkActive: {
    color: colors.white,
    // marginHorizontal: 20,
  },
  link: {
    color: "#8894B0",
    // marginHorizontal: 20,
  },
  devider: {
    width: "100%",
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
});
