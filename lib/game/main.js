ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font',

	'game.entities.example',
	'game.entities.target',
	'game.levels.test', 
	'game.levels.test1',
	'game.levels.test2',
	'game.levels.test3',
	'game.levels.test4',
	'game.levels.test5'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font: new ig.Font( 'media/04b03.font.png' ),
	
	gravity : 300,
	levels : [ LevelTest , LevelTest1 , LevelTest2 , LevelTest3 , LevelTest4 , LevelTest5 ],
	curLevel : 0,
	init: function() {
 
		ig.input.bind( ig.KEY.LEFT_ARROW 	, "left"  )
		ig.input.bind( ig.KEY.RIGHT_ARROW , "right" )
		ig.input.bind( ig.KEY.SPACE , "jump" )
		ig.input.bind( ig.KEY.G, "shoot" )
		ig.input.bind( ig.KEY.L, "l" )
		ig.input.bind( ig.KEY.C, "c" )
		ig.input.bind( ig.KEY.Q, "q" )

		this.loadLevel( this.levels[ this.curLevel ] )
		//a = ig.game.spawnEntity( EntityExample, 0 , 0 ) 
	},
	getInitPos : function(){
		var _pos = []
		var level = this.levels[ this.curLevel ]
		for( var i = 0 ; i < level.entities.length ; i++ )
			if( level.entities[ i ].type == "EntityExample" )
				_pos.push( {
					x : level.entities[ i ].x,
					y : level.entities[ i ].y
				} )
		return _pos
	},
	update: function() {
		this.parent();

		//if( ig.input.pressed( "l" ) )
		//	this.loadLevel( LevelTest1 )
		

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


		var player = ig.game.getEntitiesByType( EntityExample )[ 0 ]
		if( player ) {
			//this.screen.x = player.pos.x - ig.system.width/2;
			//this.screen.y = player.pos.y - ig.system.height/2;
		}
	},
	
	draw: function() {
		this.parent();
	}
});

ig.main( '#canvas', MyGame, 60, 240, 157, 2 );

});
