import { Link, useLocalSearchParams } from 'expo-router';
import { styled } from "nativewind";
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const SubscriptionsDetails = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    return (
        <SafeAreaView>
            <Text>Subscriptions Details {id}</Text>
            <Link href="../">Go to parent</Link>
        </SafeAreaView>
    );
};

export default SubscriptionsDetails;

