var Screen = (function(){
	var 
			focused = false

	function step(){
		return // пришлось отключить фичу потому что нету применения
		var player = Players.getCurrentPlayer()
		if( player ) {
			var screen = ig.game.screen
			if( !focused ){
					var 
							dx 		= Math.abs( screen.x - player.pos.x + ig.system.width/2 )
						,	dy 		= Math.abs( screen.y - player.pos.y + ig.system.height/2) 
						,	dist 	= dx + dy

				if( dist < 1 )
					focused = true
				else{
					screen.x += (player.pos.x - ig.system.width/2  - screen.x)/5;
					screen.y += (player.pos.y - ig.system.height/2 - screen.y)/5;
				}
			}
			if( focused ){
				screen.x = player.pos.x - ig.system.width /2;
				screen.y = player.pos.y - ig.system.height/2;
			}
		}
	}

	function focusChange(){
		focused = false
	}

	return {
			step 				: step
		, focusChange : focusChange
	}
})()