import { View, Text, SafeAreaView, FlatList, Image, StyleSheet, ScrollView } from "react-native";
import technologies from "../constants/learnedTechnologies";

const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 10
    },
    text: {
        fontWeight: "bold",
        fontFamily: "Calibri"
    },
    box: {
        margin: "2%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 5,
        borderBottomColor: "black",
        borderBottomWidth: 3
    }
})

export default function Technologies() {

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, marginBottom: 10 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={technologies}
                    renderItem={({ item }) => (
                        <View style={styles.box}>
                            <Image source={{ uri: "" + item.imgUrl }} resizeMode="contain" style={styles.image} />
                            <Text style={styles.text}>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={item => item.name}
                />
            </View>
        </ScrollView>
    );
}