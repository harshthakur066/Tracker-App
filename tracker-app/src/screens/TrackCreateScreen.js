// import "../_mockLocation";
import React, { useContext, useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";

import useLocation from "../hooks/useLocation";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import TrackerForm from "../components/TrackForm";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    addLocation,
    state: { recording },
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const [err] = useLocation(isFocused || recording, callback);
  // console.log(isFocused);
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "always" }}>
      <Text h2>Create A Track</Text>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
      <TrackerForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default withNavigationFocus(TrackCreateScreen);
