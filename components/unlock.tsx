import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import type {PropsWithChildren} from 'react';
import Swiper from 'react-native-swiper'
import { MaterialCommunityIcon } from './Icon';
 
type SectionProps = PropsWithChildren<{
    setUnlock: Function;
    setGoPage: Function;
  }>;
  
function Unlock({setUnlock, setGoPage}: SectionProps): JSX.Element {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (index === 1) {
            setUnlock(true);
            setGoPage("welcome");
        }
    }, [index]);

    // const image = {uri: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arrow_top.png?20150707132744"};
    const image = {uri: './assets/images/sunny.jpg'};

    return (
        <Swiper style={styles.wrapper} horizontal={false} loop={false} onIndexChanged={(index) => setIndex(index)}
                showsPagination={false}>
            <View style={styles.slide1}>
                {/* <ImageBackground source={image} style={{width: "auto", height: 250}}> */}
                    <Text style={styles.text}>
                        Unlock Your screen
                    </Text>
                    <MaterialCommunityIcon name="chevron-triple-up" size={"xxl"} color="gray" />
                {/* </ImageBackground> */}
            </View>
            <View style={styles.slide2}>
            </View>
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
      paddingBottom: 50
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
      paddingBottom: 40,
    }
})

export default Unlock;
