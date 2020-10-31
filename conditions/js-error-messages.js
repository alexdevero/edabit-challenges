function error(n) {
	const messages = {
		1: "Check the fan",
    2: "Emergency stop",
    3: "Pump Error",
    4: "c",
    5: "Temperature Sensor Error"
	}

	return n <= 5 && n >= 1 ? `${messages[n]}: e${n}` : 101
}

error(1) // "Check the fan: e1"
error(2) // "Emergency stop: e2"
error(3) // "Pump Error: e3"
error(4) // "c: e4"
error(5) // "Temperature Sensor Error: e5"
error(-1000) // 101
