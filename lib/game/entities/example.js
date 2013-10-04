ig.module( 
	'game.entities.example' 
)
.requires(
	'impact.entity'
)
.defines(function(){

	EntityExample = ig.Entity.extend({

			type: ig.Entity.TYPE.A
		,	checkAgainst: ig.Entity.TYPE.NONE
		,	collides: ig.Entity.COLLIDES.PASSIVE

		,	animSheet 	: new ig.AnimationSheet( 'media/player.png', 16, 16 )
		,	size 				: {x: 8, y:14}
		,	offset 			: {x: 4, y: 2}
		,	flip 				: false
		,	maxVel  		: {x: 100, y: 200}
		,	friction 		: {x: 600, y: 0}
		,	accelGround : 400
		,	accelAir 		: 200
		,	jump 				: 150

	,	init: function( x, y, settings ) {
			this.parent( x, y, settings );

			// Add the animations
			this.addAnim( 'idle', 1, [0] );
			this.addAnim( 'run', 0.07, [0,1,2,3,4,5] );
			this.addAnim( 'jump', 1, [9] );
			this.addAnim( 'fall', 0.4, [6,7] );
		}
	, update: function() {
		      // move left or right
			var accel = this.standing ? this.accelGround : this.accelAir;
			if( ig.input.state('left') ) {
				this.accel.x = -accel;
				this.flip = true;
			}
			else if( ig.input.state('right') ) {
				this.accel.x = accel;
				this.flip = false;
			}
			else {
				this.accel.x = 0;
			}
		       // jump
			if( this.standing && ig.input.pressed('jump') ) {
				this.vel.y = -this.jump;
			}

			if( ig.input.pressed('shoot') ) {
				ig.game.spawnEntity( EntitySlimeGrenade, this.pos.x + ( this.flip ? -5 : 5), this.pos.y, {flip:this.flip} );
			}

			this.currentAnim.flip.x = this.flip;
			// move!
			this.parent();
		}
	});

	EntitySlimeGrenade = ig.Entity.extend({
			size: {x: 4, y: 4}
		,	offset: {x: 2, y: 2}
		,	animSheet: new ig.AnimationSheet( 'media/grenade.jpg', 16, 16 )

		, type: ig.Entity.TYPE.NONE
		, checkAgainst: ig.Entity.TYPE.A
		, collides: ig.Entity.COLLIDES.PASSIVE

		,	maxVel: {x: 200, y: 200}
		,	bounciness: 0.6
		,	bounceCounter: 0

		, init: function( x, y, settings ) {
				this.parent( x, y, settings );
				this.vel.x = (settings.flip ? -this.maxVel.x : this.maxVel.x);
				this.vel.y = -50;
				this.addAnim( 'idle', 0.2, [0] );
			}
		,	handleMovementTrace: function( res ) {
				this.parent( res );
				if( res.collision.x || res.collision.y ) {

					// only bounce 3 times
					this.bounceCounter++;
					if( this.bounceCounter > 3 ) {
						this.kill();
					}
				}
			}
		,	check: function( other ) {
				other.receiveDamage( 10, this );
				this.kill();
			}
	});
});
































