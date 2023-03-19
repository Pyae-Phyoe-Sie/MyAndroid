import React, { useEffect, useState } from 'react';
import {StyleSheet, View} from 'react-native';

const Month = () => {

    return (
        <View
          style={[
            styles.container,
            {
              // Try setting `flexDirection` to `"row"`.
              flexDirection: 'column',
            },
          ]}>
          <View style={{flex: 1, backgroundColor: 'red'}} />
          <View style={{flex: 1, backgroundColor: 'darkorange'}} />
          <View style={{flex: 1, backgroundColor: 'green'}} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
});

export default Month;