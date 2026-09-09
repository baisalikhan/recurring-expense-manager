import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SignUp = () => {
    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text>Sign-up</Text>
            <Link href="/sign-in">Sign in</Link>
        </View>
    );
};

export default SignUp;