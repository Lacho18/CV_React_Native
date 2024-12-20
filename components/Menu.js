import { useState } from "react";
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

import AboutMe from "./About";
import Certificates from "./Certificates";
import Education from "./Education";
import Technologies from "./Technologies";

const styles = StyleSheet.create({
    button: {
        fontSize: 10,
    },
    tab: (activeButton, button) => ({
        fontSize: "2em",
        borderRadius: 10,
        backgroundColor: activeButton === button ? "#80bfff" : "#595959",
        color: activeButton === button ? "#ffffff" : "#000000",
        borderColor: activeButton === button ? "#0099ff" : "#595959",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 5,
        marginLeft: 3,
        fontFamily: "Arial",
        fontWeight: "bold"
    })
})

export default function Menu() {
    const router = useRouter();

    const [activeButton, seActiveButton] = useState("about me");
    const options = ["about me", "certificates", "education", "technologies"];

    function currentMenu() {
        let component;

        switch (activeButton) {
            case "about me": component = <AboutMe />;
                break;
            case "certificates": component = <Certificates />;
                break;
            case "education": component = <Education />;
                break;
            case "technologies": component = <Technologies />;
                break;
            default: break;
        }

        return component;
    }

    let currentMenuComponent = currentMenu();

    return (
        <View>
            <FlatList
                data={options}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => {
                            seActiveButton(item);
                        }}
                        style={styles.tab(activeButton, item)}
                    >
                        <Text>{item}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item}
                horizontal
            />

            {currentMenuComponent}
        </View>
    );
}