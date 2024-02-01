import { goalOrientedRobot } from "./src/robot.js";
import VillageState from "./src/state.js";
import { runRobotAnimation } from "./src/animation.js";

runRobotAnimation(VillageState.random(), goalOrientedRobot, []);