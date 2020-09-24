import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const ResultsShowScreen = ({ navigation }) => {
  navigation.getParam("id");
  return (
    <View style={styles.view}>
      <Text>Results Show</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {},
});

export default ResultsShowScreen;
