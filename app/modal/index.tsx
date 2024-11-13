import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function ModalScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Modal</Text>
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}
