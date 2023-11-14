function steamrollArray(arr) {
    const response = []
    for(let i = 0; i < arr.length; i++) {
      if(Array.isArray(arr[i])) {
        response.push(...steamrollArray(arr[i])) 
      } else {
        response.push(arr[i])
      }
    
    }
    return response;
  
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);