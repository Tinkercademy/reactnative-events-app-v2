import * as React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Content,
  Card,
  CardItem,
  Body,
  Text,
  H1,
} from "native-base";
import Colors from "../constants/Colors";

export default function HomeScreen() {
  return (
    <Container>
      <Content padder>
        <H1 style={styles.headerText}>Basket Throwing Tournament 2019</H1>
        <Card style={styles.card}>
          <CardItem>
            <Body>
              <Text style={styles.title}>Welcome</Text>
              <Text>
                Thanks for downloading our app! Here, you'll find all kinds of
                information about our upcoming event. It'll be great!
              </Text>
            </Body>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  "https://www.containerstore.com/catalogimages/339352/10074096-small-seagrass-belly-basket.jpg",
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  title: "Home",
  headerStyle: {
    backgroundColor: Colors.tintColor,
  },
  headerTintColor: "white",
};

const styles = StyleSheet.create({
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
});
