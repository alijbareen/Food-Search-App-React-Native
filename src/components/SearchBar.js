import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange }) => {
  return (
    <View style={styles.backgroudStyle}>
      <Feather name="search" style={styles.iconStyle} color="black" />
      <TextInput
        value={term}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroudStyle: {
    backgroundColor: "#F0EEEE",
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
