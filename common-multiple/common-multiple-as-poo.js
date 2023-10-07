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
  
    // Instancio a propiedade needStop para parada do iterador
    myObject.needStop = false
    let idx = 0;
  
    //Loop test
    while(!myObject.needStop) {
      idx++
  
      // Extracao do mmc do primeiro parametro
      myObject.firstMMC.push(myObject.parameters[0] + myObject.firstMMC[myObject.firstMMC.length - 1]) 
  
      // Extracao do mmc do segundo parametro
      myObject.seccondMMC.push(myObject.parameters[1] + myObject.seccondMMC[myObject.seccondMMC.length - 1]) 
     
      // Aqui eu filtro os valores comuns num array chamado mmc
      myObject.mmc = myObject.firstMMC.filter(number => myObject.seccondMMC.indexOf(number) > 0)
  
      // Inicializo um contador para encontrar um MMC divisivel por todos
      
  
      // Itero sobre cada divisor para encontrar o MMC divisivel por todos
      for(const idx in myObject.mmc) {
        myObject.count = 0;
        myObject.dividers.forEach(divisor => {
          if(myObject.mmc[idx] % divisor === 0) {
            myObject.count++
          } 
          if(myObject.count === myObject.dividers.length) {
            myObject.needStop = true;
            myObject.result = myObject.mmc[idx]
          }
        })
      }
    }
    return myObject.result
  }
  console.log(smallestCommons([2,10]));