import React from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native-paper";

const classes = StyleSheet.create({
  login_welcome: {
    color: "#F3673D",
    alignSelf: "flex-start",
    fontSize: 20,
  },
});

export default function LoginComponent() {
  return (
    <View>
      <View>
        <Image source={require("../assets/full-logo.png")} />
        <Text style={classes.login_welcome}>Welcome Coder!!!</Text>
      </View>
      <View>
        <View>
          <TextInput label="Email ID" mode="outlined" />
          <TextInput label="Password" mode="outlined" />
          <TextInput label="TimeZone" mode="outlined" />
        </View>
      </View>
      <View>
        <Button title="Login"></Button>
        <Button title="SignUp"></Button>
        <Button title="Register"></Button>
      </View>
      <Text>Go Back to LogIn</Text>
    </View>
  );
}
