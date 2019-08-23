import * as React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, Text, Button } from "native-base";
import Colors from "../constants/Colors";

function goToHomeScreen(props) {
  props.navigation.navigate("Home");
}

export default function ContactScreen(props) {
  return (
    <Container style={styles.body}>
      <Content padder>
        <Button
          onPress={() => {
            goToHomeScreen(props);
          }}
        >
          <Text>Go home</Text>
        </Button>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#cccccc",
  },
});
