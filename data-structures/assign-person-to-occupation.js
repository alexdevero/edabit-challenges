function assignPersonToJob(names, jobs) {
	return Object.fromEntries(names.map((name, i) => [name, jobs[i]]))
}

names1 = ["Annie", "Steven", "Lisa", "Osman"];
names2 = ['Victor', 'Paul', 'Eddie'];
names3 = ['Dennis', 'Vera', 'Mabel', 'Annette', 'Sussan'];
jobs1 = ["Teacher", "Engineer", "Doctor", "Cashier"];
jobs2 = ['Vet', 'Nurse', 'Web Developer'];
jobs3 = ['Butcher', 'Programmer', 'Doctor', 'Teacher', 'Lecturer'];

Test.assertSimilar(assignPersonToJob(names2, jobs2), { Victor: 'Vet', Paul: 'Nurse', Eddie: 'Web Developer' });
Test.assertSimilar(assignPersonToJob(names3, jobs3),
{
  Dennis: 'Butcher',
  Vera: 'Programmer',
  Mabel: 'Doctor',
  Annette: 'Teacher',
  Sussan: 'Lecturer'
}
);
Test.assertSimilar(assignPersonToJob(names1, jobs1),
{
	Annie: 'Teacher',
	Steven: 'Engineer',
	Lisa: 'Doctor',
	Osman: 'Cashier'
}
);
