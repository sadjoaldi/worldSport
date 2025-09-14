import { Button, Text, View } from "react-native";

export default function Sports() {
  return (
    <View>
      <Text>Sports Screen</Text>
      <Button
        title="Footballs"
        onPress={() => {
          console.log("Footballs pressed");
        }}
      />
    </View>
  );
}
