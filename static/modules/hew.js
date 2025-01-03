
export class Matrix {
  constructor(rows, cols, fillValue = 0) {
    this.rows = rows;
    this.cols = cols;
		this.fillValue = fillValue;
    this.data = Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => fillValue)
    );

		// Return a Proxy to allow array-like access
    return new Proxy(this, {
      get: (target, prop) => {
        if (typeof prop === "string" && !isNaN(prop)) {
          return target.data[prop];
        }
        return target[prop]; 
      },
      set: (target, prop, value) => {
        if (typeof prop === "string" && !isNaN(prop)) {
          target.data[prop] = value;
          return true;
        }
        target[prop] = value; 
        return true;
      },
    });
  }

		clear() {
				this.data = Array.from(
					{ length: this.rows }, 
					() => Array(this.cols).fill(this.fillValue)
			);
		}
}

export function randInt(lower = 0, upper = Number.MAX_SAFE_INTEGER) 
{
		lower = Math.ceil(lower);
		upper = Math.floor(upper);
		return Math.floor(Math.random() * (upper - lower + 1)) + lower; 
}
