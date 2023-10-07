function smallestCommons(arr) {
  // Crie o objeto para o desafio
  const myObject = {};

  // Inclua a matriz ordenada na propriedade parameters
  myObject.parameters = arr.slice().sort((a, b) => a - b); // Copie e ordene a matriz

  // Inicialize uma matriz que receberá os possíveis divisores
  myObject.dividers = [];

  // Iteração que adiciona todos os divisores na matriz de divisores
  for (let index = myObject.parameters[0] + 1; index < myObject.parameters[1]; index++) {
    myObject.dividers.push(index);
  }

  // Inicialize a propriedade needStop para parada do iterador
  myObject.needStop = false;

  let mmcValue = myObject.parameters[1]; // Comece com o valor do segundo parâmetro

  while (!myObject.needStop) {
    mmcValue += myObject.parameters[1]; // Atualize o valor do MMC do segundo parâmetro

    // Verifique se o MMC do segundo parâmetro é divisível pelo primeiro parâmetro
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

console.log(smallestCommons([2, 10])); 
