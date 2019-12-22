function whichIsLarger(f, g) {
	return f() === g() ? 'neither' :  f() > g() ? 'f' : 'g'
}

whichIsLarger(()=>5, ()=>10) // 'g'
whichIsLarger(()=>10, ()=>5) // 'f'
whichIsLarger(()=>25, ()=>25) // 'neither'
whichIsLarger(()=>-100, ()=>-100) // 'neither'
whichIsLarger(()=>-100, ()=>0) // 'g'
whichIsLarger(()=>505050, ()=>5050) // 'f'
whichIsLarger(()=>100, ()=>1000) // 'g'
