import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function ModalScreen() {
  const router = useRouter();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Modal</Text>
      <Button title="Dismiss me" onPress={() => router.dismiss()} />
    </View>
  );
}
