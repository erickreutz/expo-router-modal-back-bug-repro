import { Stack } from "expo-router";

export default function ModalLayout() {
  return (
    <Stack>
      <Stack.Screen name="inner-modal" options={{ presentation: "modal" }} />
    </Stack>
  );
}
