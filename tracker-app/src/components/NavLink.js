import React from "react";
import { Text, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { TouchableOpacity } from "react-native-gesture-handler";
import Spacer from "./Spacer";

const NavLink = ({ navigation, text, routeName }) => {
  return (
    <Spacer>
      <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  );
};

const styles = StyleSheet.create({
  text: { color: "blue", textAlign: "center" },
});

export default withNavigation(NavLink);
