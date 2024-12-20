import { useState } from "react";
import { View, Text, ScrollView, SafeAreaView, Image, StyleSheet } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, images, SIZES } from '../constants';

import Menu from "../components/Menu";


const Home = () => {
    const router = useRouter();

    const styles = StyleSheet.create({
        image: {
            width: 40,
            height: 70,
            borderRadius: 70,
            margin: 5,
            padding: 1,
        }
    })

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#cccccc", height: 80 }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#999999" },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <Image source={require('../assets/images/CVImage1.jpg')} style={[styles.image, , { width: 100, resizeMode: 'contain' }]} />
                    ),
                    headerTitle: "Lachezar Genov"
                }}
            />

            <Menu />
        </SafeAreaView>
    );
}

export default Home;