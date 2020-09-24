import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultsList = ({ title }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
});

export default ResultsList;
