import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import { View } from "react-native";

import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";

const TrackerForm = () => {
  const { state, startRecording, stopRecording, changeName } = useContext(
    LocationContext
  );
  const { name, recording } = state;
  return (
    <View>
      <Spacer>
        <Input
          placeholder="Enter Name"
          value={name}
          onChangeText={changeName}
        />
      </Spacer>
      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>
    </View>
  );
};

export default TrackerForm;
