def front3(txt):
	return txt[0:3] * 3

front3('Python') # 'PytPytPyt', 'Simple string#1'
front3('Chocolate') # 'ChoChoCho', 'Simple strin#2'
front3('duh') # 'duhduhduh', '3 characters string'
front3('Sportsmanship') # 'SpoSpoSpo', 'Generic string'
front3('ab') # 'ababab', '2 characters string'
front3('a') # 'aaa', '1 characters string'
front3('') # '', 'Empty string'