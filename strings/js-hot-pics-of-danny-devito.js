function preventDistractions(str) {
	return (str.match(/anime/) || str.match(/meme/) || str.match(/vine/) || str.match(/roasts/) || str.match(/Danny Devito/)) ? 'NO!' : 'Safe watching!'
}

preventDistractions('vines that butter my eggroll') // 'NO!'
preventDistractions('Hot pictures of Danny Devito') // 'NO!'
preventDistractions('top 10 insert random yt celebrity roasts') // 'NO!'
preventDistractions('best anime food ever!') // 'NO!'
preventDistractions('How to Be a Productive Member of Society') // 'Safe watching!'
