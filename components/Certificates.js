import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";

export default function Certificates() {
    const certificates = ["SoftUniProgramingBasic"];

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ flex: 1 }}>
                <FlatList
                    data={certificates}
                    renderItem={({ item }) => {
                        let imageSource;
                        try {
                            imageSource = require('../assets/images/SoftUniProgramingBasic.jpeg');
                        } catch (error) {
                            console.error(error);
                            imageSource = null;
                        }

                        return (
                            <Image source={imageSource ? imageSource : require('../assets/images/icon.png')} style={{
                                width: "80%", height: 500,
                                alignItems: "center", display: "flex",
                                justifyContent: "center", margin: 40
                            }} />
                        );
                    }}
                    keyExtractor={item => item}
                />
            </View>
        </ScrollView>
    );
}