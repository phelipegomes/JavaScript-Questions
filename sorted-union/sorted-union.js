function uniteUnique(...arr) {
    let myArr = [];
    for(const i in arr){
      for(const j in arr[i]) {
        myArr.push(arr[i][j]);
      }
    }
    return myArr.filter(function(num, idx) {
      if(myArr.indexOf(myArr[idx]) == idx) {
        return num
      }
    })
  }
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));