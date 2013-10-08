ig.module( 
	'game.main' 
)
.requires(
	'impact.game',
	'impact.font'

	,	'game.entities.player'
	,	'game.entities.target'
	,	'game.levels.test' 
	,	'game.levels.test1'
	,	'game.levels.test2'
	,	'game.levels.test3'
	,	'game.levels.test4'
	,	'game.levels.test5'
	,	'game.levels.test6'
	,	'game.levels.test7'
	,	'game.levels.test8'
	,	'game.levels.test9'
	,	'game.levels.test10'
	,	'game.levels.test11'
)
.defines(function(){

MyGame = ig.Game.extend({
	
	font 			: new ig.Font( 'media/04b03.font.png' ),
	greenFont : new ig.Font( "media/green.font.png"	),
	redFont 	: new ig.Font( "media/red.font.png"		),

	gravity : 300,
	levels : [ 
			LevelTest 
		, LevelTest1 
		, LevelTest2 
		, LevelTest3 
		, LevelTest4 
		, LevelTest5
		, LevelTest6
		, LevelTest7
		, LevelTest8
		, LevelTest9
		, LevelTest10
		, LevelTest11
	],
	curLevel : 11,

	context : document.querySelector("canvas").getContext("2d"),
	canvasScale : 2,
	paused			: false,
	inversedControls : false,

	startTime : 0,
	spentTime : 0,
	lastTimeCheck : 0,

	respawns : 0,

	ended    : false,



	init: function() {
 
		ig.input.bind( ig.KEY.LEFT_ARROW 		, "left"  	)
		ig.input.bind( ig.KEY.RIGHT_ARROW 	, "right" 	)
		ig.input.bind( ig.KEY.SPACE 				, "jump" 		)
		ig.input.bind( ig.KEY.G 						, "shoot" 	)

		ig.input.bind( ig.KEY.I 						, "inverse" )
		ig.input.bind( ig.KEY.C 						, "c" )
		ig.input.bind( ig.KEY.Q 						, "q" )
		ig.input.bind( ig.KEY.H 						, "h" )
		ig.input.bind( ig.KEY.P 						, "p" )


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

		this.startTime = new Date().getTime()

		if( ig.ua.mobile ){
			console.log = function( val ){ document.querySelector(".log").innerHTML = val }
		}

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
		if( ig.input.pressed( "p" ) ){
			this.paused = !this.paused
		}
		if( this.paused || this.ended )
			return

		this.parent();

		var time = new Date().getTime()
		if( !this.lastTimeCheck || ( time - this.lastTimeCheck ) > 100 ){
			if( this.lastTimeCheck ){ 
				var dt = Math.floor( (time - this.lastTimeCheck ) / 100 )
				this.spentTime += dt 
			}
			this.lastTimeCheck = time
		}
		

		var targets = ig.game.getEntitiesByType( EntityTarget )
		var levelComplete = true
		for( var i = 0 ; i < targets.length ; i++ )
			if( !targets[ i ]._active )
				levelComplete = false

		if( targets.length && levelComplete && ig.input.pressed( "c" ) ){
			if( this.curLevel + 1 >= this.levels.length ){
				this.ended = true;
				return
			}
			this.loadLevel( this.levels[ ++this.curLevel ] )
			Players.init()
		}

		if( ig.input.pressed( "q" ) ){
			var players = ig.game.getEntitiesByType( EntityPlayer )
			var _pos = this.getInitPos()

			for( var i = 0 ; i < players.length ; i++ ){
				players[ i ].pos.x = _pos[ i ].x
				players[ i ].pos.y = _pos[ i ].y
				players[ i ].vel.x = 0
				players[ i ].vel.y = 0
			}
			this.respawns++
		}

		Players.step()
		Screen.step()
	},
	
	draw: function() {
		this.parent();

		if( this.ended ){
			this.redFont.draw( "THIS IS A FIN! " , ig.system.width/2 , ig.system.height/2 , ig.Font.ALIGN.CENTER);
			this.redFont.draw( "SHARE THE SCORE WITH YOUR MOME!!!" , ig.system.width/2 , ig.system.height/2 + 15 , ig.Font.ALIGN.CENTER);
			//return;
		}

		if( this.paused ){
			this.font.draw( "THE GAME IS PAUSED!" , ig.system.width/2 , ig.system.height/2 , ig.Font.ALIGN.CENTER);
			this.font.draw( "PUT ME BACK LIVE!" , ig.system.width/2 , ig.system.height/2 + 15, ig.Font.ALIGN.CENTER);
		}

		if( ig.input.state("h") ){
			this.greenFont.draw( "MOVE - Arrows" , 90 , 10 , ig.Font.ALIGN.LEFT);
			this.greenFont.draw( "JUMP - SPACE " , 90 , 20 , ig.Font.ALIGN.LEFT);
			this.greenFont.draw( "INVERSE - I  " , 90 , 30 , ig.Font.ALIGN.LEFT);
			this.greenFont.draw( "RESPAWN - Q  " , 90 , 40 , ig.Font.ALIGN.LEFT);
			this.greenFont.draw( "CHECK IN - C " , 90 , 50 , ig.Font.ALIGN.LEFT);
			this.greenFont.draw( "NUMBERS - SWITCH PLAYER " , 90 , 60 , ig.Font.ALIGN.LEFT);
		}else{
			this.greenFont.draw( "HELP - H" , 100 , 10 , ig.Font.ALIGN.LEFT);
			this.redFont.draw( "your time : " + this.spentTime , 80 , 20 , ig.Font.ALIGN.LEFT);
			this.redFont.draw( "respawns  : " + this.respawns , 80 , 30 , ig.Font.ALIGN.LEFT);
		}

	}

});

ig.main( '#canvas', MyGame, 60, 240, 157, 2);

});
