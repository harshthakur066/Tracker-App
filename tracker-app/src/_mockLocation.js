import * as Location from "expo-location";

const tenMetersWithDeegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 28.7041 + increment * tenMetersWithDeegrees,
      latitude: 77.1025 + increment * tenMetersWithDeegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locaionChanged", {
    watchId: Location._getCurrentWatchId(),
    Location: getLocation(counter),
  });
  counter++;
}, 1000);
