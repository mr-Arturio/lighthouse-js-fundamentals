let start = 60; // we can use just "n" - n=60;

while (start >= 0) { // same here, just "n" is fine - n>=0
  if (start === 50) { //n ===50
    console.log("Orbiter transfers from ground to internal power."); //  writes text between 51  and 49
  } else if (start === 31) { // 32 text 30
    console.log("Ground launch sequencer is go for auto sequence start");
  }
  else if (start === 16) {
    console.log("Activate launch pad sound suppression system");
  }
  else if (start === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }
  else if (start === 6) {
    console.log("Main engine start");
  }
  else if (start === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else {
    console.log("T-" + start + " seconds");
  }
  start--; // n--;
}