function stripSentence(str, chars) {
	return str.split('').filter(char => !chars.includes(char)).join('')
}

stripSentence("the quick brown fox jumps over the lazy dog", "aeiou") // "th qck brwn fx jmps vr th lzy dg"
stripSentence("the hissing snakes sinisterly slither across the rustling leaves", "s") // "the hiing nake initerly lither acro the rutling leave"
stripSentence("gone, reduced to atoms", "go, muscat nerd") // ""
stripSentence("uh oh i made a typo please fixq it for me", "q") // "uh oh i made a typo please fix it for me"
stripSentence("sphinx of black quartz, judge my vow!", "sgwj") // "phinx of black quartz, ude my vo!"
stripSentence("exclamation! marks! and! the! letter! x! arxxxxxxxxexxxxxx! rxxexxxallxxxxy! anxxxnoxyixxxxxxxngxxxxxx!xx", "x!") // "eclamation marks and the letter  are really annoying"
stripSentence("!!!!!!!!!!!!!!!!!!!!!!!", "?") // "!!!!!!!!!!!!!!!!!!!!!!!"
stripSentence("cat rat eat pat eat sat", "at") // "c r e p e s"
stripSentence("abc", "def") // "abc"
stripSentence("allegro andante", "aaaaaaaaa") // "llegro ndnte"
