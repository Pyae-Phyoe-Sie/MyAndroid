import { useState, useEffect } from 'react';
import { getBlog } from '../api/apiRequest';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card } from '@rneui/themed';

function DetailScreen({navigation, route}) {

  const [blog, setBlog] = useState(
    {
      "id": 0,
      "title": "",
      "thumbnail": "https://thumbs.dreamstime.com/b/android-robot-thinking-d-rendering-finter-point-head-97584642.jpg",
      "body": [
        {
          "type": "",
          "text": ""
        },
        {
          "type": "",
          "image": "https://thumbs.dreamstime.com/b/android-robot-thinking-d-rendering-finter-point-head-97584642.jpg"
        }
      ]
    }
  );

  useEffect(() => {
    getBlog(route.params.id)
    .then((res) => {
        setBlog(res);
    })
    .catch((e) => {
        console.log(e.message)
    });
  });

  return (
    <ScrollView>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Card>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Divider />
          {blog.thumbnail && blog.thumbnail != "" && <Card.Image
            style={{ padding: 0 }}
            source={{
                uri: blog.thumbnail,
            }}
          />}
          <View style={{ padding: 20 }}>
            {
              blog.body.map((value, index) => {
                if (value.type == "fullText") {
                  return <View key={index}>
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>{value.text}</Text>
                  </View>
                } else
                if (value.type == "fullImage") {
                  return <View key={index}>
                    {value.image && value.image != "" && <Card.Image
                      style={{ padding: 20 }}
                      source={{
                          uri: value.image,
                      }}
                    />}
                  </View>
                } else {
                  return <View key={index}>
                    {value.image && value.image != "" && <Card.Image
                        style={{ padding: 20 }}
                        source={{
                            uri: value.image,
                        }}
                    />}
                    <Text style={{ marginBottom: 10, marginTop: 10 }}>{value.text}</Text>
                  </View>
                }
              })
            }
          </View>
        </Card>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});

export default DetailScreen;