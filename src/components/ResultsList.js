import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetail from "./ResultsDetail";

const ResultsList = ({ title, results, navigation }) => {
  return (
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        data={results}
        keyExtractor={(result) => {
          result.id;
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("ResultsShow", { id: item.id })
              }
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(ResultsList);
