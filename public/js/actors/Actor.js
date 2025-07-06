/**
		* Serves as an interface for all actor constructions.
		*/
import * as ANIMAL from './Animal.js';
import * as PLANT from './Plants.js';

export const Type = Object.freeze({
	GRASS: 0,
	TREE: 1,
	CHICKEN: 2,
});

export function Create( type, display, x, y, name = null ) {
	switch ( type ) {
		case Type.GRASS:
			display.renderQ.Enqueue( 
				new PLANT.Grass(display, x, y) 
				);
			break;
		case Type.TREE:
			display.renderQ.Enqueue( 
				new PLANT.Tree(display, x, y) 
				);
			break;
		case Type.CHICKEN:
			if ( name == null ) {
				name = "Chicken";
			}
			display.renderQ.Enqueue( 
				new ANIMAL.Chicken(display, x, y, name) 
				);
			break;
		default:
			break;
	}
}