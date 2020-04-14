import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Text, ListItem } from "react-native-elements";
import { SafeAreaView, NavigationEvents } from "react-navigation";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

import { Context as TrackContext } from "../context/TrackContext";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  // console.log(state);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <NavigationEvents onWillFocus={fetchTracks} />
      <Text h2>Track List</Text>
      <FlatList
        style={{ marginTop: 20, fontSize: 26 }}
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <ListItem chevron title={item.name} />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

TrackListScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({});

export default TrackListScreen;
