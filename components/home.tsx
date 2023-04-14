import { getBlogs } from '../api/apiRequest';
import { useEffect, useState } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

function HomeScreen({navigation}) {

    const [blogs, setBlogs] = useState(
        [
            {
                "id": 0,
                "title": "",
                "thumbnail": "",
                "body": [
                    {
                        "type": "",
                        "text": ""
                    }
                ]
            }
        ]
    );

    useEffect(() => {
        getBlogs()
        .then((res) => {
            setBlogs(res);
        })
        .catch((e) => {
            console.log(e.message)
        });
    });

    const goDetail = (id = 0) => {
        navigation.navigate('Detail', {id: id})
    }

    return (
    //   <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //     <Text>Home Screen</Text>
    //     <Button
    //         title="Go to Jane's profile"
    //         onPress={() =>
    //             navigation.navigate('Detail')
    //         }
    //     />
    //   </View>
        <>
            <ScrollView>
                <View style={styles.container}>
                    {
                        blogs.map((value, index) => (
                            <Card key={index}>
                                {value.thumbnail && value.thumbnail != "" && <Card.Image
                                    style={{ padding: 0, marginBottom: 15 }}
                                    source={{
                                        uri: value.thumbnail,
                                    }}
                                />}
                                {/* <Card.Divider /> */}
                                <Card.Title>{value.title}</Card.Title>
                                {/* <Text style={{ marginBottom: 10 }}>
                                    The idea with React Native Elements is more about component
                                    structure than actual design.
                                </Text> */}
                                <Button
                                    title="Read"
                                    onPress={() => goDetail(value.id)}
                                />
                            </Card>
                        ))
                    }
                </View>
            </ScrollView>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    fonts: {
      marginBottom: 8,
    },
    user: {
      flexDirection: 'row',
      marginBottom: 6,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    name: {
      fontSize: 16,
      marginTop: 5,
    },
});

export default HomeScreen;