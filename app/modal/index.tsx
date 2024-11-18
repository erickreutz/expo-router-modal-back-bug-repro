import { Button, Text, View } from "react-native";
import { Link, useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Modal</Text>
      <Button title="Close" onPress={() => router.back()} />
      <Link href="/modal/inner-modal" asChild>
        <Button title="Open Inner Modal" />
      </Link>
    </View>
  );
}
