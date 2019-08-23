import * as React from "react";
import { Image, StyleSheet, FlatList } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  H1,
  Accordion,
} from "native-base";
import Colors from "../constants/Colors";

const dataArray = [
  {
    title: "Registration now open!",
    body:
      "Registrations are now open, for a limited time!. Please check your emails for registration information, in order to not miss out!",
    graphic:
      "https://whixley.org/wp-content/uploads/2017/03/booknow-300x300.jpg",
  },
  {
    title: "Sold out!",
    body:
      "Well, everything's sold out. Sorry for those of you who waited too long, there's always next year. All the best to our participants this year!",
    graphic:
      "https://previews.123rf.com/images/carmenbobo/carmenbobo1406/carmenbobo140600316/29199986-stamp-with-text-sold-out-inside-vector-illustration.jpg",
  },
  {
    title: "Event postponed",
    body:
      "Well, we tried throwing some baskets as a trial run, and 80% of our organising team got arrested. We're postponing the event till the end of the year. Please check back in soon for updates!!",
    graphic:
      "https://images-na.ssl-images-amazon.com/images/I/41Jjp9lXboL._SX425_.jpg",
  },
];

export default function EventsScreen() {
  return (
    <Container style={styles.body}>
      <Content padder />

      <FlatList
        data={dataArray}
        renderItem={({ item }) => (
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.title}>{item.title}</Text>
                <Text>{item.body}</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: item.graphic,
                }}
                style={{ height: 200, width: null, flex: 1 }}
              />
            </CardItem>
          </Card>
        )}
        keyExtractor={(item, index) => item.title}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#cccccc",
  },
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.tintColor,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
  },
  card: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  accordion: {
    marginTop: 10,
  },
});
