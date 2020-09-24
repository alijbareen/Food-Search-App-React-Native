import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={console.log("term submitted")}
        onTermChange={(newTerm) => {
          setTerm(newTerm);
        }}
      />
      <Text style={styles.textSyle}>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textSyle: {
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default SearchScreen;
