const runRobotAnimation = require("./src/animation.js");
const goalOrientedRobot = require("./src/robot.js").goalOrientedRobot;
const VillageState = require( "./src/state.js").VillageState;
runRobotAnimation(VillageState.random(), goalOrientedRobot, []);
