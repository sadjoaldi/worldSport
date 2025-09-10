import axios from "axios";
import Constants from "expo-constants";
import { useEffect, useState } from "react";

import { Text, View } from "react-native";

const apiUrl = Constants.expoConfig?.extra?.API_URL;

export default function Home() {
  const [message, setMessage] = useState<String>("");

  useEffect(() => {
    axios.get(`${apiUrl}/`).then((response) => {
      setMessage(response.data);
    });
  }, []);

  return (
    <View>
      <Text> you see the message {message}</Text>
    </View>
  );
}
