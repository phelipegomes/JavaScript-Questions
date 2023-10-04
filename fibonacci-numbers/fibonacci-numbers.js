function sumFibs(num) {
    let acc = [];
    let index = 1;
    let flag = true
    while(flag) {
      if(acc.length < 1) {
        acc.push(0,1)
      }
      if(acc[acc.length - 1] < num) {
        if(acc[index] + acc[index - 1] > num) {
          flag = false
        } else {
          acc.push(acc[index] + acc[index - 1])
          index++
        }
      } else {
        flag = false
      }
    }
    
    return acc.filter(num => num % 2 !== 0).reduce((acc, num) => acc + num,0);
  }
  sumFibs(10);