import React, { PropsWithChildren, useEffect, useState } from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
// import { Icon } from '@rneui/themed';

import { FontAwesomeIcon, MaterialCommunityIcon, SimpleLineIcon } from './Icon';

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
                <View style={styles.viewBoxMiddleWhite}>
                    <Pressable><FontAwesomeIcon name="home" size={"l"} color="gray" /></Pressable>
                </View>
                <View style={styles.viewBoxMiddleWhite}>
                    <Pressable onPress={() => setGoPage("month")}><SimpleLineIcon name="grid" size={"l"} color="gray" /></Pressable>
                </View>
                <View style={styles.viewBoxMiddleWhite}>
                    <Pressable><MaterialCommunityIcon name="plus-circle" size={"xl"} color="gray" /></Pressable>
                </View>
                <View style={styles.viewBoxMiddleWhite}>
                    <Pressable><MaterialCommunityIcon name="chart-box-outline" size={"l"} color="gray" /></Pressable>
                </View>
                <View style={styles.viewBoxMiddleWhite}>
                    
                </View>
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