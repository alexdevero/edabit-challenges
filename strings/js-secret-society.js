function societyName(friends) {
	return friends.map(name => name.substring(0,1)).sort().join('')
}

societyName(['Adam', 'Sarah', 'Malcolm']) // 'AMS'
societyName(['Phoebe', 'Chandler', 'Rachel', 'Ross', 'Monica', 'Joey']) // 'CJMPRR'
societyName(['Harry', 'Newt', 'Luna', 'Cho']) // 'CHLN'
societyName(['Sherlock', 'Irene', 'John']) // 'IJS'
societyName(['Sheldon', 'Amy', 'Penny', 'Howard', 'Raj']) // 'AHPRS'
