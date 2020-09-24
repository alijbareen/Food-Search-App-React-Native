import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => {
          result.id;
        }}
        renderItem={({ item }) => {
          return <ResultsDetail result={item} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.listStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 15,
    marginBottom: 10,
  },
  listStyle: {},
});

export default ResultsList;
