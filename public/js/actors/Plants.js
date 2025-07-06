export class Plant extends NS.Solid {
    constructor(ctx, x, y) {
        super(ctx, x, y);
    }

    Draw() {
        this.ctx.__DrawChar( this.sprite, this.x, this.y, this.color, this.layer );
    }
}

export class Grass extends Plant {
    age = new NS.UTIL.Time( 0 );
    constructor(ctx, x, y) {
        super(ctx, x, y);

        var sprites = ['~', '-', 'ᴦ'];
        this.sprite = '~';
        this.color = 'green';
        this.type = 'GRASS';
    }

    Draw() {
        super.Draw();
    }

    Update() {
        this.age.Inc();
    }
}

export class Tree extends Plant {
    constructor(ctx, x, y) {
        super(ctx, x, y);

        var sprites = ['ᴛ', '↨'];
        this.sprite = '↨';
        this.color = 'green';
        this.type = 'TREE';
    }

    Draw() {
        super.Draw();
    }

    Update() {
        //super.Update();
        this.age.Inc();
    }
}
