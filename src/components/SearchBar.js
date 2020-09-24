import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
  return (
    <View style={styles.backgroud}>
      <Feather name="search" size={30} color="black" />
      <Text>Search Bar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroud: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});

export default SearchBar;
