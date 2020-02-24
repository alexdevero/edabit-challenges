function clearFog(str) {
	return str.indexOf('f') > 1 || str.indexOf('o') > 1 || str.indexOf('g') > 1 ? str.replace(/(f)?(o)?(g)?/ig, '') : 'It\'s a clear day!'
  // or return (/[fog]/gi).test(str) ? str.match(/[^fog]/gi).join("") :"It's a clear day!";
}

clearFog("fogfogfffoooofftreesggfoogfog") // "trees"
clearFog("fooofffgggofoogfoskygfogfogfoooggg") // "sky"
clearFog("ffogfogoggofobirdsandthebeesfogfoggofgoffog") // "birdsandthebees"
clearFog("fogfoofgfogfgplanefogofgoffgo") // "plane"
clearFog("fogofogoofgfffogthesaurusfogfogfogfgofg") // "thesaurus"
clearFog("fogfgofofsunfogfgoogfogofgff") // "sun"
clearFog("city") // "It's a clear day!"
