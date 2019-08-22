import * as React from "react";
import { StyleSheet } from "react-native";
import { Container, Content, H1 } from "native-base";

export default function HomeScreen() {
  return (
    <Container>
      <Content padder>
        <H1 style={styles.headerText}>Basket Throwing Tournament 2019</H1>
      </Content>
    </Container>
  );
}

HomeScreen.navigationOptions = {
  title: "Home",
};

const styles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    textAlign: "center",
  },
});
