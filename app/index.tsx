import { Button, Text, View } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();
  return (
    <View>
      <Text>Hello</Text>
      <Button title="Open" onPress={() => router.push('/modal')} />
    </View>
  );
}
