import { Icon } from "native-base";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Dropdown } from "react-native-material-dropdown-v2";
import { TextInput } from "react-native-paper";
import timezoneAll from "./timezonesAll";

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
  register_button: {
    marginTop: 40,
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
  dropdown: {
    width: 390,
    marginTop: 80,
  },
  globe: {
    marginTop: 5,
    justifyContent: "center",
    alignSelf: "flex-end",
    marginTop: -60,
    marginRight: 10,
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
            mode="flat"
            style={classes.login_input}
            value={values.email}
            onChangeText={handleChange("email")}
            selectionColor="#F0F8FF"
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
            mode="flat"
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
            <Dropdown
              label="Time"
              data={timezoneAll}
              value={values.timezone}
              onChangeText={handleChange("timezone")}
              theme={{ colors: { primary: "#F3673D", placeholder: "#2F2B28" } }}
              pickerStyle={classes.dropdown}
            />
          )}
          {signup && <Icon name="globe" color="#000" style={classes.globe} />}
        </View>
      </View>
      <View>
        {!signup && (
          <TouchableOpacity
            style={classes.login_button}
            onPress={() => console.log(JSON.stringify(values))}
          >
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
          <TouchableOpacity
            style={classes.register_button}
            onPress={() => console.log(JSON.stringify(values))}
          >
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
