import { View, Text, ScrollView, FlatList, Linking, Image, TouchableOpacity, StyleSheet } from "react-native";

import schools from "../constants/schools";
import { Link } from "expo-router";

export default function Education() {

    const styles = StyleSheet.create({
        box: {
            margin: "2%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: 5,
            borderBottomColor: "black",
            borderBottomWidth: 3
        },
        image: {
            width: "100%",
            height: "100%",
            borderRadius: 18
        },
        titleText: {
            fontWeight: "bold",
            fontSize: 20,
            fontFamily: "Times New Roman"
        },
        typeText: {
            fontSize: 15,
            fontFamily: "Calibri"
        },
        urlButton: {
            borderWidth: 3,
            borderColor: "black",
            padding: 4,
            borderRadius: 12,
            fontStyle: "italic"
        },
        urlText: {
            fontFamily: "Times New Roman",
            fontSize: 20,
            fontStyle: "italic",
            textDecorationLine: 'underline',
            color: "#33ccff"
        }
    });

    function handleClick(url) {
        Linking.openURL(url);
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={schools}
                    renderItem={({ item }) => (
                        <View style={styles.box}>
                            <Text style={styles.titleText}>{item.name}</Text>
                            <View style={{ width: "90%", height: 180 }}>
                                <Image source={{ uri: "" + item.schoolImage }} resizeMode="contain" style={styles.image}
                                    onError={(error) => console.error("Error loading image:", error)}
                                />
                            </View>
                            <Text style={styles.typeText}>{item.type}</Text>
                            <TouchableOpacity onPress={() => { handleClick(item.schoolUrl) }} style={styles.urlButton}>
                                <Text style={styles.urlText}>Go to school web site</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                />
            </View>
        </ScrollView>
    );
}