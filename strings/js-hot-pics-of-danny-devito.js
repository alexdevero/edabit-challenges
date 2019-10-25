function preventDistractions(str) {
	return (str.match(/anime/) || str.match(/meme/) || str.match(/vine/) || str.match(/roasts/) || str.match(/Danny Devito/)) ? 'NO!' : 'Safe watching!'
}

'vines that butter my eggroll') // 'NO!'
'Hot pictures of Danny Devito') // 'NO!'
'top 10 insert random yt celebrity roasts') // 'NO!'
'best anime food ever!') // 'NO!'
'How to Be a Productive Member of Society') // 'Safe watching!'
