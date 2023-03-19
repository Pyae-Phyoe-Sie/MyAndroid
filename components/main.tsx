import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';

const Main = () => {
    return (
        <View
            style={[
                styles.container,
                {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column',
                },
            ]}>
            <View style={{flex: 3}} />
            <View style={{flex: 3}} />
            <View style={{flex: 1, backgroundColor: 'green'}}>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default Main;