function mod(a, b) {
	return a - Math.floor(a / b) * b
}

mod(0, 3) // 0
mod(1, 3) // 1
mod(5, 3) // 2
mod(4, 5) // 4
mod(218, 5) // 3
