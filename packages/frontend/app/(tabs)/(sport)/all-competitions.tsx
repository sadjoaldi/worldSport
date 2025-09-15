import { StyleSheet, Text, View } from "react-native";

export default function AllCompetitions() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All Competitions</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
