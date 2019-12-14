function removeSpecialCharacters(str) {
	return str.replace(/(\?)*(\+)*(\<)*(\>)*(\`)*(\~)*(\|)*(\{)*(\})*(\[)*(\])*(\.)*(\=)*(\()*(\))*(\!)*(\@)*(\#)*(\$)*(\%)*(\^)*(\&)*(\\)*(\*)*(\,)*/g, '')
}

removeSpecialCharacters("The quick brown fox!") // "The quick brown fox"
removeSpecialCharacters("%fd76$fd(-)6GvKlO.") // "fd76fd-6GvKlO"
removeSpecialCharacters("D0n$c sed 0di0 du1") // "D0nc sed 0di0 du1"
removeSpecialCharacters("cat_pic.jpeg") // "cat_picjpeg"
removeSpecialCharacters("519-555-8093") // "519-555-8093"
removeSpecialCharacters("h-d+=rf[]_{}<>.,`~!@#$%^&*(|)") // "h-drf_"
removeSpecialCharacters("Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???") // "Etiam porta sem malesu-ada magna mollis euismod"
