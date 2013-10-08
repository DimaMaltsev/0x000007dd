var Players = (function(){
	var 
			players
		,	currentPlayer

	function init(){ // пересохраняет текущих игроков
		players = ig.game.getEntitiesByType( EntityPlayer )
		for( var i = 0 ; i < players.length ; i++ )
			players[ i ].index = i + 1
		setCurrentPlayer()//currentPlayer 	= 0
	}

	function setCurrentPlayer( _index ){ // задает текущего активного игрока
		var index = _index - 1 || 0 // у нас нумерация с единички
		if(players[ index ] == undefined) return;

		currentPlayer != undefined && (players[ currentPlayer ].choosen = false)
		currentPlayer = index 
		players[ currentPlayer ].choosen = true
		Screen.focusChange()
	}

	function getCurrentPlayer(){ // отдает текущего активного игрока
		return players[ currentPlayer ]
	}

	function step(){ // временно тут.

		for( var i = 1 ; i < 10 ; i++ )
			if( ig.input.pressed( i + "" ) )
				setCurrentPlayer( i )

		if( ig.input.pressed("inverse") ){
			players[ currentPlayer ].toggleInverse()
		}

		ig.game.inversedControls = players[ currentPlayer ].inversed
	}

	return {
			getCurrentPlayer 	: getCurrentPlayer
		, setCurrentPlayer 	: setCurrentPlayer
		,	init							: init
		, step 							: step

	}
})()