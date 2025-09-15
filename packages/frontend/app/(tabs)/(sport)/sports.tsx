import { Link } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Sports() {
  return (
    <View>
      <Text>Sports Screen</Text>
      <Link href={"/all-competitions"} push asChild>
        <Button
          title="Footballs"
          onPress={() => {
            console.log("Footballs pressed");
          }}
        />
      </Link>
    </View>
  );
}
