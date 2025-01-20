
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



export function sqlDate2Pretty(bad_str) 
{
				let tov_str = "";

				const parts = bad_str.split('-');


				switch (parts[1]) {
					case "01":
						tov_str = "January";
						break;
					case "02":
						tov_str = "Febuary";
						break;
					case "03":
						tov_str = "March";
						break;
				  case "04":
						tov_str = "April";
						break;
					case "05":
						tov_str = "May";
						break;
					case "06":
						tov_str = "June";
						break;
					case "07":
						tov_str = "July";
						break;
					case "08":
						tov_str = "August";
						break;
					case "09":
						tov_str = "September";
						break;
					case "10":
						tov_str = "October";
						break;
					case "11":
						tov_str = "November";
						break;
					case "12":
						tov_str = "December";
						break;
				  default:
						tov_str + "?";
				}
		
				let day = parts[2];

				if(day[0] === '0') {
						day = day[1];
				}


				tov_str = tov_str + " " + day + ", " + parts[0];

				return tov_str;
}


export class vec2 {
	constructor(x, y) {
	  this.x = x;
	  this.y = y;
	}
  
	add(otherVector) {
	  return new vec2(this.x + otherVector.x, this.y + otherVector.y);
	}
}