import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SignIn = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Sign-in</Text>
            <Link href="/(auth)/sign-up">Sign up</Link>
        </View>
    );
};

export default SignIn;

