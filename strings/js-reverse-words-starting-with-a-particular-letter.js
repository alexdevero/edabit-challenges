function specialReverse(s, c) {
	return s.split(' ').map(word => word[0] === c ? word.split('').reverse().join('') : word).join(' ')
}

specialReverse('word searches are super fun', 's') // 'word sehcraes are repus fun'
specialReverse('first man to walk on the moon', 'm') // 'first nam to walk on the noom'
specialReverse('peter piper picked pickled peppers', 'p') // 'retep repip dekcip delkcip sreppep'
specialReverse('he went to climb mount everest', 'p') // 'he went to climb mount everest'
