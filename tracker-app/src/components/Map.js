import React, { useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { Text } from "react-native-elements";
import MapView, { Polyline } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const { state } = useContext(LocationContext);
  const { currentLocation, locations } = state;
  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  // console.log(locations.length);

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      // followUserLocation={true}
      showsUserLocation={true}
      // ref={(ref) => (this.mapView = ref)}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      {/* <Circle
        center={currentLocation.coords}
        radius={24}
        fillColor="rgb(158,158,255)"
      /> */}
      <Polyline coordinates={locations.map((loc) => loc.coords)} />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 350,
  },
});

export default Map;
