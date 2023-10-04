function smallestCommons(arr) {

    // Crio o Objeto para o desafio
    let myObject = {};
  
    // Incluo a matriz ordenada na propiedade parameters
    myObject.parameters = arr.sort();
  
    // Inicializo os MMC's padrões
    myObject.firstMMC = [0];
    myObject.seccondMMC = [0];
    
    // Inicializo uma matriz que receberá os possíveis divisores
    myObject.dividers = [];
  
    // Iteracao que adiciona todos os divisores na matriz de divisores
    for(let index = myObject.parameters[0] + 1; index < myObject.parameters[1]; index++) {
      myObject.dividers.push(index)
    }
  
    myObject.needStop = false
    myObject.mmc = [];
    let idx = 0;
    while(idx < 10) {
      idx++
      if(myObject.seccondMMC >= 10) {
        myObject.needStop = true
      } 
      myObject.firstMMC.push(myObject.parameters[0] + myObject.firstMMC[myObject.firstMMC.length - 1]) 
      myObject.seccondMMC.push(myObject.parameters[1] + myObject.seccondMMC[myObject.seccondMMC.length - 1]) 
  
      if(myObject.firstMMC === myObject.seccondMMC) {
          console.log(myObject.firstMMC, myObject.seccondMMC)
      }
    }
  
    for(const index in myObject.seccondMMC) {
      if(myObject.firstMMC.indexOf(myObject.seccondMMC[index]) > 1) {
        myObject.mmc.push(myObject.seccondMMC[index])
      }
    }
  
    // Inicializo um contador para encontrar um MMC divisivel por todos da matriz de divisores
        myObject.count = 0;
  
        // Itero sobre cada divisor para encontrar o MMC divisivel por todos da matriz de divisores
        myObject.dividers.forEach(divisor => {
          if(myObject.mmc % divisor === 0) {
            myObject.count++
            console.log(`variavel num [${myObject.firstMMC}] é divisivel por [${divisor}]`);
          }
  
          // Se todos os divisores forem divisiveis pelo MMC, eu retorno o MMC
          if(myObject.count === myObject.dividers.length) {
            myObject.result = 0
          }
        })
    console.log(myObject.firstMMC)
    console.log(myObject.seccondMMC)
    
    return 0; 
  }
  smallestCommons([1,5]);