window.onorientationchange = function() {
  if( !ig || !ig.game ) return
  var orientation = window.orientation;

  switch(orientation) {
    case 0:
       	ig.game.paused = true 
       	document.querySelector("canvas").style.width = "80%" 
       	document.querySelector("canvas").style.height = "auto"
      break; 
    case 90:
        ig.game.paused = false 
        document.querySelector("canvas").style.width = "" 
       	document.querySelector("canvas").style.height = "80%" 
      break;

    case -90: 
        ig.game.paused = false  
        document.querySelector("canvas").style.width = "" 
       	document.querySelector("canvas").style.height = "80%" 
      break;
  }
}
window.ondevicemotion = function(event) {
  if( !ig || !ig.input ) { return; } 

  var accely = Math.floor(event.accelerationIncludingGravity.y)

  if( Math.abs(accely) < 1.5 ){
  	ig.input.accel = {
      y: 0
  	}
  	return
  }

  var orsign = window.orientation && Math.abs(window.orientation)/window.orientation
  ig.input.accel = {
      y: orsign * Math.floor(event.accelerationIncludingGravity.y)
  };
  console.log( JSON.stringify( ig.input.accel ) )
}

