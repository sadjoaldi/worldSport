import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const worldSport = [
  { name: "football" },
  { name: "basketball" },
  { name: "tennis" },
  { name: "rugby" },
  { name: "cricket" },
  { name: "baseball" },
  { name: "hockey" },
  { name: "golf" },
  { name: "boxing" },
  { name: "mma" },
];

export default function SportList() {
  return (
    <View style={styles.container}>
      <Text> the sport list</Text>
      <Link href={"/all-competitions"} push asChild>
        <Text
          onPress={() => {
            console.log("Footballs pressed");
          }}
        >
          <FlatList
            data={worldSport}
            renderItem={({ item }) => (
              <Text style={styles.text}>{item.name}</Text>
            )}
            keyExtractor={(item) => item.name}
          />
          <Text>More</Text>
        </Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center" },
  text: {
    fontSize: 20,
    color: "#fff",
    backgroundColor: "#f0f",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    width: 230,
  },
});
