import { styled } from "nativewind";
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const Insight = () => {
    return (
        <SafeAreaView>
            <Text>Insight</Text>
        </SafeAreaView>
    );
};

export default Insight;

