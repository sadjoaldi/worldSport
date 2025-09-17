import { trpc } from "@/trpc";
import { useQuery } from "@tanstack/react-query";
import { Image, StyleSheet, Text, View } from "react-native";

export default function AllCompetitions() {
  const countryFootballLeagues = useQuery(
    trpc.football.getCountryLeagues.queryOptions()
  );

  const { data: countryLeagues, isLoading } = countryFootballLeagues;

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Loading...</Text>
      </View>
    );
  }

  if (!countryLeagues) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Competitions Found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <Text style={styles.text}>Loading...</Text>
      ) : (
        <Text style={styles.text}>Loaded Competitions</Text>
      )}

      {countryLeagues.map(({ league, country }) => (
        <View
          key={league.id}
          style={{
            marginBottom: 20,
            alignItems: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Image
            source={{ uri: league.logo }}
            style={{ width: 32, height: 32 }}
          />
          <Text style={styles.text}>{league.name}</Text>
          <Text style={styles.text}>{country.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#222831",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },
});
