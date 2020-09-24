import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ResultsList from "../components/ResultsList";
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

      <ResultsList title="Cost Effective" />
      <ResultsList title="Bit Pricier" />
      <ResultsList title="Big Spender" />
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
