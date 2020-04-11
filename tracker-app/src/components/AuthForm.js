import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ formName, errorMessage, onSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View>
      <Spacer>
        <Text h3> {`${formName} for Tracker`} </Text>
      </Spacer>
      <Spacer>
        <Input
          label="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errorMessage ? (
        <Text style={styles.errorMessage}>
          {""}
          {errorMessage}{" "}
        </Text>
      ) : null}
      <Spacer>
        <Button
          title={formName}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
});

export default AuthForm;
