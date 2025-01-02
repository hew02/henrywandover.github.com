
export function randInt(lower = 0, upper = Number.MAX_SAFE_INTEGER) {
		return Math.floor(Math.random() * upper) + lower; 
}
