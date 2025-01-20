import * as hw from './hew.js';
import {addChar, spaceAvailable, rows, cols, entities} from './p5ASCII.js';
import {Pixel} from './pixel.js';

export class Chicken extends Pixel {
  constructor(x, y) {
    super(x, y);

    this.c = 'C';
    this.age = 0;
    this.color = 'white';
    this.layer = 1;

    this.lifetime = hw.randInt(9000, 9500);

    this.dead = false;

    this.wantsToRest = false;
    this.currentState = 'wandering';

    this.endurance = hw.randInt(10, 18);
    this.stamina = this.endurance;

    this.type = 'chicken';

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

    }
    else if ( this.currentState == 'resting' ) {
        let regainsStamina = Math.random() < 0.8;
        regainsStamina ? this.stamina++ : this.stamina = this.stamina;

        if ( this.stamina == this.endurance ) {
            this.wantsToRest = false;
            this.currentState = 'wandering';
        }
    }

    this.age++;
  }
}