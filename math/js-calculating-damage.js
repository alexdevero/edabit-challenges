function damage(damage, speed, time) {
	return damage < 0 || speed < 0 ? 'invalid' : damage * speed * (time === 'hour' ? 3600 : time === 'minute' ? 60 : 1)
}

damage(40, 5, "second") // 200
damage(100, 1, "minute") // 6000
damage(2, 100, "hour") // 720000
damage(20, 0.5, "minute") // 600
damage(2, 400, "hour") // 2880000
damage(-23, 20, "second") // "invalid"
damage(-23, -5, "second") // "invalid"
damage(20, -492321, "hour") // "invalid"
