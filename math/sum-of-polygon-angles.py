def sum_polygon(n):
	return (n - 2) * 180

from time import perf_counter
tic = perf_counter()
Test.assert_equals(sum_polygon(3), 180)
Test.assert_equals(sum_polygon(4), 360)
Test.assert_equals(sum_polygon(5), 540)
Test.assert_equals(sum_polygon(6), 720)
Test.assert_equals(sum_polygon(7), 900)
Test.assert_equals(sum_polygon(8), 1080)
Test.assert_equals(sum_polygon(9), 1260)
Test.assert_equals(sum_polygon(10), 1440)
Test.assert_equals(sum_polygon(1000), 179640)
print('t_sec = {:.6f}'.format(perf_counter() - tic))