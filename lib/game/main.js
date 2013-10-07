ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.entities.player',
	'game.entities.target',
	'game.levels.test', 
	'game.levels.testInverse'//,
	/*'game.levels.test2',
	'game.levels.test3',
	'game.levels.test4',
	'game.levels.test5'*/
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/04b03.font.png' ),
	
	gravity : 300,
	levels : [ LevelTest , LevelTestInverse /*, LevelTest2 , LevelTest3 , LevelTest4 , LevelTest5*/ ],
	curLevel : 1,

	context : document.querySelector("canvas").getContext("2d"),
	canvasScale : 2,

	inversedControls : false,

	init: function() {
 
		ig.input.bind( ig.KEY.LEFT_ARROW 		, "left"  	)
		ig.input.bind( ig.KEY.RIGHT_ARROW 	, "right" 	)
		ig.input.bind( ig.KEY.SPACE 				, "jump" 		)
		ig.input.bind( ig.KEY.G 						, "shoot" 	)

		ig.input.bind( ig.KEY.I 						, "inverse" )

		ig.input.bind( ig.KEY.T 						, "test" 		)
		ig.input.bind( ig.KEY._1 						, "1" 			)
		ig.input.bind( ig.KEY._2 						, "2" 			)
		ig.input.bind( ig.KEY._3 						, "3" 			)
		ig.input.bind( ig.KEY._4 						, "4" 			)
		ig.input.bind( ig.KEY._5 						, "5" 			)
		ig.input.bind( ig.KEY._6 						, "6" 			)
		ig.input.bind( ig.KEY._7 						, "7" 			)
		ig.input.bind( ig.KEY._8 						, "8" 			)
		ig.input.bind( ig.KEY._9 						, "9" 			)

		this.loadLevel( this.levels[ this.curLevel ] ) 
		Players.init()
	},
	getInitPos : function(){
		var _pos = []
		var level = this.levels[ this.curLevel ]
		for( var i = 0 ; i < level.entities.length ; i++ )
			if( level.entities[ i ].type == "EntityPlayer" )
				_pos.push( {
					x : level.entities[ i ].x,
					y : level.entities[ i ].y
				} )
		return _pos
	},
	update: function() {
		this.parent();
		

		var targets = ig.game.getEntitiesByType( EntityTarget )
		var levelComplete = true
		for( var i = 0 ; i < targets.length ; i++ )
			if( !targets[ i ]._active )
				levelComplete = false

		if( targets.length && levelComplete && ig.input.pressed( "c" ) )
			this.loadLevel( this.levels[ ++this.curLevel ] )

		if( ig.input.pressed( "q" ) ){
			var players = ig.game.getEntitiesByType( EntityExample )
			var _pos = this.getInitPos()

			for( var i = 0 ; i < players.length ; i++ ){
				players[ i ].pos.x = _pos[ i ].x
				players[ i ].pos.y = _pos[ i ].y
			}
		}


		

		Players.step()
		Screen.step()
	},
	
	draw: function() {
		this.parent();
	}

});

ig.main( '#canvas', MyGame, 60, 240, 157, 2);

});
