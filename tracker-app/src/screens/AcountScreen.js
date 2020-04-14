import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { Text } from "react-native-elements";

import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }} style={styles.Button}>
      <Spacer>
        <Text h2>Account</Text>
      </Spacer>
      <Spacer>
        <Button title="Sign Out" onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Button: {
    marginTop: 60,
  },
});

export default AccountScreen;
