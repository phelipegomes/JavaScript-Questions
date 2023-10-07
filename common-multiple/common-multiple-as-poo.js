function smallestCommons(arr) {
  // Crio o objeto para o desafio
  const myObject = {};

  // Sorteio os valores mínimo e máximo corretamente
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Inicializando uma matriz que receberá os possíveis divisores
  myObject.dividers = [];

  // Iteração para adicionar todos os divisores na matriz de divisores
  for (let index = min; index <= max; index++) {
    myObject.dividers.push(index);
  }

  // Inicializo a propriedade needStop para parada do iterador
  myObject.needStop = false;

  let mmcValue = max;

  while (!myObject.needStop) {
    mmcValue += max;

    // Aqui eu verifico se o MMC do segundo parâmetro é divisível por todos os divisores
    let isCommonMultiple = true;
    for (const divisor of myObject.dividers) {
      if (mmcValue % divisor !== 0) {
        isCommonMultiple = false;
        break;
      }
    }

    if (isCommonMultiple) {
      myObject.needStop = true;
      myObject.result = mmcValue;
    }
  }

  return myObject.result;
}

console.log(smallestCommons([23, 18]));
