ig.module( 
	'game.entities.player' 
)
.requires(
	'impact.entity'
)
.defines(function(){

	EntityPlayer = ig.Entity.extend({

			type: ig.Entity.TYPE.A
		,	checkAgainst: ig.Entity.TYPE.NONE
		,	collides: ig.Entity.COLLIDES.PASSIVE

		,	animSheet 	: new ig.AnimationSheet( 'media/player.png', 16, 16 )
		,	size 				: {x: 16, y:16}
		,	offset 			: {x: 0, y: 0}
		,	flip 				: false
		,	maxVel  		: {x: 100, y: 200}
		,	friction 		: {x: 600, y: 0}
		,	accelGround : 400
		,	accelAir 		: 200
		,	jump 				: 150

		, choosen   	: false

		, inversed 		: false

		,	font 				: new ig.Font( 'media/04b03.font.png' , 0 , 0 , ig.Font.ALIGN.CENTER)

		,	init: function( x, y, settings ) {
				this.parent( x, y, settings );

				// Add the animations
				this.addAnim( 'idle', 1, [0] );
				this.addAnim( 'run', 0.07, [0,1,2,3,4,5] );
				this.addAnim( 'jump', 1, [9] );
				this.addAnim( 'fall', 0.4, [6,7] );
			}
		, toggleInverse : function(){
				this.inversed = !this.inversed
			}
		, update: function() {
			      // move left or right
				var 
						accel 		= this.standing ? this.accelGround : this.accelAir

				if( ig.game.inversedControls ){
					if( this.choosen )
						inversed = !this.inversed
					else 
						inversed = !this.inversed
				}else
					inversed = this.inversed
				var
						dir 			= inversed ? -1 : 1

				if( ig.input.state('left') ) {
					this.accel.x = -dir * accel;
					this.flip = !inversed ? true : false;
				}
				else if( ig.input.state('right') ) {
					this.accel.x = dir * accel;
					this.flip = !inversed ? false : true;
				}
				else {
					this.accel.x = 0;
				}
			       // jump
				if( this.standing && ig.input.pressed('jump') ) {
					this.vel.y = -this.jump;
				}

				this.currentAnim.flip.x = this.flip;
				// move!
				this.parent();
			}
		, draw : function(){
				this.parent()
				this.drawInverseStatus()
				this.drawActiveTriangle()
		}

		, drawActiveTriangle : function(){
				if( !this.choosen ) return;
				var 
						context = document.querySelector("canvas").getContext("2d")
					, x 			= ( this.pos.x - ig.game.screen.x ) * 2 + this.size.x 
					, y				= ( this.pos.y - ig.game.screen.y ) * 2
					, size		= 7
					, offset  = this.inversed  ? 10 : 1

				context.fillStyle   = '#0f0';



				context.beginPath();
				context.moveTo(x, y - offset);
				context.lineTo(x - size, y - offset - size);
				context.lineTo(x + size, y - offset - size);
				context.lineTo(x, y - offset);

				context.fill();
				context.stroke();
				context.closePath();
			}
		, drawInverseStatus : function(){
				if( !this.inversed ) return;
				var 
						statusOffset = 4
					, x = this.pos.x - ig.game.screen.x + this.size.x / 2
					, y = this.pos.y - ig.game.screen.y - statusOffset

				this.font.draw( "inv" , x , y , ig.Font.ALIGN.CENTER);
			}
	});
});
































