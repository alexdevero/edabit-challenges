function correctSpacing(sentence) {
	return sentence.replace(/\s+/g, ' ').trimStart().trimEnd()
}

correctSpacing(" A  glittering  gem     is    not   enough.  ") // "A glittering gem is not enough."
correctSpacing("   She      did  her best  to  help    him.  ") // "She did her best to help him."
correctSpacing("  They      made  sure   to get   there  early. ") // "They made sure to get there early."
correctSpacing("  She  did   her      best     to   help him. ") // "She did her best to help him."
correctSpacing("      I     love  eating    toasted  cheese   and tuna  sandwiches.") // "I love eating toasted cheese and tuna sandwiches."
correctSpacing("  There     were  foggy   conditions on   the      trail.   ") // "There were foggy conditions on the trail."
correctSpacing("     The  roads   were  impassable  due to      snow.  ") // "The roads were impassable due to snow."
correctSpacing(" Better   to      paint  with  bold  colors.   ") // "Better to paint with bold colors."
correctSpacing("     Remember to  stretch      before you  run.  ") // "Remember to stretch before you run."
correctSpacing("  You  rarely    see  a royal   flush     in   poker. ") // "You rarely see a royal flush in poker."
correctSpacing("  She was too      short     to   see    over  the   fence.   ") // "She was too short to see over the fence."
correctSpacing("   I   will  post     the letter      tonight.  ") // "I will post the letter tonight."
correctSpacing(" He      could  not remember   a     thing.   ") // "He could not remember a thing."
correctSpacing("      Sometimes     it    is  better   to  just walk away.") // "Sometimes it is better to just walk away."
correctSpacing(" A   lack   of      stirring  makes  the sauce     stick.  ") // "A lack of stirring makes the sauce stick."
correctSpacing("   I      really   want  my dessert.  ") // "I really want my dessert."
correctSpacing("   Let      me help you  with     your    bags.   ") // "Let me help you with your bags."
correctSpacing("      Around  the world     in   eighty   days.  ") // "Around the world in eighty days."
correctSpacing("      The soup   of    the  day   is     lentil. ") // "The soup of the day is lentil."
correctSpacing("    Winter is   coming. ") // "Winter is coming."
