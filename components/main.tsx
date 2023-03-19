import React, { PropsWithChildren, useEffect, useState } from 'react';
import {StyleSheet, View, Text} from 'react-native';

type SectionProps = PropsWithChildren<{
    setGoPage: Function;
}>;
  
function Main({setGoPage}: SectionProps): JSX.Element {
    return (
        <View
            style={[
                styles.container,
                {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column',
                backgroundColor: '#efefef'
                },
            ]}>
            <View style={{flex: 10}} />
            <View style={{flex: 1,flexDirection: 'row'}}>
                <View style={styles.viewBoxMiddleGray} />
                <View style={styles.viewBoxMiddleWhite}>
                    <Text style={styles.text} onPress={() => setGoPage("month")}>Months</Text>
                </View>
                <View style={styles.viewBoxMiddleGray} />
                <View style={styles.viewBoxMiddleWhite} />
                <View style={styles.viewBoxMiddleGray} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
        textAlign: "center",
        fontWeight: "800"
    },
    viewBoxMiddleGray: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "gray",
        flex: 1,
    },
    viewBoxMiddleWhite: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        flex: 1,
    }
});

export default Main;