import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from "react-native";
import { useState } from "react";

import { useRouter } from "expo-router";

import styles from "./Welcome.style";
import { SIZES } from "../constants";

export default function Welcome() {
    const router = useRouter();
    const [activeJobType, setActiveJobType] = useState('Full-time');
    const jobTypes = ["Full-time", "Part-time", "Contractor"];

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.userName}>Welcome component</Text>
                <Text style={styles.welcomeMessage}>Find your perfect job</Text>
            </View>
            <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        value=""
                        onChange={() => { }}
                        placeholder="What are you looking for?"
                    />
                </View>

                <TouchableOpacity style={styles.searchBtn} onPress={() => { }}>
                    <Image
                        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png' }}
                        resizeMode="contain"
                        style={styles.searchBtnImage}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.tabsContainer}>
                <FlatList
                    data={jobTypes}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.tab(activeJobType, item)}
                            onPress={() => {
                                setActiveJobType(item);
                                router.push(`/search/${item}`);
                            }}
                        >
                            <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item}
                    contentContainerStyle={{ columnGap: SIZES.small }}
                    horizontal
                />
            </View>
        </View>
    );
}