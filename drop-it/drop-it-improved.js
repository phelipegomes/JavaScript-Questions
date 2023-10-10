function dropElements(arr, func) {
    // Encontre o primeiro índice do elemento que atende ao critério da função
    const startIndex = arr.findIndex(func);
    
    // Se não houver nenhum elemento que atenda ao critério, retorne um array vazio
    if (startIndex === -1) {
      return [];
    }
    
    // Caso contrário, retorne os elementos a partir do índice encontrado
    return arr.slice(startIndex);
  }
  
  console.log(dropElements([1, 2, 3], (n) => n < 3)); // Resultado: [1, 2]
  