function uniqueStyles(albums) {
	return new Set(albums.join(',').split(',')).size
}

uniqueStyles([
	"Dub,Dancehall",
	"Industrial,Heavy Metal",
	"Techno,Dubstep",
	"Synth-pop,Euro-Disco",
	"Industrial,Techno,Minimal"
]) // 9

uniqueStyles([
	"Soul",
	"House,Folk",
	"Trance,Downtempo,Big Beat,House",
	"Deep House",
	"Soul"
]) // 7

uniqueStyles([
	"Black Metal,Avantgarde",
	"Funk",
	"Deep House,House",
	"Big Band",
	"Punk"
]) // 7

uniqueStyles([
	"Funk",
	"Funk",
	"Funk",
	"Funk",
	"Funk",
]) // 1
