import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, NavigationEvents } from "react-navigation";
import { Text, ListItem } from "react-native-elements";

import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");
  const track = state.find((t) => t._id === _id);
  console.log(track);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h2> {track.name} </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackDetailScreen;
