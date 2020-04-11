import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        formName="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink
        text="Don't have an acount? Sign up instead!"
        routeName="Signup"
      />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;
