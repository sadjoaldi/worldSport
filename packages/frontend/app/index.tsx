import { trpc } from "@/trpc";
import { useQuery } from "@tanstack/react-query";
import Constants from "expo-constants";

import { Text, View } from "react-native";

const apiUrl = Constants.expoConfig?.extra?.API_URL;

export default function Home() {
  const testTrpc = useQuery(trpc.test.hello.queryOptions());

  if (testTrpc.isLoading) {
    return <Text>Loading...</Text>;
  }

  if (testTrpc.error) {
    return <Text>Error: {testTrpc.error.message}</Text>;
  }

  return (
    <View>
      <Text> now {testTrpc.data?.message}</Text>
    </View>
  );
}
