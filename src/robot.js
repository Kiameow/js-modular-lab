const dijkstra = require("dijkstrajs");
const roadGraph = require("./road.js");

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

function goalOrientedRobot({ place, parcels }, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.place != place) {
      route = dijkstra.find_path(roadGraph, place, parcel.place);
    } else {
      route = dijkstra.find_path(roadGraph, place, parcel.address);
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}

exports.randomRobot = randomRobot;
exports.goalOrientedRobot = goalOrientedRobot;