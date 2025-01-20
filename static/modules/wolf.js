import * as hw from './hew.js';
import {addChar, spaceAvailable, rows, cols, entities} from './p5ASCII.js';
import {Pixel} from './pixel.js';

export class Wolf extends Pixel {
  constructor(x, y) {
    super(x, y);

    this.c = 'W';
    this.age = 0;
    this.color = 'lightgray';
    this.layer = 1;

    this.lifetime = hw.randInt(15000, 18000);

    this.dead = false;

    this.wantsToRest = false;
    this.currentState = 'wandering';

    this.endurance = hw.randInt(45, 75);
    this.stamina = this.endurance;

    this.following = null;

    entities.push(this);
  }

  draw() {
    this.pos = addChar(this.c, this.x, this.y, this.color, this.layer);
  }

  update() {
    if ( this.dead ) { return; }

    if ( this.age >= this.lifetime ) {
        this.dead = true;
        this.color = 'red';
    }

    if ( this.wantsToRest ) {
        this.currentState = 'resting';
    }

    
    if ( this.currentState == 'wandering' ) {
        let wantsToMove = Math.random() < 0.1;

        if ( wantsToMove ) {
            let newPosition = new hw.vec2(this.x, this.y);
            let longitude = Math.random() < 0.5;
            let latitude = Math.random() < 0.5;
            longitude ? newPosition.x = this.x + 1 : newPosition.x = this.x - 1;
            latitude ? newPosition.y = this.y + 1 : newPosition.y = this.y - 1;
        
            if ( newPosition.x < cols && 
                newPosition.x > 0 && 
                newPosition.y < rows - 1 &&
                newPosition.y > 0 ) {
                this.x = newPosition.x;
                this.y = newPosition.y;
            }

            this.stamina--;
        }


        if ( this.stamina <= this.endurance * 0.25) {
            this.wantsToRest = true;
        }

        for ( const entity of entities ) {
            if ( entity.type == 'chicken' ) {
                this.currentState = 'hunting';
                this.following = entity;
                this.color = 'orange';
            }
        }

    }
    else if ( this.currentState == 'resting' ) {
        let regainsStamina = Math.random() < 0.8;
        regainsStamina ? this.stamina++ : this.stamina = this.stamina;

        if ( this.stamina == this.endurance ) {
            this.wantsToRest = false;
            this.currentState = 'wandering';
        }
    }
    else if ( this.currentState == 'hunting' ) {
        let _x, _y;

        _x = Math.abs(this.x - this.following.x);


        this.x = _x;
    }

    this.age++;
  }
}