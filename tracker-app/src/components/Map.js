import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

const Map = () => {
  return <MapView style={styles.map}>{/* <Polyline /> */}</MapView>;
};

const styles = StyleSheet.create({
  map: {
    height: 400,
  },
});

export default Map;
