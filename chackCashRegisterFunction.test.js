//Multiplicamos x 100 para poder trabajar con enteros y no con decimales.

const currencyUnit = {
  "PENNY": 1,
  "NICKEL": 5,
  "DIME": 10,
  "QUARTER": 25,
  "ONE": 100,
  "FIVE": 500,
  "TEN": 1000,
  "TWENTY": 2000,
  "ONE HUNDRED": 10000
}

function checkCashRegister(price, cash, cid) {
  let changeSum = cash * 100 - price * 100; // esta variable es el vuelto que tengo que entregar

  let changeSumCheck = changeSum; // copia de change sum para guardarla.
  let change = []; // array que nos piden como parte de la respuesta
  let status = ''; // array que nos piden como parte de la respuesta

  let cidSum = 0; // Suma del dinero total en la registradora
  let filteredCid = cid.filter(elem => elem[1] !== 0).reverse();// Filtra las currencies cuyo value sea cero y reversa el array resultante para partir con las mayores denominaciones.

  filteredCid.forEach(elem => {
    let curr = elem[0]; // el primer elemento del array elem. Corresponde a la currency.(ej: Penny)

    let currSum = elem[1] * 100; // segundo elemento del array element cuyo value es la cantidad de la currency correspondiente en la cid. multiplicado por 100 para trabajar con eneteros en los cálculos.

    cidSum += currSum // acumulador que nos entregará, despues de iterar  por las currencys, la suma del dinero en la cid.

    let amount = 0;
    while (changeSum >= currencyUnit[curr] && currSum > 0) { // calcula cuantos de cada currecy tengo para poder dar el vuelto y va descontando el valor de changeSum y de currSum
      amount += currencyUnit[curr];
      changeSum -= currencyUnit[curr];
      currSum -= currencyUnit[curr];
    } if (amount !== 0) {
      change.push([curr, amount / 100])
    }


  });
  if (changeSum > 0) {
    status = 'INSUFFICIENT_FUNDS'
    change = [];
  } else if (changeSum == 0 && changeSumCheck == cidSum) {
    status = 'CLOSED';
    change = cid;
  } else {
    status = 'OPEN';
  }

  return { 'status': status, 'change': change }



}


test('convert to roman number', () => {
  expect(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])).toStrictEqual({ status: "OPEN", change: [["QUARTER", 0.5]] });
});
