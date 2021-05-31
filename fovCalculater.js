// set the value of d to get the FOV at this distance
// the unit is meter which is the same with the unit in Unity
let h_angle = 40;
let v_angle = 30;

let genResult = function () {
  
  let d = document.getElementById("distance").value;
  document.getElementById("r_length").textContent = calFOV(h_angle, d);
  document.getElementById("r_height").textContent = calFOV(v_angle, d);

  console.log("r_length: " + calFOV(h_angle, d) + "m ," + "r_height: " + calFOV(v_angle, d) + "m");
  console.log(d);
}

document.getElementById("add_distance").addEventListener('click', genResult);

function calFOV (angle, d) {
  return (Math.tan (angle * Math.PI/ 180) * d).toFixed(2); 
} 





