function palindrome(str) {
    const reg = /_*\W*/gi
    const res = str
      .toLowerCase()
      .split(reg)
      .join("")
  
    const len = res.length
    const lastIndex = len - 1
    let count = 0;
  
    for(let idx = 0; idx < len; idx++) {
      if(res[idx] === res[lastIndex - idx]) {
        count++
      }
    }
  
    return count === len ? true : false;
  }
  
  palindrome("almostomla");