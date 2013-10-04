ig.module( 
	'game.entities.target' 
)
.requires(
	'impact.entity'
)
.defines(function(){

	EntityTarget = ig.Entity.extend({

			type: ig.Entity.TYPE.C
		,	checkAgainst: ig.Entity.TYPE.A
		,	collides: ig.Entity.COLLIDES.PASSIVE
		, _active : false
		,	animSheet 	: new ig.AnimationSheet( 'media/woman.jpg', 8, 8 )
		,	size 				: {x: 8, y:8}
		, gravityFactor : 0
		,	init: function( x, y, settings ) {
				this.parent( x, y, settings );
				this.addAnim( "idle" , 1 , [0] );
				this.addAnim( "active" , 1 , [1] );
				this.currentAnim = this.anims.idle; 
			}
		, update: function() {
				// move!

				var players = ig.game.getEntitiesByType( EntityExample )
				this._active = false
				for( var  i = 0 ; i < players.length ; i++ )
					if( Math.abs(players[ i ].pos.x - this.pos.x ) < 10  &&  Math.abs(players[ i ].pos.y - this.pos.y ) < 10 )
							this._active = true

				if( this._active )
					this.currentAnim = this.anims.active
				else
					this.currentAnim = this.anims.idle
				this.parent();
			}
		, check : function( other ){
				//this._active = true
				//this.active = true
		}

	});

});
































