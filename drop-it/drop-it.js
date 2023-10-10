function dropElements(arr, func) {
    for(const index in arr) {
      if(func(arr[index])) {
        return arr.slice(index)
      }
    } 
    return []
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });