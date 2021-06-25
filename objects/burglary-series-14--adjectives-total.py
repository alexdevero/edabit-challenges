import random

def total_amount_adjectives(dct):
	return len(dct)

obj = { 'a': "moron" }
obj2 = { 'a': "moron", 'b': "scumbag", 'c': "moron", 'd': "dirtbag" }
obj3 = {'b': "scumbag", 'c': "moron", 'd': "dirtbag" }

rand = random.randint(10,20)

dynamic = { i:j for i,j in list(map(lambda x:(chr(65+x),x),list(range(rand)))) }

total_amount_adjectives(obj) # 1
total_amount_adjectives(obj2) # 4
total_amount_adjectives(obj3) # 3
total_amount_adjectives(dynamic) # rand