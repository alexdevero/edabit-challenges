function secret(text) {
	return `${('<' + text.split('*')[0] + '></' + text.split('*')[0] +'>').repeat(text.split('*')[1])}`
}

secret("div*2") // `<div></div><div></div>`
secret("p*1") // `<p></p>`
secret("li*3") // `<li></li><li></li><li></li>`
secret("h1*4") // `<h1></h1><h1></h1><h1></h1><h1></h1>`
secret("ul*2") // `<ul></ul><ul></ul>`
