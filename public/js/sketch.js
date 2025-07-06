//import * as NS from './nSlash/nSlash.js';
//import * as WORLD from './nSlash/World.js';
import * as ACTOR from './actors/Actor.js';

// Define options for initialization of NSlash system.
const opts = { 
	container: document.getElementById("canvas-container"),
	background_color: NS.Black,
	debug_mode: true 
}

export class Cursor extends NS.Pixel {
	constructor( ctx, x, y ) {
		super( ctx, x, y, '◊',  NS.Color.create(0, 255, 0), 1 );
	}

	Draw() {
		if ( this.x > this.ctx.cols || this.y > this.ctx.rows ) {
			return;
		}
		this.ctx.__DrawChar( this.sprite, this.x, this.y, this.color, this.layer );
	}

	Update() {
	}
}

NS.ENGINE.StartInput();
NS.ENGINE.SetTickSpeed( 60 );

let ctx = NS.Display.create( 80, 40, opts );
NS.WORLD.Start( ctx );

class River extends NS.Solid {
    constructor(ctx, x, y) {
        super(ctx, x, y);
		this.sprite = 'O';
		this.color = 'blue';
		this.type = 'RIVER';

		let path = NS.ALGO.AStarSearch( ctx.layer1, new NS.DATA.Vec2(x, y), new NS.DATA.Vec2(x + 10, y + 10) );

		let curr_x = this.x, curr_y = this.y;
		let next_x, next_y;

		path.Pop();

		let spaces = 0;

		while ( path.size > 0 ) {
			let p = path.Pop();
			next_x = p.x;
			next_y = p.y;
			console.log(p);

			let diff_x = next_x - curr_x;
			let diff_y = next_y - curr_y;

			if ( next_y > curr_y ) {
				this.sprite += '\n';
			}

			if ( next_x > curr_x ) {
				spaces += 1;
			}

			for ( let i = 0; i < spaces; i++ ) {
				this.sprite += ' ';
			}

			this.sprite += 'o';
		}
    }

    Draw() {
        this.ctx.__DrawString( this.sprite, this.x, this.y, this.color, this.layer );
    }
}

class Rock extends NS.Solid {
    constructor(ctx, x, y) {
        super(ctx, x, y);
		this.sprite = '  Xx\n xxX\nXxXx\n xx';
		this.color = 'gray';
		this.type = 'ROCK';

    }

	Draw() {
        this.ctx.Add( this );
    }
}

//ACTOR.Create( ACTOR.Type.GRASS, ctx, 10, 5 );
//ACTOR.Create( ACTOR.Type.GRASS, ctx, 16, 4 );
//ACTOR.Create( ACTOR.Type.GRASS, ctx, 3, 12 );
//ctx.renderQ.Enqueue( new Rock(ctx, 7, 8) );


//ACTOR.Create( ACTOR.Type.CHICKEN, ctx, 3, 3 );
let c = new Cursor(ctx, ctx.cols / 2, ctx.rows / 2);


console.log( ctx.layer1 );

ctx.Draw = function () {
	var frame_count = ctx.GetTimeSinceGensis();

	ctx.Clear();

	NS.WORLD.UpdateGlobalTime( ctx );

	// Input check
	let key = NS.ENGINE.KeyPressed();

	/*if ( key.includes(NS.ENGINE.K_LEFT) ) {
		c.x -= 1;
	}
	if ( key.includes(NS.ENGINE.K_RIGHT) ) {
		c.x += 1;
	}
	if ( key.includes(NS.ENGINE.K_UP) ) {
		c.y -= 1;
	}
	if ( key.includes(NS.ENGINE.K_DOWN) ) {
		c.y += 1;
	}*/
	
	/*switch ( NS.ENGINE.KeyPressed() ) {

		/*case NS.ENGINE.K_SPACE:
			should_draw = !should_draw;
		break;
		default:
		break;
	}*/

	// Batch renders
	ctx.renderQ.RenderAll();

	// Indvidual
	//c.Draw();

}