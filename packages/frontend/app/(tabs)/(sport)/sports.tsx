import { trpc } from "@/trpc";
import { useQuery } from "@tanstack/react-query";
import { Link } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Sports() {
  const testData = useQuery(trpc.test.hello.queryOptions());

  // à mettre dans un autre composant plutard
  const worldSport = [
    { id: 1, name: "Football", route: "/all-competitions" },
    { id: 2, name: "Basketball", route: "/" },
    { id: 3, name: "Formula 1", route: "/" },
    { id: 4, name: "Tennis", route: "/" },
    { id: 5, name: "Rugby", route: "/" },
    { id: 6, name: "Hockey", route: "/" },
    { id: 7, name: "Baseball", route: "/" },
    { id: 8, name: "Boxing", route: "/" },
    { id: 9, name: "MMA", route: "/" },
    { id: 10, name: "Golf", route: "/" },
  ];

  return (
    <View>
      <FlatList
        data={worldSport}
        renderItem={({ item }) => (
          <Link href={item.route} asChild>
            <Text
              style={styles.text}
              onPress={() => {
                console.log(`${item.name} pressed`);
              }}
            >
              {item.name}
            </Text>
          </Link>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  // container: { flex: 1, alignItems: "center", backgroundColor: "#222831" },
  text: {
    fontSize: 24,
    color: "#fff",
    backgroundColor: "#393e46",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    width: 230,
  },
});
