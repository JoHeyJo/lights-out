

/** returns boolean based on true probability */
function weightedOnOff(probabilityOn){
  return Math.random() < probabilityOn
}


export { weightedOnOff }