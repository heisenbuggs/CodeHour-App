import { Icon } from "native-base";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { DefaultTheme, TextInput } from "react-native-paper";

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    myOwnColor: "#000",
  },
};

const classes = StyleSheet.create({
  login_logo: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  login_welcome: {
    color: "#F3673D",
    alignSelf: "flex-start",
    fontSize: 30,
    marginLeft: -20,
    fontWeight: "bold",
    marginBottom: 30,
    marginTop: 30,
  },
  login_button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#F3673D",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 13,
  },
  button_text: {
    paddingTop: 15,
    paddingBottom: 15,
    color: "#F0F8FF",
    fontWeight: "bold",
    fontSize: 18,
  },
  login_goback: {
    color: "#F3673D",
    marginTop: 20,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  signup_button: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: "#2F2B28",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 13,
  },
  login_or: {
    color: "darkgray",
    textAlign: "center",
  },
  login_input: {
    width: 370,
    marginBottom: 15,
    backgroundColor: "white",
  },
});

export default function LoginComponent() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    timezone: "",
    gender: "",
    showPassword: false,
  });

  const [signup, setSignup] = useState(false);

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <View>
      <View>
        <Image
          source={require("../assets/full-logo.png")}
          style={classes.login_logo}
        />
        <Text style={classes.login_welcome}>Welcome Coder!!!</Text>
      </View>
      <View>
        <View>
          <TextInput
            label="Email ID"
            mode="outlined"
            style={classes.login_input}
            // onFocus={() => inputFocus}
            value={values.email}
            onChangeText={handleChange("email")}
            selectionColor="#F0F8FF"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            theme={{ colors: { primary: "#F3673D", placeholder: "#2F2B28" } }}
            right={
              <TextInput.Icon
                name={() => <Icon name="person" color="black" />}
              />
            }
          />
          <TextInput
            label="Password"
            mode="outlined"
            style={classes.login_input}
            value={values.password}
            onChangeText={handleChange("password")}
            textContentType="password"
            selectionColor="#F0F8FF"
            secureTextEntry={!values.showPassword}
            underlineColorAndroid="transparent"
            theme={{ colors: { primary: "#F3673D", placeholder: "#2F2B28" } }}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={!values.showPassword ? "eye" : "eye-off"}
                    color="black"
                  />
                )}
                onPress={handleClickShowPassword}
              />
            }
          />
          {signup && (
            <TextInput
              label="TimeZone"
              mode="outlined"
              style={classes.login_input}
              value={values.timezone}
              selectionColor="#F0F8FF"
              onChangeText={handleChange("timezone")}
              underlineColorAndroid="transparent"
              theme={{ colors: { primary: "#F3673D", placeholder: "#2F2B28" } }}
              right={
                <TextInput.Icon
                  name={() => <Icon name="globe" color="black" />}
                />
              }
            />
          )}
        </View>
      </View>
      <View>
        {!signup && (
          <TouchableOpacity style={classes.login_button}>
            <Text style={classes.button_text}>Log In</Text>
          </TouchableOpacity>
        )}
        {!signup && <Text style={classes.login_or}>--------OR--------</Text>}
        {!signup && (
          <TouchableOpacity
            style={classes.signup_button}
            onPress={() => setSignup(true)}
          >
            <Text style={classes.button_text}>Sign Up</Text>
          </TouchableOpacity>
        )}
        {signup && (
          <TouchableOpacity style={classes.signup_button}>
            <Text style={classes.button_text}>Register</Text>
          </TouchableOpacity>
        )}
      </View>
      {signup && (
        <Text style={classes.login_goback} onPress={() => setSignup(false)}>
          Go Back to LogIn
        </Text>
      )}
    </View>
  );
}
