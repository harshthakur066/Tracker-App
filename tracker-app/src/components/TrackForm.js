import React, { useContext } from "react";
import { Button, Input } from "react-native-elements";
import { View } from "react-native";

import { Context as LocationContext } from "../context/LocationContext";
import Spacer from "./Spacer";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackerForm = () => {
  const { state, startRecording, stopRecording, changeName } = useContext(
    LocationContext
  );
  const { name, recording, locations } = state;
  //   console.log(locations.length);
  const [saveTrack] = useSaveTrack();
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
      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackerForm;
