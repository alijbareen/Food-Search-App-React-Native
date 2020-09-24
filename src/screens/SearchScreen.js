import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={() => searchApi(term)}
        onTermChange={setTerm}
      />
      <Text style={styles.textSyle}>
        We have found {results.length} results
      </Text>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
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
