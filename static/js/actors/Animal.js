
export class Chicken extends NS.Actor {
	constructor(ctx, x, y, name) {
		super( ctx, x, y, 'c', NS.White, 2, 10, 8, new NS.UTIL.Time( NS.UTIL.randInt(10, 14) ) );

		this.type = 'CHICKEN';
		this.name = name;

		this.weight = 2;

		this.wantsToRest = false;
		/*this.states = this.shared_states.concat([
				'HORNY'
		]);*/
		this.ChangeState( NS.WANDERING );

		this.age_of_adulthood = new NS.UTIL.Time( 4 );

		//entities.push( this );
	}

	Wander() {
		let wantsToMove = Math.random() < 0.1;
		if ( wantsToMove ) {
				let newPosition = new NS.DATA.Vec2(this.x, this.y);
				let longitude = Math.random() < 0.5;
				let latitude = Math.random() < 0.5;
				longitude ? newPosition.x = this.x + 1 : newPosition.x = this.x - 1;
				latitude ? newPosition.y = this.y + 1 : newPosition.y = this.y - 1;

				if ( this.Move(newPosition.x, newPosition.y) ) {
						this.stamina--;
				}
		}
		if ( this.stamina <= this.endurance * 0.25) {
				this.wantsToRest = true;
		}
	}

	Draw() {
		super.Draw();
	}

	Update() {
		super.Update();
		
		if ( this.age.Equals(this.age_of_adulthood) ) {
			if ( this.gender === NS.MALE ) {
					this.sprite = 'R';
					this.color = NS.Color.create('lightgray');
					this.weight = 12;
			} else {
					this.sprite = 'C';
					this.weight = 8;
			}
			this.point_of_starvation = this.weight;
		}

		if ( this.state == NS.WANDERING ) {
			this.Wander();
		} else if ( this.state == 'RESTING' ) {
			let regainsStamina = Math.random() < 0.8;
			regainsStamina ? this.stamina++ : this.stamina = this.stamina;

			if ( this.stamina == this.endurance ) {
					this.wantsToRest = false;
					super.ChangeState( NS.WANDERING );
			}
		} else if ( this.state == 'HORNY' ) {
			//CreateChicken( this.ctx, this.x + 1, this.y )
			this.ChangeState( NS.WANDERING );
		} else if ( this.state == NS.SLEEPING ) {
			if ( NS.WORLD.time_str == "DAY" ) {
				this.ChangeState( NS.WANDERING );
			}
		}
		
		if (  NS.WORLD.time_str == "NIGHT" ) {
			this.ChangeState( NS.SLEEPING );
		} /*else if ( Math.random() < 0.0005 ) {
			this.wants = 'PROCREATE';
		} else if ( this.wants == 'PROCREATE' ) {
			this.currentState = 'HORNY';
		} else if ( this.wantsToRest ) {
			this.ChangeState( NS.RESTING );
		}*/

	}
}

/*export class Wolf extends Actor {
  constructor(x, y) {
    super(x, y);

    this.c = 'W';
    this.age = 0;
    this.color = 'lightgray';
    this.layer = 1;

    this.lifetime = hw.randInt(15000, 18000);

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
    if ( !this.isAlive ) { return; }

    if ( this.age >= this.lifetime ) {
        this.isAlive = false;
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
*/