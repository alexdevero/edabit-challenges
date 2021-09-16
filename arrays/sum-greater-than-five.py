def sum_five(lst):
	return sum([ x for x in lst if (x > 5) ])

sum_five([1,5,20,30,4,9,18]) # 77
sum_five([1,2,3,4]) # 0
sum_five([10,12,28,47,55,100]) # 252
sum_five([25,44,6,4,3,36]) # 111
sum_five([5,2,150,187,254,0]) # 591
sum_five([1000,2500,2,4,500,400]) # 4400
sum_five([125.5,147.2,548.6,2.3,1.5]) # 821.3