import React from "react";  
import { StyleSheet, View, Text } from "react-native";

const SettigsPage = () => {

    return (

        <View style={styles.container}>
            <Text>Settigs Page</Text>
        </View>

    );


}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default SettigsPage;