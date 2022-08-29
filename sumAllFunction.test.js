function sumAll(arr) {
  let accSuma = 0;
  let initialValue = arr[1];
  while (arr[1] >= arr[0]) {
    accSuma += arr[1];
    arr[1]--;
  }

  while (arr[1] <= arr[0] && initialValue === arr[1]) {

    accSuma += arr[0];
    arr[0]--;
  }
  return accSuma
}




test('sumAllFunction takes an array of two numbers and return the sum of all numbers between them ', () => {
  expect(sumAll([1, 4])).toStrictEqual(10);
});

test('sumAllFunction takes an array of two numbers and return the sum of all numbers between them', () => {
  expect(sumAll([10, 5])).toStrictEqual(45);
});