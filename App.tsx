/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Welcome from './components/welcome';
import Unlock from './components/unlock';
import Main from './components/main';
import Month from './components/months';

import { SafeAreaProvider } from 'react-native-safe-area-context';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = true; //useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = true; //useColorScheme() === 'dark';

  const [unlock, setUnlock] = useState(false);
  const [enter, setEnter] = useState(false);
  const [goPage, setGoPage] = useState("");
  
  console.log("unlock", unlock)

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={{height: '100%'}} >
            {/* <Header /> */}
            {/* <Body /> */}
            {/* {(!unlock)
              ? 
                <Unlock setUnlock={setUnlock}/>
              : 
                (enter && goPage === "")
                  ?
                    <Main setGoPage={setGoPage}/>
                  :
                  <Welcome setEnter={setEnter}/>
            } */}

            {!unlock && <Unlock setUnlock={setUnlock}/>}
            {unlock && enter && goPage === "" && <Main setGoPage={setGoPage}/>}
            {unlock && !enter && goPage === "" && <Welcome setEnter={setEnter}/>}
            {goPage === "month" && <Month />}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
