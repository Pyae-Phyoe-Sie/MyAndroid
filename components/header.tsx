import React, { useEffect, useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import getWeather from '../api/apiRequest';

function Header(): JSX.Element {
    const [isDarkMode, setDarkMode] = useState(false);

    const [city, setCity] = useState('Singapore');
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);

    const [weather, setWeather] = useState({
        location: {
            name: ""
        },
        current: {
            condition: {
                text: ""
            }
        }
    });

    const [image, setImage] = useState({uri: "https://w0.peakpx.com/wallpaper/426/222/HD-wallpaper-note-7-abstract-default-feather-galaxy-samsung-stock-thumbnail.jpg"});

    const fetchData = () => {
        setLoading(true);
        getWeather(city, setWeather);

        setTimeout(() => {
            setLoading(false);
            setStatus(true);
        }, 2000)
    }

    useEffect(() => {
        if (loading) setImage({uri: "https://w0.peakpx.com/wallpaper/426/222/HD-wallpaper-note-7-abstract-default-feather-galaxy-samsung-stock-thumbnail.jpg"})
    }, [loading])

    useEffect(() => {
        if (((weather.current.condition.text).toLowerCase()).includes("sunny")) {
            setDarkMode(false);
            setImage({uri: 'https://w0.peakpx.com/wallpaper/385/67/HD-wallpaper-road-8k-galaxy-land-nature-roads-scenery-summer-sunny.jpg'})
        } else
        if (((weather.current.condition.text).toLowerCase()).includes("rain")) {
            setDarkMode(false);
            setImage({uri: 'https://mfiles.alphacoders.com/157/157370.jpg'})
        } else
        if (((weather.current.condition.text).toLowerCase()).includes("cloudy")) {
            setDarkMode(true);
            setImage({uri: 'https://w0.peakpx.com/wallpaper/477/767/HD-wallpaper-cloudy-sky-clouds-field-grass-green.jpg'})
        }
    }, [weather])

    return (
        <SafeAreaView style={styles.bottom}>
            <ImageBackground source={image} resizeMode="cover" style={{flex: 1, height: '100%'}}>
                <View style={styles.sectionContainer}>
                    <Text
                        style={[
                        styles.sectionTitle,
                        {
                            color: isDarkMode ? Colors.white : Colors.black,
                            borderColor: isDarkMode ? Colors.white : Colors.black,
                        },
                        ]}>
                        My Weather App
                    </Text>

                    <TextInput
                        style={[
                            styles.input,
                            {
                                color: isDarkMode ? Colors.white : Colors.black,
                                borderColor: isDarkMode ? Colors.white : Colors.black,
                            },
                            ]} 
                        onChangeText={setCity}
                        value={city}
                    />

                    <Button
                        title="Get Weather"
                        onPress={fetchData}
                    />

                    {loading && <Text
                        style={[
                        styles.text,
                        {
                            color: isDarkMode ? Colors.white : Colors.black,
                            borderColor: isDarkMode ? Colors.white : Colors.black,
                        },
                        ]}>
                        Data is fetching, please wait a moment!
                    </Text>}

                    {!loading && status && <Text
                        style={[
                        styles.text,
                        {
                            color: isDarkMode ? Colors.white : Colors.black,
                            borderColor: isDarkMode ? Colors.white : Colors.black,
                        },
                        ]}>
                        {weather.location.name} is {weather.current.condition.text}
                    </Text>}
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      borderColor: '#111',
      borderWidth: 2,
      textAlign: 'center',
      padding: 5,
      borderRadius: 8
    },
    text: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 40
    },
    bottom: {
        top: 0,
        bottom: 0,
        height: 900
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        textAlign: 'center',
    },
});

export default Header;