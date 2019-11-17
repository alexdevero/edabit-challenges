function spelling(str) {
	return str.split('').map((char, index) => str.substring(0, [(index + 1) * 1]))
}

spelling('bee') // ['b', 'be', 'bee']
spelling('cake') // ['c', 'ca', 'cak', 'cake']
spelling('happy') // ['h', 'ha', 'hap', 'happ', 'happy']
spelling('eagerly') // ['e', 'ea', 'eag', 'eage', 'eager', 'eagerl', 'eagerly']
spelling('believe') // ['b', 'be', 'bel', 'beli', 'belie', 'believ', 'believe']
