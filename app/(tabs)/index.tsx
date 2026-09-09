import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-xl font-bold text-green-500">
        Welcome to Nativewind!
      </Text>
      <Link href="/onboarding" className="mt-4 rounded bg-primary p-4 text-white">
        Go to onboarding
      </Link>
      <Link href="/(auth)/sign-in" className="mt-4 rounded bg-primary p-4 text-white">
        Go to sign in
      </Link>

      <Link href="/subscriptions/spotify" asChild >
        <Text className="mt-4 rounded bg-primary p-4 text-white">Spotify Subscription</Text>
      </Link>

      <Link href={{ pathname: '/subscriptions/[id]', params: { id: 'claude' } }} asChild >
        <Text className="mt-4 rounded bg-primary p-4 text-white">Claude Max Subscription</Text>
      </Link>

      <Link href={{ pathname: '/subscriptions/[id]', params: { id: 'slack-pro' } }} asChild >
        <Text className="mt-4 rounded bg-primary p-4 text-white">Slack Pro Subscription</Text>
      </Link>
    </SafeAreaView>
  );
}
