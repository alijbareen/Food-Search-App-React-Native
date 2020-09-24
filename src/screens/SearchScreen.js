import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: {
        limit: 50,
        term,
        location: "san jose",
      },
    });
    setResults(response.data.businesses);
  };

  return (
    <View>
      <SearchBar term={term} onTermSubmit={searchApi} onTermChange={setTerm} />
      <Text style={styles.textSyle}>
        We have found {results.length} results
      </Text>
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
