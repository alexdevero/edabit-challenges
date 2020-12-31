const isEqual_myVersion = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
}

const cars = [
  { make: "mazda", year: 2020, color: "red", isUsed: false },
  { make: "mazda", year: 2020, color: "red", isUsed: false },
  { make: "mazda", year: 2018, color: "blue", isUsed: true },
  { make: "toyota", year: 2018, color: "blue", isUsed: true },
  { make: "toyota", year: 2017, color: "grey", isUsed: true },
  { make: "ford", year: 2017, color: "grey", isUsed: true },
  { make: "for", year: 2020, color: "red", isUsed: false },
];
const carsAsObject = {
  stall1: { make: "mazda", year: 2020, color: "red", isUsed: false },
  stall2: { make: "mazda", year: 2020, color: "red", isUsed: false },
  stall3: { make: "mazda", year: 2018, color: "blue", isUsed: true },
  stall4: { make: "toyota", year: 2018, color: "blue", isUsed: true },
  stall5: { make: "toyota", year: 2017, color: "grey", isUsed: true },
  stall6: { make: "ford", year: 2017, color: "grey", isUsed: true },
  stall7: { make: "for", year: 2020, color: "red", isUsed: false },
};

// Lodash Tests
Test.assertSimilar(_.isEqual(cars[0], cars[1]), isEqual_myVersion(cars[0], cars[1]));
Test.assertSimilar(_.isEqual(cars[0], cars[2]), isEqual_myVersion(cars[0], cars[2]));
Test.assertSimilar(_.isEqual(cars, Object.values(carsAsObject)), isEqual_myVersion(cars, Object.values(carsAsObject)));
Test.assertSimilar(
  _.isEqual(carsAsObject.stall1.year, carsAsObject.stall2.year),
  isEqual_myVersion(carsAsObject.stall1.year, carsAsObject.stall2.year)
);
