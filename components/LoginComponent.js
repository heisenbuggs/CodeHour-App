import { Icon } from "native-base";
import React, { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native-paper";

const classes = StyleSheet.create({
  login_welcome: {
    color: "#F3673D",
    alignSelf: "flex-start",
    fontSize: 20,
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
    color: "#f0f8ff",
  },
  login_goback: {
    color: "#F3673D",
    marginTop: 20,
    textAlign: "center",
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
    color: "black",
  }
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
        <Image source={require("../assets/full-logo.png")} />
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
            keyboardType="email-address"
          />
          <TextInput
            label="Password"
            mode="outlined"
            value={values.password}
            onChangeText={handleChange("password")}
            textContentType="password"
            secureTextEntry={!values.showPassword}
          />
          <Icon
            name={!values.showPassword ? "eye-off" : "eye"}
            onPress={handleClickShowPassword}
          />
          {signup && <TextInput label="TimeZone" mode="outlined" />}
        </View>
      </View>
      <View>
        {!signup && <TouchableOpacity style={classes.login_button}>
          <Text style={classes.button_text}>Log In</Text>
        </TouchableOpacity>}
        {!signup && <Text style={classes.login_or}>--------OR--------</Text>}
        {!signup && <TouchableOpacity
          style={classes.signup_button}
          onPress={() => setSignup(true)}
        >
          <Text style={classes.button_text}>Sign Up</Text>
        </TouchableOpacity>}
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
